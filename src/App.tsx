import { useState, useEffect } from "react";

import Square from "./components/Square";
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
  { id: 9, hidden: true, mined: false },
];

function App() {
  const [gameSquers, setGameSquers] = useState<any>(initialArr);
  const [lock, setLock] = useState<boolean>(false);

  const testCount = gameSquers.filter((elem: any) => elem.hidden).length;

  const randomInteger = (min: number, max: number) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  const getRandomArr = ()=> {
    const randomId = randomInteger(1, 9);
    console.log(randomId);
    const randomArr = initialArr.map((elem) => {      
      if (elem.id === randomId) {
        return { ...elem, mined: true };
      }
      return elem;
    });
    setGameSquers(randomArr);
    setLock(false);
  }  

  useEffect(() => {
    getRandomArr();
  }, []);

  const resetHandleClick = () => {
   getRandomArr();
  };

  const hiddenHandleClick = (id: any) => {
    setGameSquers((prevState: any) =>
      prevState.map((elem: any) => {
        if (elem.id === id) {
          setLock(elem.mined && testCount > 2);
          return { ...elem, hidden: false };
        }        
        return elem;
      })
    );
  };

  const squers = gameSquers.map((elem: any) => (
    <Square
    hiddenHandleClick={hiddenHandleClick}
    testCount={testCount}
      id={elem.id}
      key={elem.id}
      isHidden={elem.hidden}
      isMined={elem.mined}
      gameSquers={gameSquers}
      setGameSquers={setGameSquers}     
      lock={lock}
      setLock={setLock}
    />
  ));

  return (
    <div className="App">
      <div className="board">
        <div className="squers">{squers}</div>
        <div className="gameInfo">
          {!lock && testCount < 2 && (
            <div style={{ color: "green" }}>you won! 🤗 </div>
          )}
          {lock && <div style={{ color: "red" }}>you lost!</div>}
          <button type="button" onClick={resetHandleClick}>
            reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
