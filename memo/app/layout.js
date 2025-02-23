import { Geist, Comfortaa } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const comfortaa = Comfortaa({
  variable: "Comfortaa",
  subsets: ["latin"],
});

export const metadata = {
  title: "MEMO | Relive Every Vibe",
  description: "Launching Soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${comfortaa.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
