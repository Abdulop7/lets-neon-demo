import { Outfit, Work_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Signage | Custom Signs at the Best Pricing",
  description: "Get high-quality custom signs at the best pricing with fast delivery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${workSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-brand-primary text-brand-text selection:bg-brand-secondary/30">
        {children}
      </body>
    </html>
  );
}
