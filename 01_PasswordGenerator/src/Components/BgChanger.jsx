import { useState } from "react";

function BgChanger() {
  const [Color, setColor] = useState("black");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: Color }}
      >
        <div className=" fixed flex felx-wrap justify-between bottom-10  inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("Red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "Red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("Blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "Blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("Yellow")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "Yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("Green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "Green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("Orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "Orange" }}
            >
              Orange
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default BgChanger;
