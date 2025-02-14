import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CustomThemeProvider from "@/contexts/ThemeProvider";

import { SessionProvider } from "next-auth/react";
import { SnackbarProvider } from "@/contexts/SnackbarProvider";
import { DialogProvider } from "@/contexts/DialogProvider";

export const metadata: Metadata = {
  title: "Offy Template",
  description: "My Nextjs 15 with Mui 6 template",
};

export const viewport: Viewport = {
  width: "device=width",
  initialScale: 1,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider>
          <CustomThemeProvider>
            <SnackbarProvider>
              <DialogProvider>
                <SessionProvider
                  basePath={`${
                    process.env.NEXT_PUBLIC_BASE_PATH || ""
                  }/api/auth`}
                >
                  {children}
                </SessionProvider>
              </DialogProvider>
            </SnackbarProvider>
          </CustomThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
