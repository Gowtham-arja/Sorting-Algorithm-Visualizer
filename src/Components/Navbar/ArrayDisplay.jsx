import React from 'react'

function ArrayDisplay({ array = []}) {
  return (
    <>
    <div
    style={{ scrollbarWidth: "none" }}
  className="
    fixed bottom-3.5 h-12
    overflow-x-scroll overflow-y-hidden 
    whitespace-nowrap
    text-xl inline-block w-120
    bg-gray-400 rounded px-4 py-2 ml-12
    text-center text-black font-bold
    "
>
  [{array.join(", ")}]
</div>

    </>
  )
}

export default ArrayDisplay