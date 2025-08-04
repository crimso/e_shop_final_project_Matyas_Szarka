import { useState } from "react";
import { Button, Input, Image } from "@heroui/react";
import { useCart } from "../../context/CartContext";

export const CheckOut = () => {
  const { cart } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order sent", { name, address, city, postalCode }, totalPrice);
    alert("Order sent");
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/*Order summary*/}
        <div className="bg-white shadow-2xl rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Order</h2>
          <ul className="space-y-4 max-h-96 overflow-y-auto pr-2">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b pb-3"
              >
                <div className="flex items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain rounded-md mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-700">{item.name}</p>
                    <p>Qty: {item.amount}</p>
                  </div>
                </div>
                <p className="font-semibold text-gray-800">
                  €{(item.price * item.amount).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
          <div className="text-right">
            <p className="text-xl font-bold text-gray-800">Total</p>
            <p className="text-xl font-bold text-gray-800">
              €{totalPrice.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="bg-white shadow-2xl rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Shipping Details
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <Button
                className="w-full"
                type="submit"
                color="primary"
                variant="shadow"
              >
                Place Order
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
