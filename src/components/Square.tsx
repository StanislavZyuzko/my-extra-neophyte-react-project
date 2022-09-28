interface SquareProps {
  id: number;
  isHidden: boolean;
  isMined: boolean;
  lock: boolean;
  squareHandleClick: (id: number) => void;
}

function Square(props: SquareProps) {
  const { id, isHidden, isMined, lock, squareHandleClick } = props;

  return (
    <div
      className={isHidden ? "square-hidden" : "square"}
      onClick={() => squareHandleClick(id)}
    >
      {isMined && lock && <span> 💣 </span>}
    </div>
  );
}

export default Square;
