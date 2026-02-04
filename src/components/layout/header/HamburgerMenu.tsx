import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CartIcon from "../../../assets/icons/ui/cart.svg";
import NetworkStatusIcon from "../../../assets/icons/ui/network-status.svg";
import UserIcon from "../../../assets/icons/ui/user.svg";
import Logo from "../../../assets/images/logo.png";
import type { NavigationLink } from "../../../types";

export default function FullScreenHamburgerMenu() {
  const [open, setOpen] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setOpen(false), 300);
  };

  const links: NavigationLink[] = [
    { name: "DOMENE", to: "/domains" },
    { name: "GOSTOVANJE", to: "/hosting" },
    { name: "WORDPRESS", to: "/wordpress" },
    { name: "SPLETNE TRGOVINE", to: "/onlinestores" },
    { name: "VPS GOSTOVANJE", to: "/vpshosting" },
    { name: "ZNANJE IN NOVOSTI", to: "/" },
  ];

  return (
    <>
      <Box
        className="flex justify-between dark:bg-[#6B7A90] dark:text-gray-300 px-5 py-0.5 items-center lg:hidden"
        component="header">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={Logo} alt="Logo" style={{ width: 50, height: 50 }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            my: 3.5,
            gap: 1,
          }}>
          <Typography
            className="dark:text-gray-300"
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              fontFamily: "Anonymous Pro, sans-serif",
            }}>
            Košarica
          </Typography>
          <IconButton>
            <img
              src={CartIcon}
              alt="Košarica"
              className="brightness-0 dark:invert"
            />
          </IconButton>
          <IconButton onClick={handleOpen}>
            <MenuIcon className="dark:text-gray-300" />
          </IconButton>
        </Box>
      </Box>

      {open && (
        <Box
          component="aside"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className=" bg-white dark:bg-[#6B7A90] text-[#002b01] dark:text-gray-300"
          sx={{
            position: "fixed",
            inset: 0,
            zIndex: 1300,
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            opacity: isAnimating ? 1 : 0,
            transform: isAnimating ? "translateX(0)" : "translateX(100%)",
            transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 3,
              py: 2,
              mt: 2,
            }}>
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={handleClose}>
              <Typography
                className="text-[#002b01] dark:text-gray-300"
                sx={{
                  fontWeight: 700,
                  fontSize: "14px",
                  fontFamily: "Anonymous Pro, sans-serif",
                }}>
                EN
              </Typography>
            </NavLink>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <NavLink
                to="/"
                style={{ display: "flex", alignItems: "center" }}
                onClick={handleClose}>
                <IconButton>
                  <PersonOutlineIcon className="text-[#002b01] dark:text-gray-300" />
                </IconButton>
              </NavLink>
              <NavLink
                to="/"
                style={{ display: "flex", alignItems: "center" }}
                onClick={handleClose}>
                <IconButton>
                  <img
                    src={CartIcon}
                    alt="Košarica"
                    className="brightness-0 dark:invert"
                  />
                </IconButton>
              </NavLink>
              <IconButton onClick={handleClose}>
                <CloseIcon className="text-[#002b01] dark:text-gray-300" />
              </IconButton>
            </Box>
          </Box>

          <Box component="nav" aria-label="Main navigation">
            <List>
              {links.map((link, index) => (
                <React.Fragment key={link.to}>
                  <ListItem disablePadding>
                    <ListItemButton
                      component={NavLink}
                      to={link.to}
                      onClick={handleClose}
                      sx={{ pl: 4 }}>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              textTransform: "uppercase",
                              fontFamily: "Montserrat, sans-serif",
                              fontWeight: 800,
                              fontSize: "20px",
                            }}>
                            {link.name}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                  {index < 5 && <Divider sx={{ mx: "auto", width: "90%" }} />}
                </React.Fragment>
              ))}
            </List>
          </Box>

          <Divider
            sx={{ borderBottomWidth: 3, my: 2, mx: "auto", width: "90%" }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              px: 3,
              py: 2,
              mb: 10,
            }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: 3,
                width: "140px",
              }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}>
                <img
                  src={NetworkStatusIcon}
                  alt="Stanje omrežja"
                  style={{ width: 16, height: 16 }}
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    fontFamily: "Anonymous Pro, sans-serif",
                  }}>
                  Stanje omrežja
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 700,
                    mb: 0.5,
                    fontFamily: "Anonymous Pro, sans-serif",
                  }}>
                  Non-stop 24/7
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    fontFamily: "Anonymous Pro, sans-serif",
                  }}>
                  podpora@zabec.net
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: 3,
                width: "140px",
                fontSize: "12px",
              }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1,
                }}>
                <img
                  src={UserIcon}
                  alt="Moj Žabec"
                  className="brightness-0 dark:invert"
                  style={{ width: 16, height: 16 }}
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    fontFamily: "Anonymous Pro, sans-serif",
                  }}>
                  Moj Žabec
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: 700,
                    mb: 0.5,
                    fontFamily: "Anonymous Pro, sans-serif",
                  }}>
                  Delovniki 8:00-20:00
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    fontFamily: "Anonymous Pro, sans-serif",
                  }}>
                  040 333 666
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
