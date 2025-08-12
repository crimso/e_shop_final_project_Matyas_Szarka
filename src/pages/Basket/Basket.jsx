import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Image,
} from "@heroui/react";

import { useCart } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Basket = () => {
  const { cart, emptyCart, increaseQuantity, decreaseQuantity } = useCart();

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-2xl rounded-lg p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-4">
          Shopping Cart
        </h2>

        {cart.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-xl">Your cart is empty.</p>
          </div>
        ) : (
          <>
            <div className="hidden md:block overflow-x-auto">
              <Table
                aria-label="Shopping Cart"
                className="min-w-full divide-y divide-gray-200 table-auto"
              >
                <TableHeader>
                  <TableColumn className="px-6 py-3">Image</TableColumn>
                  <TableColumn className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                    Product
                  </TableColumn>
                  <TableColumn className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                    Qty
                  </TableColumn>
                  <TableColumn className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                    Price
                  </TableColumn>
                  <TableColumn className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                    Total
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  {cart.map((item) => (
                    <TableRow key={item.id} className="hover:bg-gray-50 ">
                      <TableCell className="p-2">
                        <Image
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-contain rounded-md"
                        />
                      </TableCell>
                      <TableCell className="px-6 py-4 text-wrap text-sm font-medium text-gray-900">
                        {item.name}
                      </TableCell>
                      <TableCell className="px-6 py-4 text-wrap text-sm text-gray-500">
                        <div className="flex items-center gap-3">
                          <Button
                            isIconOnly
                            size="sm"
                            variant="flat"
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            <FontAwesomeIcon icon="fa-solid fa-minus" />
                          </Button>
                          <span>{item.amount}</span>
                          <Button
                            isIconOnly
                            size="sm"
                            variant="flat"
                            onClick={() => increaseQuantity(item.id)}
                          >
                            <FontAwesomeIcon icon="fa-solid fa-plus" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="px-6 py-4 text-wrap text-sm text-gray-500">
                        €{item.price.toFixed(2)}
                      </TableCell>
                      <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        €{(item.amount * item.price).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="md:hidden">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-gray-200 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
                >
                  <div className="flex items-center mb-4 sm:mb-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-contain rounded-md mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        €{item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end w-full sm:w-auto">
                    <div className="flex items-center gap-3 mb-2">
                      <Button
                        isIconOnly
                        size="sm"
                        variant="flat"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        <FontAwesomeIcon icon="fa-solid fa-minus" />
                      </Button>
                      <span>{item.amount}</span>
                      <Button
                        isIconOnly
                        size="sm"
                        variant="flat"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                      </Button>
                    </div>
                    <p className="text-lg font-semibold text-gray-900">
                      €{(item.amount * item.price).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between">
              <Button
                onClick={emptyCart}
                color="danger"
                variant="shadow"
                className="mb-4 sm:mb-0"
              >
                <FontAwesomeIcon icon="fa-solid fa-trash" className="mr-2" />
                Clear Cart
              </Button>
              <div className="text-gray-600 flex flex-col sm:flex-row items-center gap-2">
                <Button
                  as={RouterLink}
                  to="/checkout"
                  className="text-white mb-2 sm:mb-0"
                  color="success"
                  variant="shadow"
                >
                  <FontAwesomeIcon
                    icon="fa-solid fa-paper-plane"
                    className="mr-2"
                  />
                  Order
                </Button>
                <p className="font-semibold text-lg">
                  Total: €{totalPrice.toFixed(2)}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};