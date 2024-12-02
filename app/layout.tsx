import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "With Garage Demo",
  description: "With Garage Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-auto">
        <Header />
        <main className="max-w-[1440px] h-auto mx-auto px-4 pt-[88px] pb-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
