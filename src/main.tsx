import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/rediseno.css'

// El texto que el prerender escribe para los rastreadores (ver index.html):
// con la app en marcha sobra, y en el DOM renderizado sería texto oculto.
document.querySelectorAll('.contenido-sin-js').forEach((bloque) => bloque.remove())

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
