import { PrismicRichText } from "@prismicio/react";
import { useRouter } from "next/router";
import React from "react";

/**
 * @typedef {import("@prismicio/client").Content.NewsSlice} NewsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewsSlice>} NewsProps
 * @param { NewsProps }
 */
const News = ({ slice }) => {
  const router = useRouter();
  const currentLang = router.locale;
  return (
    <div className="pt-9 md:pt-11">
      <h1 className="mx-auto -mb-5">{slice.primary.title}</h1>
      {slice.items.map((item, i) => (
        <section
          key={i}
          className="py-12 last:pb-24 odd:bg-neutral-100 even:bg-white last:lg:pb-28"
        >
          <div className="frame max-w-3xl">
            <div className="font-semibold text-neutral-500">
              {new Date(item.date).toLocaleDateString(currentLang, {
                year: "numeric",
                month: "short",
                day: "numeric",
                timeZone: "UTC",
              })}
            </div>
            <h2 className="mb-3 text-left">{item.news_title}</h2>
            <div>
              <PrismicRichText field={item.rich_text} />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default News;
