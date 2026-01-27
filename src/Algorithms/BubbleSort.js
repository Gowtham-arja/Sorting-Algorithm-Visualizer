const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function BubbleSort({
    array, 
    setArray,
    setComparing,
    setSorted,
    speed,
    isSortingRef
}) {
    let arrayCopy = array;
    
    const time =
    speed === 'Slow' ? 1000 :
    speed === 'Medium' ? 700 : 300;

    let n = arrayCopy.length;

    for (let i = 0; i < n - 1; i++) {

        if (!isSortingRef.current) return;
        for (let j = 0; j < n - i - 1; j++) {

            if (!isSortingRef.current) return;
            setComparing([j, j + 1]);
            await sleep(time);

            if(arrayCopy[j] > arrayCopy[j+1]){
                
                await sleep(time);
                let temp = arrayCopy[j+1];
                arrayCopy[j+1] = arrayCopy[j];
                arrayCopy[j] = temp;
                
            }
        }

        const sortedIndex = n - i - 1;
        setSorted(prev => [...prev, sortedIndex]);

        setComparing([]);
    }
    setSorted(prev => [...prev,0]);
}

export default BubbleSort;