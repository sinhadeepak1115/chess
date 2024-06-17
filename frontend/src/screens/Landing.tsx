const Landing = () => {
  return (
    <div>
      <div className="mt-2">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex justify-center">
            <img src={"/chess.jpeg"} className="max-w-96" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">
              Play Chess Online on the #naughty Site!
            </h1>
            <button
              type="button"
              className="grid grid-flow-col bg-green-500 hover:bg-green-700 content-center text-justify text-2xl text-white font-bold p-2 px-4 rounded "
            >
              <img
                className="object-center h-10 w-10 max-w-lg"
                src={"/pawn.svg"}
              />
              Play Online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
