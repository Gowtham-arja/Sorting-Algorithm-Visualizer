import React from 'react'
import NavBar from './Components/Navbar/NavBar'
import { useState } from 'react';
import { useRef } from 'react';
import Bars from './Components/Bars/Bars';
import BubbleSort from './Algorithms/BubbleSort';
import SelectionSort from './Algorithms/SelectionSort';
import InsertionSort from './Algorithms/InsertionSort';

function App() {

  const isSortingRef = useRef(false);
  const [array, setArray] = useState([50, 40, 70, 20, 90, 10, 80, 30, 60, 100, 55, 45, 75, 25, 95, 15, 85, 35, 65, 5]);
  const [sortingAlgo, setSortingAlgo] = useState("Bubble Sort");
  const [speed, setSpeed] = useState("Medium");

  const [comparing, setComparing] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [selectionIndex, setSelectionIndex] = useState(null);
  
  const StartSorting = () => {

    isSortingRef.current = true;
    setComparing([]);
    setSorted([]);

    if (sortingAlgo === "Bubble Sort") {

      BubbleSort(
        {
          array,
          setArray, 
          setComparing,
          setSorted, 
          speed,
          isSortingRef
        });
    }
    else if (sortingAlgo === "Selection Sort") {

      SelectionSort(
        {
          array,
          setArray, 
          setComparing,
          setSorted, 
          speed,
          isSortingRef,
          setSelectionIndex
        });
    }

    else if (sortingAlgo === "Insertion Sort") {

      InsertionSort(
        {
          array,
          setArray, 
          setComparing,
          setSorted,
          speed,
          isSortingRef
        });
    }
  };

  return (
    <div className='bg-slate-900 h-screen'>
      <h1 className='text-white text-4xl text-center'>Sorting Visualizer</h1>

      <Bars 
      array={array}
      comparing={comparing}
      sorted={sorted}
      selectionIndex={selectionIndex}
      />

      <NavBar 
      array={array} setArray={setArray} 
      sortingAlgo={sortingAlgo} setSortingAlgo={setSortingAlgo} 
      speed={speed} setSpeed={setSpeed}
      StartSorting={StartSorting} 
      setSorted={setSorted}
      isSortingRef={isSortingRef}
      setComparing={setComparing}
      setSelectionIndex={setSelectionIndex}
      />

    </div>
  )
}

export default App