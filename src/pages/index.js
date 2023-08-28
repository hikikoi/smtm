import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./auth/subrouters/Login";
import Product from "./Product";
import ProductList from "./ProductList";
import Register from "./auth/subrouters/Register";
import Auth from "./auth/Auth";
import Policy from "./Policy";
import NotFound from "./NotFound";
import ScrollToTop from "../components/ScrollToTop";

const AllPages = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllPages;
