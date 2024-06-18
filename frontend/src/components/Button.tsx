const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      type="button"
      className="grid grid-flow-col bg-green-500 hover:bg-green-700 content-center text-justify text-2xl text-white font-bold p-2 px-4 rounded "
      onClick={() => {
        {
          onClick();
        }
      }}
    >
      <img className="object-center h-10 w-10 max-w-lg" src={"/pawn.svg"} />
      {children}
    </button>
  );
};
export default Button;
