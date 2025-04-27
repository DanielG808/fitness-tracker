import "../../app/globals.css";
import { inter } from "@/lib/constants/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex h-screen`}>
        {children}
      </body>
    </html>
  );
}
