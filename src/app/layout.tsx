import type { Metadata } from "next";
import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "optional",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "optional",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["600"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nandhini M | Software Developer",
  description:
    "Nandhini M — Software Developer at Skillmine Technology Consulting. Building enterprise web applications with React, Next.js, Angular and MongoDB.",
  metadataBase: new URL("https://nandhini-m.online"),
  authors: [{ name: "Nandhini M" }],
  openGraph: {
    title: "Nandhini M | Software Developer",
    description:
      "Building enterprise web applications with React, Next.js, Angular and MongoDB.",
    url: "https://nandhini-m.online/",
    siteName: "Nandhini M Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nandhini M — Software Developer portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandhini M | Software Developer",
    description:
      "Building enterprise web applications with React, Next.js, Angular and MongoDB.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://nandhini-m.online/",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='16' fill='%23111111'/><text x='50' y='70' font-family='system-ui' font-size='56' font-weight='700' fill='%23C6A75E' text-anchor='middle'>N</text></svg>",
  },
  other: {
    "color-scheme": "dark light",
    "theme-color": "#111111",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://api.web3forms.com" />
        <link
          rel="preconnect"
          href="https://api.web3forms.com"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t)}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nandhini M",
              jobTitle: "Software Developer",
              url: "https://nandhini-m.online",
              sameAs: [
                "https://github.com/Nandhini-M-dev",
                "https://www.linkedin.com/in/nandhini-m-747b84370/",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "Angular",
                "Node.js",
                "MongoDB",
                "JavaScript",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "P.S.R Engineering College",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable}`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
