import { useState, useRef } from "react";
import classes from "./App.module.css";

const INITIAL_STATE = ["1", "2", "3", "A", "b", "c"];

function App() {
  const [array, setArray] = useState(INITIAL_STATE);
  const [newValue, setNewValue] = useState("");
  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.focus();
    AddToStart(newValue);
  };

  function removeFirstElement() {
    setArray((a) => a.slice(1));
  }

  function removeLetter(letter) {
    setArray((a) => a.filter((element) => element !== letter));
  }

  function AddToStart(letter) {
    setArray((a) => [letter, ...a]);
  }

  function AddToEnd(letter) {
    setArray((a) => [...a, letter]);
  }

  function addAtIndex(index, letter) {
    setArray((a) => [...a.slice(0, index), letter, ...a.slice(index)]);
  }

  function updateAToH() {
    setArray((a) =>
      a.map((element) => {
        if (element === "A") return "H";
        return element;
      })
    );
  }

  return (
    <div className={classes.main}>
      <div className={classes.second}>
        <button onClick={removeFirstElement}>Remove First Element</button>
        <br />
        <br />
        <button onClick={() => removeLetter("A")}>
          Remove All A's Element
        </button>
        <br />
        <br />
        <button onClick={() => AddToStart("A")}>Add A To Start</button>
        <br />
        <br />
        <button onClick={() => AddToEnd("Z")}>Add Z To End</button>
        <br />
        <br />
        <button onClick={() => addAtIndex(2, "C")}>
          Add C In Third Position
        </button>
        <br />
        <br />
        <button onClick={updateAToH}>Change A's To H's</button>
        <br />
        <br />
        <button onClick={() => setArray([])}>Clear</button>
        <br />
        <br />
        <button onClick={() => setArray(INITIAL_STATE)}>Reset</button>
        <br />
        <br />
        <input
          type="text"
          ref={inputRef}
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <button onClick={onClick}>Add Input To Start</button>
        <h2>{array.join(", ")}</h2>
      </div>
    </div>
  );
}

export default App;
