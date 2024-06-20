import { Color, Square, PieceSymbol } from "chess.js";
import { useState } from "react";
import { MOVE } from "../screens/Game";

const ChessBoard = ({
  chess,
  setBoard,
  board,
  socket,
}: {
  chess: any;
  setBoard: any;
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];
  socket: WebSocket;
}) => {
  const [from, setFrom] = useState<null | Square>(null);
  const [to, setTo] = useState<null | Square>(null);
  return (
    <div className="text-black">
      {board.map((row, i) => {
        return (
          <div key={i} className="flex">
            {row.map((square, j) => {
              const squareRepesenation = (String.fromCharCode(97 + j) +
                "" +
                (8 - i)) as Square;
              return (
                <div
                  onClick={() => {
                    if (!from) {
                      setFrom(squareRepesenation);
                    } else {
                      socket.send(
                        JSON.stringify({
                          type: MOVE,
                          payload: {
                            from,
                            to: squareRepesenation,
                          },
                        }),
                      );
                      setFrom(null);
                      chess.move({
                        from,
                        to: squareRepesenation,
                      });
                      setBoard(chess.board());
                      console.log({ from, to: squareRepesenation });
                    }
                  }}
                  key={j}
                  className={`w-20 h-20 ${(i + j) % 2 === 0 ? "bg-green-500" : "bg-green-200"}`}
                >
                  <div className="w-full justify-center flex h-full">
                    <div className="h-full justify-center flex flex-col">
                      {square ? square.type : ""}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ChessBoard;
