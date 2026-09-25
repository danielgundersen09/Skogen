import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: "sylva | Find your way back to the wild",
  description: "Quiet places, thoughtful stays, and a little more room to breathe.",
};

export default function RootLayout({ children }) {
  return <html lang="en" className={instrumentSans.variable}><body>{children}</body></html>;
}
