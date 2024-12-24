import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu/Menu";
import { ModalProvider } from "./Utilities/ModalContext";
import InquiryForm from "./components/InquiryForm.tsx/InquiryForm";
import Footer from "./components/Footer";
import SlideButton from "./components/SlideButton/SlideButton";

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
      <body className={`${poppins.className} antialiased`}>
        {/* <Navbar /> */}
        <ModalProvider>
          <Menu />
          <SlideButton />
          {children}
          <Footer />

          <InquiryForm />
        </ModalProvider>
      </body>
    </html>
  );
}
