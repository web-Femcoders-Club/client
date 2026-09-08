import axios from "axios";
import { ArrowLeft, Camera, Phone, ShieldCheck, User, Users } from "lucide-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { assignAchievementByAdmin } from "../../../api/achievementsApi";
import { ModalContext } from "../../../context/ModalContext";
import "./personaliza-perfil.css";

type Aviso = { tono: "ok" | "error"; texto: string } | null;

/*
 * Los cuatro valores que el servidor guarda (server, src/user/genero.ts). Él
 * además tolera variantes antiguas —«Prefiero no decirlo», «no-binario»— y las
 * normaliza al guardar, pero rechaza con un 400 lo que no reconoce: adivinar
 * ahí sería asignarle a alguien un género que no ha declarado.
 *
 * Esta pantalla ofrece solo los canónicos. Lo que importa es que si el valor
 * guardado no es ninguno de estos, el `<select>` enseña el marcador de posición
 * pero el formulario seguía enviando el valor viejo: se veía «Selecciona tu
 * género», no se tocaba nada, y guardar fallaba con un valor invisible.
 */
const GENEROS = ["Mujer", "Hombre", "No binario", "Prefiero no decir"] as const;

/**
 * Traduce un fallo de axios a algo que se pueda leer y arreglar.
 *
 * Antes los dos `catch` de esta pantalla mostraban siempre la misma frase
 * genérica y no registraban nada, así que un 401 por sesión caducada, un 403
 * por perfil ajeno y un 400 por un campo vacío se veían exactamente igual.
 */
const explicarFallo = (error: unknown): string => {
  if (!axios.isAxiosError(error)) {
    return "Hubo un problema inesperado. Por favor, inténtalo de nuevo.";
  }

  if (!error.response) {
    return "No se pudo contactar con el servidor. Comprueba tu conexión.";
  }

  const { status, data } = error.response;

  if (status === 401) {
    return "Tu sesión ha caducado. Vuelve a iniciar sesión.";
  }
  if (status === 403) {
    return "No tienes permiso para editar este perfil.";
  }
  if (status === 413) {
    return "La imagen es demasiado grande para el servidor.";
  }
  if (status === 400) {
    // class-validator devuelve `message` como lista de motivos.
    const motivos = (data as { message?: string | string[] })?.message;
    const detalle = Array.isArray(motivos) ? motivos.join(". ") : motivos;
    return detalle
      ? `El servidor rechazó los datos: ${detalle}`
      : "El servidor rechazó los datos del formulario.";
  }

  return `Hubo un problema al guardar (error ${status}). Inténtalo de nuevo.`;
};

/*
 * Antes esto era una tarjeta que giraba en 3D: delante el logo, detrás el
 * formulario. El giro se disparaba con `:hover`, así que con sacar el ratón del
 * área la tarjeta se daba la vuelta y se llevaba el formulario a medio
 * rellenar. En móvil, donde no hay hover, solo quedaba un botón de unos 36px.
 *
 * Nada de la lógica cambia: mismas llamadas, mismo cuerpo del PUT, mismo aviso
 * de tamaño y misma asignación del logro. Lo que cambia es la pantalla.
 */
