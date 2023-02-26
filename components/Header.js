import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { linkResolver } from "prismicio";

const FlagIcon = ({ lang }) => {
  const code = lang.substring(3).toLowerCase();

  return <span className={`fi fi-${code}`} />;
};

export const Header = ({ alternateLanguages = [], navigation, settings }) => {
  return (
    <header className="sticky top-0 z-30 bg-green-light py-3 shadow-lg md:py-4">
      <div className="frame flex px-4">
        <PrismicLink href="/">
          {prismicH.isFilled.image(settings.data.logo) && (
            <div className="flex w-32 items-center">
              <PrismicNextImage field={settings.data.logo} />
            </div>
          )}
        </PrismicLink>
        <nav className="flex flex-grow items-center justify-end">
          <ul className="flex gap-6">
            {navigation.data?.links.map((item) => (
              <li
                key={prismicH.asText(item.label)}
                className="text-lg font-semibold tracking-tight text-green-dark hover:text-green-soft"
              >
                <PrismicLink field={item.link}>
                  <PrismicText field={item.label} />
                </PrismicLink>
              </li>
            ))}
            {alternateLanguages.map((lang) => (
              <li className="flex items-center" key={lang.lang}>
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
