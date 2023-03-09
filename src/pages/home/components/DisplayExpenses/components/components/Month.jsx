import { useEffect, useRef } from "react";

function Month({ name, percentage }) {
  const afterRef = useRef();
  useEffect(() => {
    afterRef.current.classList.add(`after:h-[${percentage}%]`);
  }, []);
  return (
    <div>
      <div
        ref={afterRef}
        className={`special-class w-3 rounded-full h-24 bg-violet-100 border border-gray-500 relative overflow-hidden
      after:content[''] after:absolute after:bottom-0 after:left-0 after:w-full after:bg-violet-500`}
      ></div>
      <p className="text-black text-xs font-semibold">{name}</p>
    </div>
  );
}

export default Month;
