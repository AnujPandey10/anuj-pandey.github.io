
import type { Metadata } from "next";
import "./globals.css";

// Fallback to system fonts if local fonts are missing to prevent build errors
export const metadata: Metadata = {
  title: "Anuj Pandey | Data Scientist",
  description: "Portfolio of Anuj Pandey - Data Scientist & AI Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`antialiased bg-background text-foreground font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
