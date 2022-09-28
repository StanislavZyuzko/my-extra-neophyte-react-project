import { useState, useEffect } from "react";

import Square from "./components/Square";
import "./App.css";

interface ISquare {
  id: number;
  hidden: boolean;
  mined: boolean;
}

const initialArr = [
  { id: 1, hidden: true, mined: false },
  { id: 2, hidden: true, mined: false },
  { id: 3, hidden: true, mined: false },
  { id: 4, hidden: true, mined: false },
  { id: 5, hidden: true, mined: false },
  { id: 6, hidden: true, mined: false },
  { id: 7, hidden: true, mined: false },
  { id: 8, hidden: true, mined: false },
  { id: 9, hidden: true, mined: false },
];

function App() {
  const [gameSquers, setGameSquers] = useState<Array<ISquare>>([]);
  const [lock, setLock] = useState<boolean>(false);

  const testCount = gameSquers.filter((elem: ISquare) => elem.hidden).length;

  const randomInteger = (min: number, max: number) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  const getRandomArr = () => {
    const randomId = randomInteger(1, 9);
    const randomArr = initialArr.map((elem) => {
      if (elem.id === randomId) {
        return { ...elem, mined: true };
      }
      return elem;
    });
    setGameSquers(randomArr);
    setLock(false);
  };

  useEffect(() => {
    getRandomArr();
  }, []);

  const resetHandleClick = () => {
    getRandomArr();
  };

  const squareHandleClick = (id: number) => {
    setGameSquers((prevState: Array<ISquare>) =>
      prevState.map((elem: ISquare) => {
        if (elem.id === id) {
          setLock(elem.mined && testCount > 2);
          return { ...elem, hidden: false };
        }
        return elem;
      })
    );
  };

  const squers = gameSquers.map((elem: ISquare) => (
    <Square
      squareHandleClick={squareHandleClick}
      id={elem.id}
      key={elem.id}
      isHidden={elem.hidden}
      isMined={elem.mined}
      lock={lock}
    />
  ));

  const win = !lock && testCount < 2;
  const lose = lock;
  const resetAсtive = win || lose;

  return (
    <div className="App">
      <div className="board">
        <div className={resetAсtive ? "squers locked" : "squers"}>{squers}</div>
        <div className="gameInfo">
          {win && <div className="winInfo">you won! 🤗 </div>}
          {lose && <div className="loseInfo">you lost!</div>}
          <button
            type="button"
            disabled={!resetAсtive}
            onClick={resetHandleClick}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
