import { Geist, Comfortaa, Poppins } from "next/font/google";
import "./globals.css";


const comfortaa = Comfortaa({
  variable: "Comfortaa",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose weights you need
  variable: "--font-poppins", // Define a CSS variable
});

export const metadata = {
  title: "MEMO | Relive Every Vibe",
  description: "Launching Soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${comfortaa.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
