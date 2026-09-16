import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Sacrament Meetings",
  description: "This site is designed to help bishoprics and branch leaders when it comes to sacrament meetings.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />

        <div className="flex-1 bg-black">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
