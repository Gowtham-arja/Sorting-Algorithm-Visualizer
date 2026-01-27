const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function InsertionSort({
  array,
  setArray,
  setComparing,
  setSorted,
  speed,
  isSortingRef
}) {
  let arrayCopy = [...array];

  let time =
    speed === "Slow" ? 2000 :
    speed === "Medium" ? 1000 : 500;

  let n = arrayCopy.length;

  for (let i = 1; i < n; i++) {
    if (!isSortingRef.current) return;

    let key = arrayCopy[i];
    let j = i - 1;

    // Highlight key
    setComparing([i]);
    await sleep(time / 2);

    while (j >= 0 && arrayCopy[j] > key) {
      if (!isSortingRef.current) return;

      // Highlight comparison
      setComparing([j, j + 1]);
      await sleep(time);

      // Shift right
      arrayCopy[j + 1] = arrayCopy[j];
      setArray([...arrayCopy]);

      j--;
      await sleep(time / 2);
    }

    // Insert key
    arrayCopy[j + 1] = key;
    setArray([...arrayCopy]);

    setComparing([]);
    setSorted(prev => [...prev, i]);
    await sleep(time / 2);
  }

  // Mark all sorted
  setSorted([...Array(n).keys()]);
}

export default InsertionSort;
