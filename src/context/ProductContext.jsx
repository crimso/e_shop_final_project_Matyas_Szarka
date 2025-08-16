import { useState, useEffect, createContext, useContext, useMemo } from "react";


const ProductContext = createContext(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const value = useMemo(
    () => ({ products, loading, error }),
    [products, loading, error]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
