import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link as NextUILink,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar className="w-full bg-[#0a1200]/90 z-[9000]">
      <NavbarBrand>
        <p className="text-2xl font-bold text-white font-nunito md:text-3xl text-inherit">MapIT</p>
      </NavbarBrand>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform bg-orange-600"
              color="success"
              name="Jason Hughes"
              size="sm"
              src="DeCaminoCirculo.png"
              alt="User Avatar"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem className="gap-2 h-14">
              <p className="text-orange-700">Bienvenido</p>
            </DropdownItem>
            <DropdownItem>
              <Link to="/" className="flex">
                <img className="w-5 h-5" src="mapas.png" alt="map icon" />
                <p className="flex pl-1 text-black ">Mapa</p>
              </Link>
            </DropdownItem>
           
            
          
            <DropdownItem>
              <Link
                to="https://github.com/christianzamher"
                target="_blank"
                className="flex"
              >
                <img className="w-5 h-5" src="github.png" alt="github icon" />
                <p className="flex pl-1 text-black">GitHub</p>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link
                to="https://www.linkedin.com/in/christianzamorahermida"
                target="_blank"
                className="flex "
              >
                <img
                  className="w-5 h-5"
                  src="linkedin.png"
                  alt="linkedin icon"
                />
                <p className="pl-1 text-black "> Linkedin</p>
              </Link>
            </DropdownItem>

            <DropdownItem>
              <Link
                to="https://czam.vercel.app/"
                target="_blank"
                className="flex "
              >
                <img
                  className="w-5 h-5"
                  src="web-browser.png"
                  alt="portfolio icon"
                />
                <p className="pl-1 text-black">Portfolio</p>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};
