import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/footer";
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unlimited AI Mock Interviews",
  description:
    "Practice real-world interviews using AI. Record your answers and get feedback tailored to your job role/description, experience, and tech stack",
  icons: {
    icon: "/assets/svg/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ToastContainer autoClose={3000} hideProgressBar closeOnClick />
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
