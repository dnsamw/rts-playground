import { useState } from "react";

type Props = {
  children: string;
  maxChars?: number;
};

function ExpandableText({ children, maxChars = 10 }: Props) {
  const [isExpand, setExpand] = useState(false);

  const text = isExpand ? children : children.substring(0, maxChars);

  return (
    <div className="flex flex-col p-4 gap-4">
      <div className="text-4xl">Expandable Text</div>
      {children.length < maxChars ? (
        <div>
          <p>{children}</p>
        </div>
      ) : (
        <div>
          <p className="pb-2">{text}...</p>
          <button
            className="bg-sky-500 px-4 py-2 rounded-full font-semibold"
            onClick={() => {
              setExpand(!isExpand);
            }}
          >
            {!isExpand ? "more.." : "less"}
          </button>
        </div>
      )}
    </div>
  );
}

export default ExpandableText;
