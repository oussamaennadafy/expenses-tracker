import { useEffect, useRef } from "react";

function Month({ name, percentage }) {
  percentage = Math.round(percentage);
  return (
    <div>
      <div
        className={`special-class w-3 rounded-full h-24 bg-violet-100 border border-gray-500 relative overflow-hidden
        `}
      >
        <div
          style={{ top: `${100 - percentage}%` }}
          className={`absolute top-[100%] left-0 w-full bg-violet-500 h-full transition-all`}
        ></div>
      </div>
      <p className="text-black text-xs font-semibold">{name}</p>
    </div>
  );
}

export default Month;
