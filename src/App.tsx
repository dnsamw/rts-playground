import { useState } from "react";
import "./App.css";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, isFixed: false, msg: "Bug 1" },
    { id: 2, isFixed: false, msg: "Bug 2" },
    { id: 3, isFixed: false, msg: "Bug 3" },
  ]);

  const fix = (bugId: any) => {
    const newBugs = bugs.map((bug) =>
      bug.id === bugId ? { ...bug, isFixed: true } : bug
    );
    setBugs(newBugs); 
  };

  return (
    <>
      <div>
        <h1>Bugs List</h1>
      </div>
      <div>
        {bugs.map((bug) => (
          <div key={bug.id}>
            <span>
              {bug.msg} - {bug.isFixed ? "Fixed" : "New"}
            </span>
            <button onClick={() => fix(bug.id)}>Fix</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
