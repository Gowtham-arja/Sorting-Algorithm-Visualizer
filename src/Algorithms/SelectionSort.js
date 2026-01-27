const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function SelectionSort({
  array,
  setArray,
  setComparing,
  setSorted,
  speed,
  isSortingRef,
  setSelectionIndex
}) {
  let arrayCopy = array;

  const time =
    speed === 'Slow' ? 1000 :
    speed === 'Medium' ? 700 : 300;

  let n = arrayCopy.length;

  for (let i = 0; i < n; i++) {
    if (!isSortingRef.current) return;

    let minIndex = i;
    setSelectionIndex(minIndex);
    await sleep(time);

    for (let j = i + 1; j < n; j++) {
      if (!isSortingRef.current) return;

      setComparing([j]);
      await sleep(time);

      if (arrayCopy[j] < arrayCopy[minIndex]) {
        minIndex = j;
        setSelectionIndex(minIndex);
      }
    }

    if (minIndex !== i) {
      [arrayCopy[i], arrayCopy[minIndex]] =
        [arrayCopy[minIndex], arrayCopy[i]];

      setArray([...arrayCopy]);
      await sleep(time);
    }

    setSorted(prev => [...prev, i]);
    setComparing([]);
  }
}

export default SelectionSort;