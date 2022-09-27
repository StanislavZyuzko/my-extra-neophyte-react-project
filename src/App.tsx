import { useState } from "react";
import "./App.css";

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const initialArr = [
  { id: 1, hidden: true, mined: false },
  { id: 2, hidden: true, mined: false },
  { id: 3, hidden: true, mined: false },
  { id: 4, hidden: true, mined: false },
  { id: 5, hidden: true, mined: false },
  { id: 6, hidden: true, mined: false },
  { id: 7, hidden: true, mined: false },
  { id: 8, hidden: true, mined: false },
  { id: 9, hidden: true, mined: true },
];

// console.log(initialArr);

interface SquareProps {
  isHidden: any;
  setGameSquers: any;
  id: any;
}

function Square(props: SquareProps) {
  const { isHidden, setGameSquers, id } = props;

  const hiddenHandleClick = (e: any) => {
    setGameSquers((prevState: any) =>
      prevState.map((elem: any) => {
        if (elem.id === id) {
          return { ...elem, hidden: false };
        }
        return elem;
      })
    );
  };

  return (
    <div
      className={isHidden ? "square-hidden" : "square"}
      onClick={hiddenHandleClick}
    ></div>
  );
}

function App() {
  const [gameSquers, setGameSquers] = useState<any>(initialArr);

  console.log(gameSquers);

  const squers = gameSquers.map((elem: any) => (
    <Square
      id={elem.id}
      setGameSquers={setGameSquers}
      key={elem.id}
      isHidden={elem.hidden}
    />
  ));

  return (
    <div className="App">
      <div className="board">
        <div className="squers">{squers}</div>
        <div className="gameInfo">
          <div>you won!</div>
          <button>reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
