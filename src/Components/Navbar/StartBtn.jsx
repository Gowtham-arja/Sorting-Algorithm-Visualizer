import React from 'react'

function StartBtn({StartSorting}) {

  return (
    <>
    <button
    onClick={StartSorting}
    className="fixed right-85 bottom-4 bg-green-700 rounded px-4 py-2 text-white font-bold"
    >
        Sort
    </button>
    </>
  )
}

export default StartBtn