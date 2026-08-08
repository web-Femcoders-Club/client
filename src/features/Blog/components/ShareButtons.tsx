import React, { useState } from "react";
import { BsFacebook, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaLink, FaCheck } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SITE_URL = "https://www.femcodersclub.com";

interface ShareButtonsProps {
  /** Ruta canónica del post, por ejemplo "/noticias/hackbarna-ai-summit-26" */
  path: string;
  /** Título del post, usado como texto en WhatsApp y X */
  title: string;
}

/**
 * Fila de botones para compartir un post.
 *
 * Cada icono lleva a su red: WhatsApp, LinkedIn, Facebook y X son las que
 * ofrecen un endpoint público para compartir por URL.
 *
 * Quedan fuera, y no por descuido:
 *
 * - Instagram — su API de Stories existe, pero exige una app nativa iOS/Android
 *   con Facebook App ID (intents en Android, esquema instagram-stories:// en
 *   iOS) y solo acepta imagen o vídeo, nunca un enlace. Desde una web no hay
 *   forma de invocarla, y tampoco se registra como destino en la bandeja nativa
 *   del sistema. El flujo real es copiar el enlace y pegarlo en la Story, que es
 *   justo lo que cubre el botón de copiar.
 * - Slack y TikTok — no existe endpoint web de compartir. En Slack habría que
 *   registrar una app con OAuth, y los webhooks publican en nuestro propio
 *   workspace, no en el de quien lee.
 *
 * La URL se construye siempre desde SITE_URL y no desde window.location.href,
 * para no arrastrar parámetros UTM, hashes ni localhost al compartir.
 */
const ShareButtons: React.FC<ShareButtonsProps> = ({ path, title }) => {
  const [copied, setCopied] = useState(false);

  const url = `${SITE_URL}${path}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Sin permiso de portapapeles (http, navegador antiguo): no hacemos nada
      // visible más allá de no confirmar la copia.
    }
  };

  const links = [
    {
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      label: `Compartir "${title}" en WhatsApp`,
      Icon: BsWhatsapp,
    },
    {
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      label: `Compartir "${title}" en LinkedIn`,
      Icon: BsLinkedin,
    },
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      label: `Compartir "${title}" en Facebook`,
      Icon: BsFacebook,
    },
    {
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      label: `Compartir "${title}" en X`,
      Icon: FaSquareXTwitter,
    },
  ];

  return (
    <div className="social-share">
      <div className="share-buttons">
        {links.map(({ href, label, Icon }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="share-link"
          >
            <Icon className="social-icon" aria-hidden="true" />
          </a>
        ))}

        <button
          type="button"
          onClick={handleCopy}
          aria-label={
            copied ? "Enlace copiado al portapapeles" : "Copiar enlace del post"
          }
          className="share-link share-copy-button"
        >
          {copied ? (
            <FaCheck
              className="social-icon social-icon--copied"
              aria-hidden="true"
            />
          ) : (
            <FaLink className="social-icon" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Confirmación anunciada por lectores de pantalla */}
      <span role="status" aria-live="polite" className="visually-hidden">
        {copied ? "Enlace copiado al portapapeles" : ""}
      </span>
    </div>
  );
};

export default ShareButtons;
