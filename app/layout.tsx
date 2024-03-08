import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import NextTopLoader from 'nextjs-toploader';

export const metadata: Metadata = {
  title: "Jhakkas: hindi anime",
  description: "Watch anime in your regional language",
  icons:"/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
       <link rel="icon" type="image/png" href="/fv.png" />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > <NextTopLoader />
             <Header />
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
