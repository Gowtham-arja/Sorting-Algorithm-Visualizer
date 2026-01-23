import React from 'react'
import ArrayDisplay from './ArrayDisplay'
import SelectMenu from './SortMenu'
import RandomBtn from './RandomBtn'
import ArrayInput from './ArrayInput'
import { useState } from 'react'
import StartBtn from './StartBtn'
import SpeedMenu from './SpeedMenu'


function NavBar({ array, setArray, sortingAlgo, setSortingAlgo, speed, setSpeed, StartSorting, setSorted, isSortingRef, setComparing, setSelectionIndex }) {


  return (
    <div className='bg-slate-700 p-3 text-white fixed bottom-0 left-0 w-full'>
      
      <ArrayInput
      setArray={setArray} 
      setSorted={setSorted}
      isSortingRef={isSortingRef}
      setComparing={setComparing}
      setSelectionIndex={setSelectionIndex}
      />

      <RandomBtn
      array={array}
      setArray={setArray}
      setSorted={setSorted}
      isSortingRef={isSortingRef}
      setComparing={setComparing}
      setSelectionIndex={setSelectionIndex} 
      />

      <ArrayDisplay
      array={array}
      />

      <StartBtn
      array={array}
      sortingAlgo={sortingAlgo}
      speed={speed} StartSorting={StartSorting}
      />

      <SpeedMenu
      Speed={speed}
      setSpeed={setSpeed}
      />

      <SelectMenu 
      sortingAlgo={sortingAlgo} 
      setSortingAlgo={setSortingAlgo}
      isSortingRef={isSortingRef}
      setComparing={setComparing}
      setSelectionIndex={setSelectionIndex}
      />


    </div>
  )
}

export default NavBar