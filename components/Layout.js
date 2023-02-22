import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({
  alternateLanguages,
  navigation,
  settings,
  footer,
  children,
}) => (
  <div className="relative min-h-screen">
    <Header
      alternateLanguages={alternateLanguages}
      navigation={navigation}
      settings={settings}
    />
    <main className="pb-28">{children}</main>
    <Footer footer={footer} />
  </div>
);
