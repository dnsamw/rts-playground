import { useState } from "react";

type Props = {};

function Exercise3({}: Props) {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [{ id: 1, title: "Product 1", qty: 1 }],
  });

  const handleChange = () => {
    const newCart = {
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, qty: item.qty + 1 } : item
      ),
    };
    setCart(newCart);
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
              className="bg-sky-500 rounded-full px-4 py-2"
              onClick={handleChange}
            >
              Change Quantity
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Exercise3;
