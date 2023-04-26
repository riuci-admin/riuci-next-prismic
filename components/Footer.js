import Image from "next/image";

export const Footer = ({ footer }) => (
  <footer>
    <div className="relative flex h-[27rem] w-full items-center justify-center overflow-hidden">
      <Image
        src={`${footer.data.background.url}&bri=100`}
        alt={footer.data.background.alt}
        className="bg-neutral-800 object-cover"
        fill
      />
      <div className="z-0 flex w-[17rem] flex-col items-center justify-center text-center text-sm text-white">
        <div className="pb-1">{footer.data.contact_us}</div>
        <div>
          <a
            href={`mailto:${footer.data.email}`}
            className="font-semibold text-green-soft hover:text-green-light"
          >
            {footer.data.email}
          </a>
        </div>
        <div className="flex justify-center gap-4 pt-2">
          {footer.data.slices[0].items.map((item, i) => (
            <div key={i}>
              <a
                href={item.platform_link.url}
                alt={item.platform_alt_text}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-green-soft"
              >
                <Image
                  className="h-6"
                  src={`/svg/${item.icon}.svg`}
                  alt={item.icon}
                  width={24}
                  height={24}
                />
              </a>
            </div>
          ))}
        </div>
        <div className="my-6 flex flex-col items-center justify-center gap-3">
          <p>{footer.data.sponsored_by}</p>
          <a
            href={footer.data.aecid_link.url}
            alt={footer.data.aecid_link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={footer.data.aecid.url.split("?")[0]}
              alt={footer.data.aecid.alt}
              width={200}
              height={44}
              sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 15vw"
            />
          </a>
          <a
            href={footer.data.inbar_link.url}
            alt={footer.data.inbar_link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={footer.data.inbar.url}
              alt={footer.data.inbar.alt}
              width={100}
              height={66}
            />
          </a>
        </div>
        <div className="text-xs text-neutral-500">
          <div>{footer.data.riuci_description}</div>
          <div>
            RIUCI {footer.data.bamboo} © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </div>
  </footer>
);
