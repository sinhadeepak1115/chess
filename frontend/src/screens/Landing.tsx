const Landing = () => {
  return (
    <div>
      <div className="mt-2">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <img src={"/chess.jpeg"} />
          </div>
          <h1 className="text-4xl font-bold">
            Play Chess Online on the #naughty Site!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
