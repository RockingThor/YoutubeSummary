import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutMain from "@/components/LayoutMain";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Youtube Summary",
  description: "Your AI Youtube Summary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutMain>{children}</LayoutMain>
        </ThemeProvider>
      </body>
    </html>
  );
}
