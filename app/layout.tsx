import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shohan - Web Developer",
  description: "Crafting modern web applications and digital solutions. Portfolio of Shohan Rahman, a passionate web developer.",
  keywords: ["web developer", "frontend", "backend", "React", "Next.js", "portfolio"],
  authors: [{ name: "Shohan Rahman" }],
  creator: "Shohan Rahman",
  openGraph: {
    title: "Shohan - Web Developer",
    description: "Crafting modern web applications and digital solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shohan - Web Developer",
    description: "Crafting modern web applications and digital solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
