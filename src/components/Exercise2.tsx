import { useState } from "react";

type Props = {};

function Exercise2({}: Props) {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = (topping: string) => {
    const newPizza = { ...pizza, toppings: [...pizza.toppings, topping] };
    setPizza(newPizza);
  };

  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="text-4xl">Food : {pizza.name}</div>
      <div>
        {pizza.toppings.map((topping, i) => (
          <li key={i}>{topping}</li>
        ))}
      </div>
      <button
        className="bg-sky-500 rounded-full px-4 py-2 w-40"
        onClick={() => handleClick("Cheese")}
      >
        Add a Topping
      </button>
    </div>
  );
}

export default Exercise2;
