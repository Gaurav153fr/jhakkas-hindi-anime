import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/top-nav-header";
import NextTopLoader from 'nextjs-toploader';
import { Analytics } from '@vercel/analytics/react';
import { UmamiAnalytics } from "@/components/UmamiAnalytics";
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
       <link rel="manifest" href="/manifest.json" />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          > <NextTopLoader />
             <Header />
             <main>{children}
             <Analytics />
             <Toaster/></main>
     
          </ThemeProvider>
          <UmamiAnalytics />
        </body>
    </html>
  );
}
