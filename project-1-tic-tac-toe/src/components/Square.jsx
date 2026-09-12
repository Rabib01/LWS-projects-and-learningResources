export default function Square({ squareValue, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="w-32 h-32 text-5xl  active:border focus:outline-none border-r-2 border-b-4 border-[#A98273] bg-[#e7d1c8] shadow-[8px_5px_0_#A98273]"
    >
      {squareValue}
    </button>
  );
}
