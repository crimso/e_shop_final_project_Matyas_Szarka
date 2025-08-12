import React from "react";
import { useLocation, Link as RouterLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../../../../context/CartContext";
import { useAuth } from "../../../../context/AuthContext";
import { supabase } from "../../../../supabaseClient";

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
  Badge,
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
  const { cart } = useCart();
  const { session } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ];

  const totalAmount = cart.reduce((total, item) => {
    return total + item.amount;
  }, 0);

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
          <p className="font-bold text-indigo-700 ">FunSHOP</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navLinks.map((link) => (
          <NavbarItem
            key={link.path}
            isActive={location.pathname === link.path}
          >
            <Link
              as={RouterLink}
              className="text-indigo-500 font-semibold hover:text-indigo-600 focus:text-indigo-700"
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
        <NavbarItem>
          <Button as={RouterLink} className="bg-transparent" to="/basket">
            <Badge
              color="danger"
              content={totalAmount}
              isInvisible={totalAmount === 0}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-cart-shopping"
                size="2x"
                className="text-indigo-600"
              />
            </Badge>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {navLinks.map((link, index) => (
          <NavbarMenuItem key={`${link.name}-${index}`}>
            <Link
              as={RouterLink}
              className="w-full text-indigo-500 font-medium"
              to={link.path}
              size="lg"
            >
              {link.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link
            as={RouterLink}
            className="w-full text-indigo-500 font-medium hover:text-indigo-600 focus:text-indigo-700"
            to="/basket"
            size="lg"
          >
            Basket{" "}
            {totalAmount > 0 && (
              <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-white bg-red-600 rounded-full">
                {totalAmount}
              </span>
            )}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            as={RouterLink}
            className="w-full text-indigo-500 font-medium hover:text-indigo-600 focus:text-indigo-700"
            to="/auth/login"
            size="lg"
          >
            Login
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            as={RouterLink}
            className="w-full text-indigo-500 font-medium hover:text-indigo-600 focus:text-indigo-700"
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
