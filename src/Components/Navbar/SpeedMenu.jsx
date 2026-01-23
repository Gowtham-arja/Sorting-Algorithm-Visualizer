import React from 'react'

function SpeedBtn({ Speed, setSpeed }) {
  return (
    <select 
    value={Speed}
    onChange={(e) => setSpeed(e.target.value)}
    className="fixed right-45 bottom-4 bg-slate-800 rounded px-4 py-2"
    >
      <option value="Slow">Slow</option>
      <option value="Medium">Medium</option>
      <option value="Fast">Fast</option>
    </select>
  )
}

export default SpeedBtn