import React from 'react'
import NavBar from './Components/Navbar/NavBar'
import { useState } from 'react';
import Bars from './Components/Bars/Bars';
import BubbleSort from './Algorithms/BubbleSort';

function App() {

  const [array, setArray] = useState([]);
  const [sortingAlgo, setSortingAlgo] = useState("Bubble Sort");
  const [speed, setSpeed] = useState("Medium");

  const [comparing, setComparing] = useState([]);
  const [sorted, setSorted] = useState([]);
  
  const StartSorting = () => {

    setComparing([]);
    setSorted([]);

    if (sortingAlgo === "Bubble Sort") {

      BubbleSort(
        {
          array, setArray, 
          setComparing,
          setSorted, 
          speed
        }
      );

    } 
    else if (sortingAlgo === "Selection Sort") {
      console.log("Running Selection Sort");
    } 
    else if (sortingAlgo === "Insertion Sort") {
      console.log("Running Insertion Sort");
    }
  };

  return (
    <div className='bg-slate-900 h-screen'>
      <h1 className='text-white text-4xl text-center'>Sorting Visualizer</h1>

      <Bars 
      array={array}
      comparing={comparing}
      sorted={sorted}
      />

      <NavBar 
      array={array} setArray={setArray} 
      sortingAlgo={sortingAlgo} setSortingAlgo={setSortingAlgo} 
      speed={speed} setSpeed={setSpeed}
      StartSorting={StartSorting} 
      setSorted={setSorted}
      />

    </div>
  )
}

export default App