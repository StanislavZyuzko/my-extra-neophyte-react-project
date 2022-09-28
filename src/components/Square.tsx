interface SquareProps {
  id: number;
  isHidden: boolean;
  isMined: boolean;
  gameSquers: any;
  setGameSquers: any;
  count: number;
  setCount: any;
  lock: boolean;
  setLock: any;
  testCount: any;
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
    testCount,
  } = props;


  const hiddenHandleClick = () => {
    console.log(testCount);
    setGameSquers((prevState: any) =>
      prevState.map((elem: any) => {
        if (elem.id === id && !elem.mined) {
          return { ...elem, hidden: false };
        }
        if (elem.id === id && elem.mined && testCount > 2) {
          setLock(true);
          return { ...elem, hidden: false };
        }
        return elem;
      })
    );
    // setCount(testCount);
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

export default Square;
