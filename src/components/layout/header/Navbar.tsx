import { NavLink } from "react-router-dom";
import { useState } from "react";
import underlineIcon from "../../../assets/icons/ui/hover-underline.png";
import type { NavigationLink } from "../../../types";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      {links.map((link, index) => (
        <NavLink className="relative pb-1" key={link.to} to={link.to}>
          {({ isActive }) => {
            let underlineOpacity = 0;
            if (isActive) {
              underlineOpacity =
                hoveredIndex !== null && hoveredIndex !== index ? 50 : 100;
            } else if (hoveredIndex === index) {
              underlineOpacity = 100;
            }

            return (
              <div
                className="relative flex flex-col items-center pb-1"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}>
                <span className="relative z-10">{link.name}</span>

                <img
                  src={underlineIcon}
                  alt="underline"
                  className={`absolute top-11 w-full h-1 object-contain transition-opacity duration-500 opacity-${underlineOpacity}`}
                />
              </div>
            );
          }}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
