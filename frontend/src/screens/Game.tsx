import ChessBoard from "../components/ChessBoard";
import Button from "../components/Button";
import useSocket from "../hooks/useSocket";
import { useEffect, useState } from "react";
import { Chess } from "chess.js";

export const INIT_GAME = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";

const Game = () => {
  const socket = useSocket();
  const [chess, setChess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.onmessage = function (event) {
      const message = JSON.parse(event.data);
      console.log(message);
      switch (message.type) {
        case INIT_GAME:
          setBoard(chess.board());
          setStarted(true);
          console.log("Game Initiated");
          break;
        case MOVE:
          const move = message.payload;
          chess.move(move);
          setBoard(chess.board());
          console.log("move made");
          break;
        case GAME_OVER:
          console.log("game over");
          break;
      }
    };
  }, [socket]);

  if (!socket) return <div>Connecting...</div>;
  return (
    <div className="flex justify-center">
      <div className="pt-8 max-w-screen-xl w-full">
        <div className="grid grid-cols-6 gap-4 w-full ">
          <div className="col-span-4  w-full flex justify-center">
            {/* chessboard */}
            <ChessBoard
              chess={chess}
              socket={socket}
              board={board}
              setBoard={setBoard}
            />
          </div>
          <div className="col-span-2 w-full">
            {!started && (
              <Button
                onClick={() => {
                  socket.send(
                    JSON.stringify({
                      type: INIT_GAME,
                    }),
                  );
                }}
              >
                Play
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
