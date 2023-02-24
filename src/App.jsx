import "./App.css";
import { IS_DEVELOPMENT } from "./config";

import { products as initialProducts } from "./mocks/products.json";

import Products from "./components/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

import useFilters from "./hooks/useFilters";

import { CartProvider } from "./context/cart";

import { useState } from "react";

function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  );
}

export default App;
