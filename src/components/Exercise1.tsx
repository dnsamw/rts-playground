import { useState } from "react";

type Props = {};

function Exercise1({}: Props) {
  const [game, setgame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = (name: string) => {
    const newGame = { ...game, player: { ...game.player, name: name } };
    setgame(newGame);
  };

  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="text-4xl">Name : {game.player.name}</div>
      <div>Player</div>
      <button
        className="bg-sky-500 rounded-full px-4 py-2 w-40"
        onClick={() => handleClick("Sangakkara")}
      >
        Change Name
      </button>
    </div>
  );
}

export default Exercise1;
