import { useState } from "react";

type Props = {};

function Exercise4({}: Props) {
  const [cart, setCart] = useState({
    discount: 1,
    items: [
      { id: 1, title: "Product 1", qty: 1 },
      { id: 2, title: "Product 2", qty: 1 },
      { id: 3, title: "Product 3", qty: 1 },
    ],
  });

  const handleIncrement = (itemId: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.map((item) =>
        item.id === itemId ? { ...item, qty: item.qty + 1 } : item
      ),
    }));
  };

  const handleDecrement = (itemId: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.map((item) =>
        item.id === itemId ? { ...item, qty: item.qty - 1 } : item
      ),
    }));
  };

  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="text-4xl">Items : {cart.items.length}</div>
      <div className="text-xl">Discount : {cart.discount} %</div>
      <div className="flex flex-col gap-4">
        {cart.items.map((item, i) => (
          <li className="flex items-center gap-2" key={i}>
            {item.title} : Quantity : {item.qty}{" "}
            <button
              className="bg-sky-500 rounded-full px-2 py-2 w-20"
              onClick={() => handleIncrement(item.id)}
            >
              +
            </button>
            <button
              className="bg-red-500 rounded-full px-2 py-2 w-20"
              onClick={() => handleDecrement(item.id)}
            >
              -
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Exercise4;
