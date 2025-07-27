import React from "react";

import { Route, Routes, useNavigate, useHref } from "react-router-dom";

import { AppLayout } from "./components/common/layout/AppLayout/AppLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { Basket } from "./pages/Basket/Basket";
import { HeroUIProvider } from "@heroui/react";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { AuthLayout } from "./components/common/layout/AuthLayout/AuthLayout";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";

export function App() {
  const navigate = useNavigate();
  return (
    <ProductProvider>
      <CartProvider>
        <HeroUIProvider navigate={navigate} useHref={useHref}>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<HomePage />} />
              <Route path="products" element={<ProductPage />} />
              <Route path="basket" element={<Basket />} />
            </Route>
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </HeroUIProvider>
      </CartProvider>
    </ProductProvider>
  );
}
