import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMIACH Technologies | Smart AV Hardware, Kiosks & Digital Podiums",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-[#08090B] text-white selection:bg-[#FF2B35] selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
