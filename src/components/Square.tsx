interface SquareProps {
  id: number;
  isHidden: boolean;
  isMined: boolean;
  lock: boolean;
  hiddenHandleClick: any;
}

function Square(props: SquareProps) {
  const { id, isHidden, isMined, lock, hiddenHandleClick } = props;

  return (
    <div
      className={isHidden ? "square-hidden" : "square"}
      onClick={() => hiddenHandleClick(id)}
    >
      {isMined && lock && <span> 💣 </span>}
    </div>
  );
}

export default Square;
