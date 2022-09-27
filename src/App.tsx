import { useState } from "react";
import "./App.css";


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

interface SquareProps {
  isHidden: any;
  setGameSquers: any;
  id: any;
  setCount: any;
  count: any;
  setLock: any;
  gameSquers: any;
}

function Square(props: SquareProps) {
  const { isHidden, setGameSquers, id, setCount, gameSquers, count, setLock } =
    props;

  const testCont = gameSquers.filter((elem: any) => elem.hidden);

  console.log(count);

  const hiddenHandleClick = (e: any) => {
    e.stopPropagation();

    setGameSquers((prevState: any) =>
      prevState.map((elem: any) => {
        if (elem.id === id && !elem.mined) {
          return { ...elem, hidden: false };
        }
        if (elem.id === id && elem.mined && count > 2) {
          setLock(true);
          return { ...elem, hidden: false };
        }
        return elem;
      })
    );
    setCount(testCont.length);
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
  const [count, setCount] = useState<any>(3);
  const [lock, setLock] = useState<any>(false);

  const resetHandleClick = (e: any) => {
    setGameSquers(initialArr);
    setCount(3);
    setLock(false);
  };


  const squers = gameSquers.map((elem: any) => (
    <Square
      gameSquers={gameSquers}
      setLock={setLock}
      count={count}
      setCount={setCount}
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
          {!lock && count < 3 && <div>you won!</div>}
          {lock && <div>you lose!</div>}

          <button onClick={resetHandleClick}>reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
