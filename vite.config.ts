import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  plugins: [react(), mkcert()],
  build: {
    target: 'es2019', 
  },
  server: {
    proxy: {
      "/api": {
        target:
          process.env.NODE_ENV === "production"
            ? "https://server-femcoders.up.railway.app"
            : "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
