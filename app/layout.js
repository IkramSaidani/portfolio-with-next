import localFont from "next/font/local";

import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Portfolio Ikram",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body style={{margin: 0, padding: 0}} className={`${geistSans.variable} ${geistMono.variable}`}>
      <Navbar />
          {children}
      <Footer />
        </body>
      </html>
    </>
  );
}
