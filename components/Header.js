import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";
import { linkResolver } from "prismicio";

const FlagIcon = ({ lang }) => {
  const code = lang.substring(3).toLowerCase();

  return <span className={`fi fi-${code}`} />;
};

export const Header = ({ alternateLanguages = [], navigation, settings }) => {
  return (
    <header className="sticky top-0 z-30 bg-green-light py-3 shadow-lg md:py-4">
      <div className="frame px-4">
        <div className="navbar">
          <div className="flex-1">
            <PrismicLink href="/">
              {prismicH.isFilled.image(settings.data.logo) && (
                <div className="flex w-32 items-center">
                  <PrismicNextImage field={settings.data.logo} />
                </div>
              )}
            </PrismicLink>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              {navigation.data.slices.map((slice) => {
                console.log(slice.primary.name);
                return (
                  <li key={slice.id} tabIndex={0}>
                    <a>
                      {slice.primary.name}
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    </a>
                    {slice.items.length > 0 && (
                      <ul className="bg-base-100 p-2">
                        {slice.items.map((item) => {
                          return (
                            <li key={JSON.stringify(item)}>
                              <PrismicLink field={item.child_link}>
                                {item.child_name}
                              </PrismicLink>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
              {alternateLanguages.map((lang) => (
                <li className="flex items-center" key={lang.lang}>
                  <PrismicLink href={linkResolver(lang)} locale={lang.lang}>
                    <span className="sr-only">{lang.lang}</span>
                    <FlagIcon lang={lang.lang} />
                  </PrismicLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
