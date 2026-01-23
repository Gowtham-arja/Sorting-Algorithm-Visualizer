import React, { use } from 'react'

function ArrayInput({ setArray ,setSorted, isSortingRef, setComparing, setSelectionIndex}) {
  const handleChange = (value) => {
    const arrayValues = value
      .split(",")
      .map(item => Number(item.trim()))
      .filter(item => !isNaN(item));

    setArray(arrayValues);
  };

  return (
    <input
      onChange={(e) => {
        isSortingRef.current = false;
        setSelectionIndex(null);
        setComparing([]);
        handleChange(e.target.value)
        setSorted([]);
      }}
      className="border border-gray-300 rounded p-2 m-1 text-black"
      type="text"
      placeholder="Enter values: 5,3,8,1"
    />
  );
}

export default ArrayInput;
