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

  const hiddenHandleClick = () => {
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

export default Square;
