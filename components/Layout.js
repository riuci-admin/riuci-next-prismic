import { DrawerSide } from "components/DrawerSide";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Inter } from "next/font/google";

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
}) => {
  return (
    <div className={`${inter.variable} drawer font-inter`}>
      <label htmlFor="menu-drawer">Menu Drawer</label>
      <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col justify-between">
        <Header
          alternateLanguages={alternateLanguages}
          navigation={navigation}
          settings={settings}
        />
        <main>{children}</main>
        <Footer footer={footer} />
      </div>
      <DrawerSide navigation={navigation} />
    </div>
  );
};
