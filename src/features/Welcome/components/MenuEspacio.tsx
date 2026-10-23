import React from "react";
import { NavLink } from "react-router-dom";
import {
  Briefcase,
  FileUp,
  FolderOpen,
  Heart,
  Home,
  MessageCircle,
  Presentation,
  ScrollText,
  UserCog,
} from "lucide-react";
import CollapsibleSidebar from "../../../components/ui/CollapsibleSidebar";
import "./MenuEspacio.css";

/*
 * Cada enlace lleva icono porque el menú contraído deja solo la franja de
 * iconos: el texto se oculta a la vista pero sigue en el árbol de
 * accesibilidad, así que un lector de pantalla lo anuncia entero. El `title` es
 * para quien navega con ratón y solo ve el dibujo.
 *
 * «Inicio» va primero: fuera de /welcome (en /vonage) es la forma de volver.
 */
const ENLACES_MENU = [
  { to: "/welcome", texto: "Inicio", Icono: Home },
  { to: "/ofertas-de-trabajo", texto: "Ofertas de Trabajo", Icono: Briefcase },
  { to: "/personaliza-perfil", texto: "Personaliza tu perfil", Icono: UserCog },
  { to: "/presentaciones-destacadas", texto: "Presentaciones", Icono: Presentation },
  {
    to: "/recursos-comunidad-femcoders-club",
    texto: "Recursos Exclusivos",
    Icono: FolderOpen,
  },
  { to: "/vonage", texto: "Vonage", Icono: MessageCircle },
  { to: "/mentoria", texto: "¿Necesitas mentoría?", Icono: Heart },
  { to: "/enviar-documentacion", texto: "Enviar documentación", Icono: FileUp },
  { to: "/codigo-de-conducta", texto: "Código de conducta", Icono: ScrollText },
];

/**
 * El menú lateral de «Tu espacio», compartido por /welcome y /vonage. Antes
 * vivía dentro de WelcomePage y en /vonage no había menú.
 *
 * La misma `storageKey` en las dos páginas: si se contrae en una, sigue
 * contraído en la otra. NavLink marca la página actual con
 * `aria-current="page"`, que el lector anuncia y el CSS resalta.
 *
 * Cada enlace se etiquetaba antes con un `<h2>`: encabezados falsos que
 * ensuciaban el esquema de la página. Es un enlace, y se marca como tal.
 */
const MenuEspacio: React.FC = () => (
  <CollapsibleSidebar storageKey="femcoders:menu-bienvenida" label="menú de bienvenida" title="Tu espacio">
    <nav aria-label="Tu espacio">
      <ul className="welcome-menu__lista">
        {ENLACES_MENU.map(({ to, texto, Icono }) => (
          <li key={to}>
            <NavLink to={to} end className="welcome-menu__enlace" title={texto}>
              <Icono className="welcome-menu__icono" aria-hidden="true" />
              <span className="fem-sidebar__label">{texto}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </CollapsibleSidebar>
);

export default MenuEspacio;
