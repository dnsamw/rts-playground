import "./App.css";
import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div className="flex flex-col">
      <ExpandableText maxChars={50}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        accusantium officiis error enim possimus eum deleniti saepe natus in
        maiores, quaerat aspernatur eligendi libero inventore cum sequi fuga
        provident aut nihil. Praesentium, sunt.
      </ExpandableText>
    </div>
  );
}

export default App;
