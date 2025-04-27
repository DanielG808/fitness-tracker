import type { Metadata } from "next";
import "../globals.css";
import { inter } from "@/lib/constants/fonts";
import NavigationPanel from "@/components/navigation-panel";
import NavigationPanelContextProvider from "@/contexts/navigation-panel-context";
import PageContentContainer from "@/components/page-content-container";
import Header from "@/components/header";
import MenuButton from "@/components/menu-button";
import NavLinkList from "@/components/nav-link-list";
import Footer from "@/components/footer";

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
      <body className={`${inter.className} antialiased flex h-screen`}>
        <NavigationPanelContextProvider>
          <NavigationPanel>
            <MenuButton />
            <NavLinkList />
            <Footer />
          </NavigationPanel>
          <PageContentContainer>
            <Header />
            {children}
          </PageContentContainer>
        </NavigationPanelContextProvider>
      </body>
    </html>
  );
}
