function Bars({ array, comparing = [], sorted = [], selectionIndex}) {
  const maxValue = Math.max(...array);

  return (
    <div className="bg-transparent h-3/4 w-11/12 mx-auto mt-14 flex items-end justify-center space-x-1">
      {array.map((value, index) => {
        const isComparing = comparing.includes(index);
        const isSorted = sorted.includes(index);

        return (
          <div
            key={index}
            className={`rounded-t transition-all duration-300 ${
              isComparing
                ? "bg-yellow-400"
                : isSorted
                ? "bg-green-600"
                :index === selectionIndex
                ? "bg-red-500"
                : "bg-cyan-400"
            }`}
            style={{
              height: `${(560 * value) / maxValue}px`,
              width: `${100 / array.length}%`,
            }}
          />
        );
      })}
    </div>
  );
}

export default Bars;
