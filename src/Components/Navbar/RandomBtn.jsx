import React from 'react'

function RandomBtn(props) {
    const GenerateRandomArray = () => {
      let length = (Math.floor(Math.random() * 50)) + 10;
      let Randomarray = [];

      for (let i = 0; i < length; i++) {
        Randomarray.push(Math.floor(Math.random() * 500) + 1);
      }

      return Randomarray;
    }

  return (
    <button
    className='bg-slate-800 hover:bg-blue-400 text-white font-bold py-2 px-3 ml-1 rounded'
    onClick={() => {
        props.setSorted([]);
        const randomArray = GenerateRandomArray();
        props.setArray(randomArray);
    }}
    >
        Randomize
    </button>
  )
}

export default RandomBtn