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
    <section>
      <div className="frame py max-w-3xl">
        <h1>{slice.primary.title}</h1>
        {slice.items.map((item, i) => (
          <div key={i}>
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
        ))}
      </div>
    </section>
  );
};

export default News;
