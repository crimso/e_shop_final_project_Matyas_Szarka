import React from "react";
import { useContext } from "react";
import { CardContext } from "../../context/ProductContext";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import { ProductProvider } from "../../context/ProductContext";

const ProductList = () => {
  const { products, loading, error } = useContext(CardContext);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="p-4 gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {products.map((item) => (
        <Card
          key={item.id}
          isPressable
          shadow="sm"
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-2 flex justify-center items-center">
            <Image
              alt={item.title}
              className="w-full object-cover h-[220px]"
              radius="lg"
              shadow="sm"
              src={item.image}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b className="text-left">{item.title}</b>
            <div>
              <p className="text-gray-600 font-medium">EUR {item.price}</p>
              <button>Add To Cart</button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export const ProductPage = () => {
  return (
    <ProductProvider>
      <ProductList />
    </ProductProvider>
  );
};
