import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";
import { linkResolver } from "prismicio";

const FlagIcon = ({ lang }) => {
  const code = lang.substring(3).toLowerCase();
  return <span className={`fi fi-${code}`} />;
};

export const Header = ({ alternateLanguages = [], navigation, settings }) => {
  return (
    <header className="sticky top-0 z-30 bg-green-light shadow-lg">
      <div className="frame flex h-[6.5rem] justify-center pl-3 pr-1">
        <div className="navbar">
          <div className="flex-1">
            <PrismicLink href="/">
              <div className="flex w-32 items-center">
                <PrismicNextImage field={settings.data.logo} />
              </div>
            </PrismicLink>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              {navigation.data.slices.map((slice) => {
                return (
                  <li
                    className="hidden font-medium text-green-dark lg:flex"
                    key={slice.id}
                    tabIndex={0}
                  >
                    {slice.items.length > 0 ? (
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
                    ) : (
                      <PrismicLink field={slice.primary.link}>
                        {slice.primary.name}
                      </PrismicLink>
                    )}
                    {slice.items.length > 0 && (
                      <ul className="border-[1px] border-neutral-200 bg-white p-2">
                        {slice.items.map((item) => {
                          return (
                            <li
                              className="text-sm font-medium text-green-dark"
                              key={item.child_link.id}
                            >
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
            <div className="flex-none lg:hidden">
              <label htmlFor="menu-drawer" className="btn-ghost btn-square btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
