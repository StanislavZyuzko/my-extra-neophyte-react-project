interface SquareProps {
  id: number;
  isHidden: boolean;
  isMined: boolean;
  gameSquers: any;
  setGameSquers: any; 
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
    
    lock,
    setLock,
    testCount,
  } = props;


  const hiddenHandleClick = () => {
    console.log(testCount);
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
