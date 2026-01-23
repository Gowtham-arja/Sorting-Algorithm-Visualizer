import React from 'react'

function SelectMenu({ sortingAlgo, setSortingAlgo }) {
  return (
    <select
      value={sortingAlgo}
      onChange={(e) => setSortingAlgo(e.target.value)}
      className="fixed right-3 bottom-4 bg-slate-800 rounded px-4 py-2"
    >
      <option value="Bubble Sort">Bubble Sort</option>
      <option value="Selection Sort">Selection Sort</option>
      <option value="Insertion Sort">Insertion Sort</option>
    </select>
  );
}

export default SelectMenu