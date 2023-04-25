import { PrismicLink } from "@prismicio/react";
import Bars from "components/SVG/Bars";
import ChevronDown from "components/SVG/ChevronDown";
import EnFlag from "components/SVG/EnFlag";
import EsFlag from "components/SVG/EsFlag";
import RiuciLogo from "components/SVG/RiuciLogo";
import RiuciLogoEs from "components/SVG/RiuciLogoEs";
import { linkResolver } from "prismicio";

export const Header = ({ alternateLanguages = [], navigation }) => (
  <header className="sticky top-0 z-30 bg-green-light shadow-lg">
    <div className="frame flex h-[6.5rem] justify-center pl-3 pr-1">
      <div className="navbar">
        <div className="flex-1">
          <PrismicLink
            href="/"
            aria-label={`RIUCI ${alternateLanguages[0].lang === "es-es" ? "bamboo" : "bambú"}`}
          >
            <div className="flex w-32 items-center">
              {alternateLanguages[0].lang === "es-es" ? <RiuciLogo /> : <RiuciLogoEs />}
            </div>
          </PrismicLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {navigation.data.slices.map((slice) => (
              <li
                className="hidden font-medium text-green-dark lg:flex"
                key={slice.id}
                tabIndex={0}
              >
                {slice.items.length > 0 ? (
                  <label tabIndex={0}>
                    {slice.primary.name}
                    <ChevronDown />
                  </label>
                ) : (
                  <PrismicLink field={slice.primary.link}>{slice.primary.name}</PrismicLink>
                )}
                {slice.items.length > 0 && (
                  <ul className="border-[1px] border-neutral-200 bg-white p-2">
                    {slice.items.map((item) => {
                      return (
                        <li
                          className="text-sm font-medium text-green-dark"
                          key={item.child_link.id}
                        >
                          <PrismicLink field={item.child_link}>{item.child_name}</PrismicLink>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            ))}
            {alternateLanguages.map((lang) => (
              <li className="flex items-center" key={lang.lang}>
                <PrismicLink href={linkResolver(lang)} locale={lang.lang}>
                  <span className="sr-only">{lang.lang}</span>
                  {lang.lang === "es-es" ? <EsFlag /> : <EnFlag />}
                </PrismicLink>
              </li>
            ))}
          </ul>
          <div className="flex-none lg:hidden">
            <label htmlFor="menu-drawer" className="btn-ghost btn-square btn">
              <Bars />
            </label>
          </div>
        </div>
      </div>
    </div>
  </header>
);
