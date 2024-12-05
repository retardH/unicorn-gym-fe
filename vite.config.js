import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // proxy: {
    //   "/search-api": {
    //     target:
    //       "https://bw7v2haut2.execute-api.us-east-1.amazonaws.com/dev/search",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/search/, ""),
    //   },
    // },
  },
});
