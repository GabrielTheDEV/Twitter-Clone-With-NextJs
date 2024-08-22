import type { Metadata } from "next";
import "../style/globals.css";
import { NavBar } from "@/components/navbar/NavBar";


export const metadata: Metadata = {
  title: "Twitter Clone in Next",
  description: "Twitter Clone in Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex">
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
