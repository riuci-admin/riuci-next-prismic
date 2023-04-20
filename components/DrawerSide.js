import { PrismicLink } from "@prismicio/react";

export const DrawerSide = ({ navigation }) => (
  <div className="drawer-side">
    <label htmlFor="menu-drawer" className="drawer-overlay"></label>
    <ul className="menu menu-compact w-64 bg-white p-2 pt-4">
      {navigation.data.slices.map((slice) => (
        <>
          {slice.items.length > 0 ? (
            <li
              className="menu-title mt-3 border-t-[1px] border-solid border-neutral-400 pt-3 first:mt-0 first:border-t-[0px] first:pt-0"
              key={slice.id}
              tabIndex={0}
            >
              <span>{slice.primary.name}</span>
            </li>
          ) : (
            <li className="mt-3 border-y-[1px] border-solid border-[#DADADA] py-3 font-medium text-green-dark">
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
        </>
      ))}
    </ul>
  </div>
);
