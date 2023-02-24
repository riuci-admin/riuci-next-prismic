import { Header } from "./Header";
import { Footer } from "./Footer";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const Layout = ({
  alternateLanguages,
  navigation,
  settings,
  footer,
  children,
}) => (
  <div className={`${inter.variable} relative min-h-screen font-inter`}>
    <Header
      alternateLanguages={alternateLanguages}
      navigation={navigation}
      settings={settings}
    />
    <main className="pb-48">{children}</main>
    <Footer footer={footer} />
  </div>
);
