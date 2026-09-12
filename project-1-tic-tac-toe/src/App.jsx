import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <div className="min-h-screen bg-[repeating-conic-gradient(from_0deg_at_50%_50%,#FBEBD8_0deg_90deg,#FFFDF9_90deg_180deg)] bg-[length:40px_40px]"> */}
      {/* <div className="min-h-screen bg-[repeating-conic-gradient(from_0deg_at_50%_50%,#E8DCCB_0deg_90deg,#FAF7F2_90deg_180deg)] bg-[length:40px_40px]"> */}
      {/* <div className="min-h-screen bg-[repeating-conic-gradient(from_0deg_at_50%_50%,#C8D5C0_0deg_90deg,#F7F4EA_90deg_180deg)] bg-[length:40px_40px]"> */}
      {/* <div className="min-h-screen bg-[repeating-conic-gradient(from_0deg_at_50%_50%,#243447_0deg_90deg,#F6F1E9_90deg_180deg)] bg-[length:40px_40px]"> */}
      {/* <div className="min-h-screen bg-[repeating-conic-gradient(from_0deg_at_50%_50%,#B8C7D9_0deg_90deg,#F8F9F6_90deg_180deg)] bg-[length:40px_40px]"> */}
      {/* <div className="min-h-screen bg-[repeating-conic-gradient(from_0deg_at_50%_50%,#3B3B3B_0deg_90deg,#F1E8DC_90deg_180deg)] bg-[length:40px_40px]"> */}

      <div className="min-h-screen bg-[repeating-conic-gradient(from_0deg_at_50%_50%,#D89B7A_0deg_90deg,#FFF8F0_90deg_180deg)] bg-[length:40px_40px]">
        <p>Hello</p>
      </div>
    </div>
  );
}

export default App;
