import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Specify weights you want to use
  variable: "--font-poppins", // Optional: for using CSS variables
  display: "swap",
});

export const metadata: Metadata = {
  title: "Weekend Labs",
  description: "Everything Software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head>
        <link
          rel="icon"
          type="image/png"
          href="/app/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/app/favicon.svg" />
        <link rel="shortcut icon" href="/app/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/app/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Weekend Labs" />
        <link rel="manifest" href="/app/site.webmanifest" />
      </head> */}
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
