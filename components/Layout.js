import { PrismicLink } from "@prismicio/react";
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
      {/* MENU */}
      <div className="drawer-side">
        <label htmlFor="menu-drawer" className="drawer-overlay"></label>
        <ul className="menu menu-compact w-56 bg-white p-2">
          {navigation.data.slices.map((slice) => (
            <div key={slice.id} className="border-b-[1px] py-4">
              <li className="menu-title" key={slice.id} tabIndex={0}>
                {slice.items.length > 0 ? (
                  <span>{slice.primary.name}</span>
                ) : (
                  <PrismicLink field={slice.primary.link}>
                    {slice.primary.name}
                  </PrismicLink>
                )}
              </li>
              {slice.items.length > 0 &&
                slice.items.map((item) => {
                  return (
                    <li
                      className="last:-b-5 text-sm font-medium text-green-dark"
                      key={item.child_link.id}
                    >
                      <PrismicLink field={item.child_link}>
                        {item.child_name}
                      </PrismicLink>
                    </li>
                  );
                })}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
