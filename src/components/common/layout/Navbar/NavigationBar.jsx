import React from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";

// export const Navbar = () => {
//   return <div>Navbar</div>;
// };

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ];

  return (
    <Navbar
      className="border-b-2 border-b-gray-400"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* <NavbarItem isActive={location.pathname === "/"}>
          <Link
            as={RouterLink}
            className="text-indigo-500 hover:text-indigo-600 focus:text-indigo-700"
            to="/"
            aria-current={location.pathname === "/" ? "page" : undefined}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/products"}>
          <Link
            as={RouterLink}
            className="text-indigo-500 hover:text-indigo-600 focus:text-indigo-700"
            color="foreground"
            to="/products"
            aria-current={
              location.pathname === "/products" ? "page" : undefined
            }
          >
            Products
          </Link>
        </NavbarItem> */}
        {navLinks.map((link) => (
          <NavbarItem
            key={link.path}
            isActive={location.pathname === link.path}
          >
            <Link
              as={RouterLink}
              className="text-indigo-500 hover:text-indigo-600 focus:text-indigo-700"
              to={link.path}
              aria-current={
                location.pathname === link.path ? "page" : undefined
              }
            >
              {link.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link
            as={RouterLink}
            className="text-indigo-500 hover:text-indigo-600 focus:text-indigo-700"
            to="/auth/login"
          >
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={RouterLink}
            className="bg-indigo-600 text-white text-base font-medium"
            to="/auth/register"
            variant="flat"
          >
            Register
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {navLinks.map((link, index) => (
          <NavbarMenuItem key={`${link.name}-${index}`}>
            <Link as={RouterLink} className="w-full" to={link.path} size="lg">
              {link.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link as={RouterLink} className="w-full" to="/auth/login" size="lg">
            Login
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            as={RouterLink}
            className="w-full"
            to="/auth/register"
            size="lg"
          >
            Register
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
