import type { Metadata } from "next";
import { Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";

// Stand-in for NB International Pro (commercial). 400 for everything, 600 for the logo only.
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Khaleel Alhaji, frontend engineer",
  description:
    "Frontend engineer who designs and builds web interfaces for fintech, agritech, health and retail products. Open to remote frontend roles and freelance work.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/*
          Applies a manual theme choice before first paint, but only while the system theme
          is still what it was when the choice was made. Otherwise CSS follows the system.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme"),s=localStorage.getItem("theme-system"),c=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";if((t==="dark"||t==="light")&&s===c)document.documentElement.setAttribute("data-theme",t);else{localStorage.removeItem("theme");localStorage.removeItem("theme-system")}}catch(e){}})()`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
