interface SquareProps {
  id: number;
  isHidden: boolean;
  isMined: boolean;
  gameSquers: any;
  setGameSquers: any; 
  lock: boolean;
  setLock: any;
  testCount: any;
  hiddenHandleClick: any;
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
    hiddenHandleClick,
  } = props;


  

  return (
    <div
      className={isHidden ? "square-hidden" : "square"}
      onClick={()=>hiddenHandleClick(id)}
    >
      {isMined && lock && <span> 💣 </span>}
    </div>
  );
}

export default Square;
