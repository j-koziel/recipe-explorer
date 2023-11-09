import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Recipe Explorer",
  description: "Explore recipes I guess 🤷‍♂️",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground min-h-screen flex flex-col justify-between items-center">
        <NavBar />
        <main className="flex flex-col items-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
