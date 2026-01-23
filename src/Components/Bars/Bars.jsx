function Bars({ array, comparing = [], sorted = [] }) {
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
                : "bg-cyan-400"
            }`}
            style={{
              height: `${(560 * value) / maxValue}px`,
              width: `${100 / array.length}%`,
              transform: isComparing ? "scale(1.05)" : "scale(1)",
            }}
          />
        );
      })}
    </div>
  );
}

export default Bars;
