import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Providers } from "./providers";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Recipe Explorer",
  description: "Explore recipes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <Providers>
          <main className="min-h-screen flex flex-col items-center">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
