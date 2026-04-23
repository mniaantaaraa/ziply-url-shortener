import { Epilogue, Manrope } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/providers/toast-provider";
import { AuthProvider } from "@/components/providers/auth-provider";

import { ThemeProvider } from "@/components/providers/theme-provider";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { auth } from "@/server/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ziply | Redefining the Link",
  description: "Ziply - High-performance URL shortening for modern brands.",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${epilogue.variable} ${manrope.variable} antialiased min-h-screen flex flex-col font-body bg-background text-on-surface`}
      >
        <ThemeProvider>
          <AuthProvider>
            <Header />
            <main className="flex-1 flex flex-col">{children}</main>
            {!isAuthenticated && <Footer />}
            <ToastProvider />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
