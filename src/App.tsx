import "./App.css";

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface SquareProps {
  name: any;
}

function Square(props: SquareProps) {
  return <div className="square">{props.name}</div>;
}

function App() {
  const squers = testArr.map((elem: any, index: any) => (
    <Square key={index} name={elem} />
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
