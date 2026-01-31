import { NavLink, useLocation } from "react-router-dom";
import underlineIcon from "../../../assets/icons/ui/hover-underline.png";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: "DOMENE", to: "/domains" },
    { name: "GOSTOVANJE", to: "/hosting" },
    { name: "WORDPRESS", to: "/wordpress" },
    { name: "SPLETNE TRGOVINE", to: "/onlinestores" },
    { name: "VPS GOSTOVANJE", to: "/vpshosting" },
    { name: "ZNANJE IN NOVOSTI", to: "/*" },
  ];

  return (
    <div className="w-full max-w-[906px] flex gap-8 font-(family-name:--font-montserrat) font-extrabold text-sm pl-4">
      {links.map((link) => {
        const isActive =
          link.to === "/*"
            ? location.pathname.startsWith("/blog") ||
              location.pathname === "/*"
            : location.pathname === link.to;

        return (
          <NavLink
            key={link.to}
            to={link.to}
            className="relative flex flex-col items-center pb-1">
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
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
