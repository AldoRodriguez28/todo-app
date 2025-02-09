import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./Provider"; // Importa el Provider global
import { ThemeProvider } from "next-themes";


export const metadata: Metadata = {
  title: "To-Do App",
  description: "Una aplicación moderna de gestión de tareas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>

      <body
      >

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>

      </body>
    </html>
  );
}
