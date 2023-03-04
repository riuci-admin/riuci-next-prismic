import { PrismicLink } from "@prismicio/react";

export const DrawerSide = ({ navigation }) => (
  <div className="drawer-side">
    <label htmlFor="menu-drawer" className="drawer-overlay"></label>
    <ul className="menu menu-compact w-64 bg-white p-2">
      {navigation.data.slices.map((slice) => (
        <div key={slice.id} className="border-b-[1px] py-4">
          {slice.items.length > 0 ? (
            <li className="menu-title" key={slice.id} tabIndex={0}>
              <span>{slice.primary.name}</span>
            </li>
          ) : (
            <li className="font-medium text-green-dark">
              <PrismicLink field={slice.primary.link}>
                {slice.primary.name}
              </PrismicLink>
            </li>
          )}
          {slice.items.length > 0 &&
            slice.items.map((item) => {
              return (
                <li
                  className="font-medium text-green-dark"
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
);
