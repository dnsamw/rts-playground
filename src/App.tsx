import "./App.css";
import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";
import Exercise3 from "./components/Exercise3";
import Exercise4 from "./components/Exercise4";
import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div className="flex flex-col">
      <Exercise1 />
      <Exercise2 />
      <Exercise3 />
      <Exercise4 />
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