const PersonalizaPerfil: React.FC = () => {
  const navigate = useNavigate();
  const { openModal } = useContext(ModalContext);

  const [userData, setUserData] = useState({
    avatar: null as string | null,
    newAvatar: null as string | null,
    /*
     * El id sale de la sesión, no de la respuesta del servidor. Antes se
     * guardaba dentro del `if (response.data)` de la carga, así que un fallo al
     * cargar dejaba el formulario relleno y sin poder guardarse nunca: al
     * pulsar Guardar decía «No se encontró el ID del usuario» sin más pista.
     */
    userId: sessionStorage.getItem("userId"),
    userName: "",
    userLastName: "",
    userGender: "",
    userTelephone: "",
  });

  const [aviso, setAviso] = useState<Aviso>(null);
  const [hayCambios, setHayCambios] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [cargaFallida, setCargaFallida] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  /*
   * A dónde vuelve el botón. Se copia la regla que ya usa el desplegable del
   * avatar en Header: el panel solo existe para admin, y /welcome necesita
   * `userName` y `userId` en el state o su saludo cae a «Usuario».
   */
  const esAdmin = sessionStorage.getItem("userRole") === "admin";

  const volver = () => {
    if (esAdmin) {
      navigate("/admin");
      return;
    }
    navigate("/welcome", {
      state: {
        userName: sessionStorage.getItem("userName") || "Usuario",
        userId: Number(sessionStorage.getItem("userId")) || undefined,
      },
    });
  };

  useEffect(() => {
    const storedUserId = sessionStorage.getItem("userId");
    if (storedUserId) {
      fetchUserDetails(storedUserId);
    } else {
      setAviso({
        tono: "error",
        texto:
          "Parece que no estás logeada correctamente. Vuelve a iniciar sesión.",
      });
    }
  }, []);

  const fetchUserDetails = async (userId: string) => {
    try {
      const authToken = sessionStorage.getItem("authToken");
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user/${userId}`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );

      if (response.data) {
        setUserData((prevData) => ({
          ...prevData,
          avatar: response.data.userAvatar,
          userName: response.data.userName,
          userLastName: response.data.userLastName,
          userGender: response.data.userGender,
          userTelephone: response.data.userTelephone,
        }));
      }
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
      /*
       * Que la carga falle importa más de lo que parecía: el servidor exige
       * nombre, apellidos y género no vacíos, así que si esto no trae los datos
       * el formulario queda en blanco y cualquier intento de guardar se
       * rechaza con un 400. Por eso se marca y se bloquea el guardado.
       */
      setCargaFallida(true);
      setAviso({ tono: "error", texto: explicarFallo(error) });
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setAviso({
          tono: "error",
          texto:
            "El archivo es demasiado grande. El tamaño máximo permitido es 2 MB.",
        });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prevData) => ({
          ...prevData,
          newAvatar: reader.result as string,
        }));
        setHayCambios(true);
        setAviso(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = async () => {
    if (!userData.userId) {
      setAviso({ tono: "error", texto: "No se encontró el ID del usuario." });
      return;
    }

    const hadPreviousAvatar = !!userData.avatar;
    const hasNewAvatar = !!userData.newAvatar;

    setGuardando(true);

    try {
      const authToken = sessionStorage.getItem("authToken");
      await axios.put(
        `${import.meta.env.VITE_API_URL}/user/${userData.userId}`,
        {
          userAvatar: userData.newAvatar,
          userName: userData.userName,
          userLastName: userData.userLastName,
          userGender: userData.userGender,
          userTelephone: userData.userTelephone,
        },
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );

      if (userData.newAvatar) {
        sessionStorage.setItem("userAvatar", userData.newAvatar);
        window.dispatchEvent(new Event("storage"));
        setUserData((prevData) => ({
          ...prevData,
          avatar: userData.newAvatar,
          newAvatar: null,
        }));

        // Asignar logro si es la primera vez que sube o modifica el avatar
        // Logro ID 11 = "Perfil completado"
        if (!hadPreviousAvatar || hasNewAvatar) {
          try {
            await assignAchievementByAdmin(Number(userData.userId), 11);
            console.log("Logro de perfil completado asignado");
          } catch (achievementError) {
            console.log("El logro ya fue asignado o hubo un error:", achievementError);
          }
        }
      }

      setHayCambios(false);
      setAviso({ tono: "ok", texto: "Perfil actualizado correctamente." });
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      setAviso({ tono: "error", texto: explicarFallo(error) });
    } finally {
      setGuardando(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setHayCambios(true);
  };

  const avatarMostrado = userData.newAvatar ?? userData.avatar;

  /*
   * Guardar con el formulario en blanco no da un error claro: el servidor exige
   * nombre, apellidos y género no vacíos, así que devuelve un 400 críptico y,
   * si algún día dejara de exigirlo, machacaría los datos buenos con cadenas
   * vacías. Mejor no dejar pulsar.
   */
  /*
   * ¿El género guardado es uno de los cuatro que el servidor acepta? Si no lo
   * es, no se envía: hay que elegir uno. Se enseña cuál era para que se entienda
   * de dónde viene el aviso, en vez de un desplegable en blanco sin explicación.
   */
  const generoGuardado = userData.userGender ?? "";
  const generoValido = (GENEROS as readonly string[]).includes(generoGuardado);
  const generoHeredado = generoGuardado !== "" && !generoValido;

  const puedeGuardar =
    Boolean(userData.userId) && !cargaFallida && generoValido;

  return (
    <div className="bg1 perfil">
      <div className="perfil__contenedor">
        <button type="button" className="perfil__volver" onClick={volver}>
          <ArrowLeft className="perfil__icono-volver" aria-hidden="true" />
          {esAdmin ? "Volver al panel" : "Volver a mi perfil"}
        </button>

        <section aria-labelledby="perfil-titulo">
          <h1 id="perfil-titulo" className="perfil__titulo">
            Personaliza tu perfil
          </h1>
          <div className="perfil__filete" aria-hidden="true" />

          {/*
            Sin sesión no hay nada que guardar, y hay que decirlo ARRIBA. El
            aviso vivía solo en la barra del pie, así que se rellenaba un
            formulario aparentemente normal y el problema aparecía al pulsar
            Guardar, que es el peor momento para enterarse.
          */}
          {!puedeGuardar && (
            <p className="perfil__sin-sesion" role="alert">
              <ShieldCheck size={20} aria-hidden="true" />
              {!userData.userId
                ? "No hemos podido identificar tu sesión, así que los cambios no se pueden guardar. Vuelve a iniciar sesión y entra otra vez aquí."
                : "No hemos podido cargar tus datos, así que el formulario está vacío y guardarlo borraría lo que tienes. Recarga la página antes de editar nada."}
            </p>
          )}

          <div className="perfil__tarjeta">
            {/* Foto */}
            <div className="perfil__seccion">
              <div className="perfil__seccion-cabecera">
                <Camera className="perfil__seccion-icono" aria-hidden="true" />
                <div>
                  <h2 className="perfil__seccion-titulo">Tu foto</h2>
                  <p className="perfil__seccion-ayuda">
                    Aparece en tu carnet y junto a tus comentarios.
                  </p>
                </div>
              </div>

              <div className="perfil__foto-fila">
                {avatarMostrado ? (
                  <img
                    className="perfil__avatar"
                    src={avatarMostrado}
                    alt="Tu foto de perfil"
                  />
                ) : (
                  <div
                    className="perfil__avatar perfil__avatar--vacio"
                    role="img"
                    aria-label="Todavía no has subido ninguna foto"
                  >
                    <User size={40} aria-hidden="true" />
                  </div>
                )}

                <div>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                    aria-label="Subir nueva foto de perfil"
                  />
                  <button
                    type="button"
                    className="perfil__boton-foto"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Camera size={18} aria-hidden="true" />
                    Cambiar foto
                  </button>
                  <p className="perfil__nota-foto">JPG o PNG, máximo 2 MB</p>
                </div>
              </div>
            </div>

            {/* Nombre */}
            <div className="perfil__seccion">
              <div className="perfil__seccion-cabecera">
                <User className="perfil__seccion-icono" aria-hidden="true" />
                <div>
                  <h2 className="perfil__seccion-titulo">Tu nombre</h2>
                  <p className="perfil__seccion-ayuda">
                    Así apareces en la comunidad.
                  </p>
                </div>
              </div>

              {/*
                Los campos llevaban `aria-labelledby` apuntando a su PROPIO id,
                lo que anulaba la `<label>` correcta que tenían al lado: los
                cuatro se anunciaban sin nombre. Basta con la label.
              */}
              <div className="perfil__pareja">
                <div>
                  <label className="perfil__rotulo" htmlFor="nombreUsuario">
                    Nombre
                  </label>
                  <input
                    id="nombreUsuario"
                    type="text"
                    className="perfil__control"
                    value={userData.userName}
                    onChange={(e) =>
                      handleInputChange("userName", e.target.value)
                    }
                  />
                </div>
                <div>
                  <label className="perfil__rotulo" htmlFor="apellidoUsuario">
                    Apellidos
                  </label>
                  <input
                    id="apellidoUsuario"
                    type="text"
                    className="perfil__control"
                    value={userData.userLastName}
                    onChange={(e) =>
                      handleInputChange("userLastName", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            {/* Género */}
            <div className="perfil__seccion">
              <div className="perfil__seccion-cabecera">
                <Users className="perfil__seccion-icono" aria-hidden="true" />
                <div>
                  <h2 className="perfil__seccion-titulo">Género</h2>
                  <p className="perfil__seccion-ayuda">
                    Decide en qué lista de correo entras. Puedes cambiarlo
                    cuando quieras.
                  </p>
                </div>
              </div>

              <div>
                <label className="perfil__rotulo" htmlFor="generoUsuario">
                  Género
                </label>
                <select
                  id="generoUsuario"
                  className="perfil__control"
                  /*
                    Si lo guardado no es canónico, el desplegable se queda en el
                    marcador: enseñar seleccionado algo que no está en la lista
                    es imposible, y enviarlo a ciegas es lo que rompía el
                    guardado.
                  */
                  value={generoValido ? generoGuardado : ""}
                  onChange={(e) =>
                    handleInputChange("userGender", e.target.value)
                  }
                  aria-describedby={
                    generoHeredado ? "generoUsuario-aviso" : undefined
                  }
                >
                  <option value="" disabled>
                    Selecciona tu género
                  </option>
                  {GENEROS.map((genero) => (
                    <option key={genero} value={genero}>
                      {genero}
                    </option>
                  ))}
                </select>

                {generoHeredado && (
                  <p
                    id="generoUsuario-aviso"
                    className="perfil__ayuda-campo perfil__ayuda-campo--aviso"
                  >
                    Lo que hay guardado («{generoGuardado}») ya no es un valor
                    válido, así que hay que elegir uno de la lista antes de poder
                    guardar.
                  </p>
                )}
              </div>
            </div>

            {/* Teléfono */}
            <div className="perfil__seccion">
              <div className="perfil__seccion-cabecera">
                <Phone className="perfil__seccion-icono" aria-hidden="true" />
                <div>
                  <h2 className="perfil__seccion-titulo">Teléfono</h2>
                  <p className="perfil__seccion-ayuda">
                    Solo lo usamos si hace falta contactarte por un evento.
                  </p>
                </div>
              </div>

              <div>
                <label className="perfil__rotulo" htmlFor="telefonoUsuario">
                  Teléfono
                </label>
                <input
                  id="telefonoUsuario"
                  type="tel"
                  className="perfil__control"
                  value={userData.userTelephone}
                  onChange={(e) =>
                    handleInputChange("userTelephone", e.target.value)
                  }
                />
              </div>
            </div>

            {/*
              Antes esto eran cuatro `alert()` del navegador. El mensaje vive
              ahora junto al botón que lo provoca, y se anuncia solo: `alert`
              para el error, `status` para lo demás.
            */}
            <div className="perfil__barra">
              {/*
                El enlace va donde se entregan los datos, no solo en el pie: de
                los cuatro campos, el de género tiene una consecuencia que no se
                adivina —decide en qué lista de correo entra la persona— y esa
                es justo la pregunta que uno se hace al rellenarlo.
              */}
              <button
                type="button"
                className="perfil__privacidad"
                onClick={() => openModal("privacyPolicy")}
              >
                <ShieldCheck size={18} aria-hidden="true" />
                Cómo usamos tus datos
              </button>

              <div className="perfil__barra-acciones">
                {aviso ? (
                  <p
                    className={`perfil__estado perfil__estado--${aviso.tono}`}
                    role={aviso.tono === "error" ? "alert" : "status"}
                  >
                    {aviso.texto}
                  </p>
                ) : (
                  <p
                    className={`perfil__estado${
                      hayCambios ? " perfil__estado--pendiente" : ""
                    }`}
                    role="status"
                  >
                    {hayCambios
                      ? "Tienes cambios sin guardar"
                      : "Sin cambios sin guardar"}
                  </p>
                )}

                {/* Sin id de sesión no se puede guardar: mejor decirlo que
                    dejar pulsar y fallar. */}
                <button
                  type="button"
                  className="perfil__guardar"
                  onClick={handleSaveProfile}
                  disabled={guardando || !puedeGuardar}
                >
                  {guardando ? "Guardando…" : "Guardar cambios"}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PersonalizaPerfil;
