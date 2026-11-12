import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite abrir el servidor de desarrollo desde la IP de red (además de localhost).
  // Sin esto, Next bloquea sus scripts de desarrollo y la página no responde a clics.
  allowedDevOrigins: ["192.168.56.1"],
};

export default nextConfig;
