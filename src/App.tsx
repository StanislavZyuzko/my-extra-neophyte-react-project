import { useState, useEffect } from "react";
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
  id: any;
  isHidden: any;
  isMined: any;
  gameSquers: any;
  setGameSquers: any;
  count: any;
  setCount: any;
  lock: any;
  setLock: any;
}

function Square(props: SquareProps) {
  const {
    id,
    isHidden,
    isMined,
    gameSquers,
    setGameSquers,
    count,
    setCount,
    lock,
    setLock,
  } = props;

  const testCount = gameSquers.filter((elem: any) => elem.hidden);

  // console.log(count);

  const hiddenHandleClick = (e: any) => {
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
    setCount(testCount.length);
  };

  return (
    <div
      className={isHidden ? "square-hidden" : "square"}
      onClick={hiddenHandleClick}
    >
      {isMined && lock && <span> 💣 </span>}
    </div>
  );
}

function App() {
  const [gameSquers, setGameSquers] = useState<any>(initialArr);
  const [count, setCount] = useState<any>(3);
  const [lock, setLock] = useState<any>(false);

  const randomInteger = (min: any, max: any) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  const getRandomInitial = () => {
   
   
  };
  // useEffect(() => {
  //   getRandomInitial();
  // }, []);

  const resetHandleClick = (e: any) => {   
    // getRandomInitial();
    let randomId = randomInteger(1, 10);
    console.log(randomId);
    const randomArr = initialArr.map((elem) => {
      if (elem.mined) {
        return { ...elem, mined: !elem.mined};
      }
      if (elem.id === randomId) {
        return { ...elem, mined: true };
      }
      return elem;
    });
    setGameSquers(randomArr);
    setCount(3);
    setLock(false);
  };

  const squers = gameSquers.map((elem: any) => (
    <Square
      id={elem.id}
      key={elem.id}
      isHidden={elem.hidden}
      isMined={elem.mined}
      gameSquers={gameSquers}
      setGameSquers={setGameSquers}
      count={count}
      setCount={setCount}
      lock={lock}
      setLock={setLock}
    />
  ));

  return (
    <div className="App">
      <div className="board">
        <div className="squers">{squers}</div>
        <div className="gameInfo">
          {!lock && count < 3 && (
            <div style={{ color: "green" }}>you won! 🤗 </div>
          )}
          {lock && <div style={{ color: "red" }}>you lost!</div>}
          <button onClick={resetHandleClick}>reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
