import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const robot_font = Roboto({ 
  subsets: ["latin"],
  weight: ['400' , '500' , '700' , '900']
 });

export const metadata: Metadata = {
  title: "Do it Yourself",
  description: "To do list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-ao">
      <body className={robot_font.className}>{children}</body>
    </html>
  );
}
