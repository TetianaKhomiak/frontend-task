import { NavLink } from "react-router-dom";
import underlineIcon from "../../../assets/icons/ui/hover-underline.png";
import type { NavigationLink } from "../../../types";

const Navbar = () => {
  const links: NavigationLink[] = [
    { name: "DOMENE", to: "/domains" },
    { name: "GOSTOVANJE", to: "/hosting" },
    { name: "WORDPRESS", to: "/wordpress" },
    { name: "SPLETNE TRGOVINE", to: "/onlinestores" },
    { name: "VPS GOSTOVANJE", to: "/vpshosting" },
    { name: "ZNANJE IN NOVOSTI", to: "/*" },
  ];

  return (
    <div className="w-full max-w-[906px] flex justify-between font-(family-name:--font-montserrat) font-extrabold text-sm">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className="relative flex flex-col items-center pb-1">
          {({ isActive }) => (
            <>
              <span>{link.name}</span>
              {isActive && (
                <img
                  src={underlineIcon}
                  alt="underline"
                  className="w-full h-1 mt-1 object-contain"
                />
              )}
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
