"use client";

import "../styles/global.css";
import TopBar from "./components/topbar/Topbar";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
