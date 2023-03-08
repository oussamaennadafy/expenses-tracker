function Month({ name, percentage }) {
  return (
    <div>
      <div
        className={`w-3 rounded-full h-24 bg-violet-100 border border-gray-500 relative overflow-hidden
      after:content[''] after:absolute after:bottom-0 after:left-0 after:w-full after:bg-violet-500 after:h-[${percentage}%]`}
      ></div>
      <p className="text-black text-xs font-semibold">{name}</p>
    </div>
  );
}

export default Month;
