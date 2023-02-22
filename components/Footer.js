import { PrismicLink, PrismicText } from "@prismicio/react";

export const Footer = ({ footer }) => {
  return (
    <footer className="absolute bottom-0 flex h-28 w-full items-center justify-center bg-gray-50">
      <span>{footer.data.text}</span>
      <a href={`mailto:${footer.data.email}`} className="ml-1 text-blue-700">
        {footer.data.email}
      </a>
    </footer>
  );
};
