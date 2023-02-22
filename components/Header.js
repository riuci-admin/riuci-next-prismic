import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Montserrat } from "@next/font/google";

import { linkResolver } from "../prismicio";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const FlagIcon = ({ lang }) => {
  const code = lang.substring(3).toLowerCase();

  return <span className={`fi fi-${code}`} />;
};

export const Header = ({ alternateLanguages = [], navigation, settings }) => {
  return (
    <header
      className={`${montserrat.variable} h-24 bg-green-50 py-5 font-montserrat`}
    >
      <div className="frame flex">
        <PrismicLink href="/">
          {prismicH.isFilled.image(settings.data.logo) && (
            <div className="flex items-center">
              <PrismicNextImage field={settings.data.logo} />
              <div className="ml-1 flex flex-col">
                <div className="text-5xl font-bold tracking-tight text-green-dark">
                  {settings.data.logo_title}
                </div>
                <div className="text-center text-2xl font-semibold italic tracking-tight text-green-soft">
                  {settings.data.logo_subtitle}
                </div>
              </div>
            </div>
          )}
        </PrismicLink>
        <nav className="flex flex-grow items-center justify-end">
          <ul className="flex gap-6">
            {navigation.data?.links.map((item) => (
              <li
                key={prismicH.asText(item.label)}
                className="font-semibold tracking-tight text-green-dark hover:text-green-medium"
              >
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ))}
            {alternateLanguages.map((lang) => (
              <li key={lang.lang}>
                <PrismicLink href={linkResolver(lang)} locale={lang.lang}>
                  <span className="sr-only">{lang.lang}</span>
                  <FlagIcon lang={lang.lang} />
                </PrismicLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
