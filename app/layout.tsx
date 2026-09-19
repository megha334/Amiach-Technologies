import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMIACH Technologies",
  description:
    "AMIACH Technologies manufactures premium interactive digital podiums, self-service ordering kiosks, commercial digital signage totems, and architectural mall wayfinding displays.",
  keywords: [
    "smart digital podium",
    "self service kiosk",
    "digital signage totem",
    "wayfinding kiosk",
    "interactive touch console",
    "AV manufacturing",
    "AMIACH Technologies",
  ],
  authors: [{ name: "AMIACH Technologies" }],
  icons: {
    icon: [{ url: "/images/favicon.png", sizes: "32x32", type: "image/png" }],
    shortcut: [
      { url: "/images/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/images/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "AMIACH Technologies | Interactive AV Hardware Manufacturing",
    description:
      "Enterprise interactive touch hardware, smart podiums, ordering kiosks, and commercial digital signage displays.",
    type: "website",
    locale: "en_US",
    siteName: "AMIACH Technologies",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-[#08090B] text-white selection:bg-[#FF2B35] selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
