import { Inter } from "@next/font/google";
import { Footer } from "components/Footer";
import { Header } from "components/Header";

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
    <main className="pb-64 md:pb-72">{children}</main>
    <Footer footer={footer} />
  </div>
);
