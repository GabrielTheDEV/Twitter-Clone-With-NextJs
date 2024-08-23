import type { Metadata } from "next";
import "../style/globals.css";

import { Wrapper } from "@/components/ui/wrapper";
import { NavBar } from "@/components/navbar";
import { SideBar } from "@/components/sidebar";


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
      <body>
        <Wrapper>
          <NavBar/>
            {children}
          <SideBar/>
        </Wrapper>
      </body>
    </html>
  );
}
