import { useState, useEffect, createContext, useContext, useMemo } from "react";

// It's a good practice to not export the context itself to prevent misuse.
// Consumers should use the custom hook `useProducts`.
// Initialize with `undefined` to make the check in `useProducts` work correctly.
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

  // useMemo prevents the context value from being a new object on every render,
  // which would cause all consumers to re-render unnecessarily.
  const value = useMemo(
    () => ({ products, loading, error }),
    [products, loading, error]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
