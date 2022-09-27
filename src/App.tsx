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

// let user = initialArr.find(item => item.id == 1);
// console.log(user);

// console.log(initialArr);

interface SquareProps {
  isHidden: any;
  setGameSquers: any;
  id: any;
  setCount: any;
  testCont: any;
  count: any;
  lock: any;
  setLock: any;
}

function Square(props: SquareProps) {
  const { isHidden, setGameSquers, id, setCount, testCont, count, lock, setLock } = props;

  const hiddenHandleClick = (e: any) => {
    e.stopPropagation();
    // if (!e.target.hidden) {
    // }

    setGameSquers((prevState: any) =>
      prevState.map((elem: any) => {
        if (elem.id === id && !elem.mined) {
          return { ...elem, hidden: false };
        }
        if (elem.id === id && elem.mined && count>2 ) {
          setLock(true)
          
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


  const testCont = gameSquers.filter((elem: any) => elem.hidden);

  console.log(count);

  // console.log(gameSquers);

  const squers = gameSquers.map((elem: any) => (
    <Square
    setLock={setLock}
    lock = {lock}
      count={count}
      testCont={testCont}
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
          {lock && <div>you loose!</div>}


          <button>reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
