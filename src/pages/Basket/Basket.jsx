import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import { useCart } from "../../context/CartContext";

export const Basket = () => {
  const { cart, emptyCart } = useCart();

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0);

  const totalAmount = cart.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  return (
    <div style={{ border: "5px solid hotpink", margin: "1em", padding: "1em" }}>
      <h3>Cart</h3>

      <p>Items in cart: {cart.length}</p>
      <p>Total amount: {totalAmount}</p>
      <p>Total price: €{totalPrice.toFixed(2)}</p>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}: {item.amount}x €{item.price.toFixed(2)} = €
            {(item.price * item.amount).toFixed(2)}
          </li>
        ))}
      </ul>

      <Table aria-label="Example empty table">
        <TableHeader>
          <TableColumn>Product Name</TableColumn>
          <TableColumn>Quantity</TableColumn>
          <TableColumn>Price</TableColumn>
          <TableColumn>Total Item Price</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"Your cart is empty"}>
          {cart.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>€{item.price.toFixed(2)}</TableCell>
              <TableCell>€{(item.amount * item.price).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <button onClick={emptyCart}>Vyprázdnit košík</button>
    </div>
  );
};
