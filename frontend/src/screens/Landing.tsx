import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div className="pt-9 max-w-screen-lg">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex justify-center">
            <img src={"/chess.jpeg"} className="h-auto max-w-full" />
          </div>
          <div className="pt-16 px-10">
            <div className="flex justify-center">
              <h1 className="text-white text-4xl font-bold">
                Play Chess Online on the #naughty Site!
              </h1>
            </div>

            <div className="mt-8 flex justify-center">
              <Button onClick={() => navigate("/game")}>Play Online</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
