import ChessBoard from "../components/ChessBoard";
import Button from "../components/Button";

const Game = () => {
  return (
    <div className="flex justify-center">
      <div className="pt-8 max-w-screen-xl w-full">
        <div className="grid grid-cols-6 gap-4 w-full bg-red-400">
          <div className="col-span-4 bg-red-200 w-full">
            {/* chessboard */}
            <ChessBoard />
          </div>
          <div className="col-span-2 bg-green-300 w-full">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
