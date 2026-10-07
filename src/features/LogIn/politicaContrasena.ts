/*
 * La política de contraseñas del backend (server/src/auth/password.policy.ts):
 * 8 caracteres, una mayúscula, una minúscula y un número. Se aplica en el
 * alta, en el perfil y al restablecer; aquí la ven el registro y «Nueva
 * contraseña». Si el backend la endurece, cambia también aquí.
 */
export const REQUISITOS_CONTRASENA: { texto: string; cumple: (contrasena: string) => boolean }[] = [
  { texto: "Mínimo 8 caracteres", cumple: (c) => c.length >= 8 },
  { texto: "Al menos una mayúscula", cumple: (c) => /[A-Z]/.test(c) },
  { texto: "Al menos una minúscula", cumple: (c) => /[a-z]/.test(c) },
  { texto: "Al menos un número", cumple: (c) => /[0-9]/.test(c) },
];

export const cumplePoliticaContrasena = (contrasena: string) =>
  REQUISITOS_CONTRASENA.every(({ cumple }) => cumple(contrasena));
