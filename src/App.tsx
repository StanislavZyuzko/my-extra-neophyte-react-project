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

console.log(initialArr);

interface SquareProps {
  isHidden: any;
}

function Square(props: SquareProps) {
  const { isHidden } = props;
  return (
    <div
      //  className="square"
      className={isHidden ? "square-hidden" : "square"}
    ></div>
  );
}

function App() {
  const squers = initialArr.map((elem: any) => (
    <Square key={elem.id} isHidden={elem.hidden} />
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
