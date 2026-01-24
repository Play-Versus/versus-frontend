import type { Metadata, Viewport } from "next";
import { Open_Sans, Sora, Rajdhani} from "next/font/google";
import "./globals.css"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const rajdhani = Rajdhani({
  weight:["300","400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rajdhani"
});

export const metadata: Metadata = {
  title: "Versus - The Future of Sports Matchmaking",
  description:
    "A new era for players, teams, and the game-day spirit. Match instantly with people ready to play.",
  keywords: ["sports", "matchmaking", "pickup games", "athletes", "versus"],
  authors: [{ name: "Versus Team" }],
  openGraph: {
    title: "Versus - The Future of Sports Matchmaking",
    description: "Something big is coming for sports lovers.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Versus - The Future of Sports Matchmaking",
    description: "Something big is coming for sports lovers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${rajdhani.variable} ${sora.variable}  antialiased`}>
      <body className={`${openSans.variable} ${rajdhani.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}