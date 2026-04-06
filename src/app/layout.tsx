import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import Header from "@/components/layout/Header";
import AosProvider from "@/components/common/AosProvider";

const hellix = localFont({
  src: [
    {
      path: "../../public/fonts/Hellix/Hellix-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Hellix/Hellix-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Hellix/Hellix-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Hellix/Hellix-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Hellix/Hellix-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-hellix",
});

export const metadata: Metadata = {
  title: "Cevver",
  description: "Cevver",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${hellix.className} antialiased`}>
        <Header />
        <main className="w-full">
          <AosProvider>{children}</AosProvider>
        </main>
      </body>
    </html>
  );
}
