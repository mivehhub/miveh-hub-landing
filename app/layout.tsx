import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miveh Hub | Web + contenido + diseño",
  description:
    "Boutique digital studio focused on web, content and design for brands that want a clearer digital presence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
