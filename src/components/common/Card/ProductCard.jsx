import React from "react";
import { useProducts } from "../../../context/ProductContext";
import { useCart } from "../../../context/CartContext";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProductCard = () => {
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleBuy = (product) => {
    const { id, title, price, image } = product;

    addToCart({
      id,
      name: title,
      price,
      image,
    });
    console.log(product);
  };

  return (
    <div className="p-8 gap-8 grid col-span sm:grid-cols-2 md:grid-cols-5">
      {products.map((item) => {
        const { id, title, price, image } = item;
        return (
          <Card
            key={id}
            shadow="sm"
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible flex justify-center items-center">
              <Image
                alt={title}
                className="max-w-3xs object-contain aspect-square"
                radius="lg"
                shadow="sm"
                src={image}
              />
            </CardBody>
            <CardFooter className="text-small flex flex-col justify-between">
              <p>{title}</p>
              <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full p-2 gap-2">
                <p className="text-red-600 font-medium text-xl">€ {price}</p>
                <button
                  onClick={() => handleBuy(item)}
                  className="w-full sm:w-auto lg:text-balance text-white bg-gradient-to-r cursor-pointer from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  <FontAwesomeIcon
                    icon="fa-solid fa-cart-shopping"
                    className="sm:mr-2"
                  />
                  <span className="hidden lg:inline">Add To Cart</span>
                </button>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};
