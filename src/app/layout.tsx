import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer'
import CartProvider from "@/components/Providers";
import ShoppingCartModal from "@/components/ShoppingCartModal";

const raleway_inter = Raleway({ subsets: ["latin"],variable:'--font-raleway' });

export const metadata: Metadata = {
  title: "ICICLE",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway_inter.variable}>
       <CartProvider>
        <Navbar />
        <ShoppingCartModal />
        {children}
        </CartProvider>
        </body>
    </html>
  );
}
