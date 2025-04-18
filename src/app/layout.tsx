import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/constants/fonts";
import NavigationPanel from "@/components/navigation-panel";
import NavigationPanelContextProvider from "@/contexts/navigation-panel-context";

export const metadata: Metadata = {
  title: "Fitness Tracker",
  description: "Get fit with the fitness tracker!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex`}>
        <NavigationPanelContextProvider>
          <NavigationPanel />
          {children}
        </NavigationPanelContextProvider>
      </body>
    </html>
  );
}
