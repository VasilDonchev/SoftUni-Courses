function radioCrystals(arr) {
  let calibr = arr[0];

  let cutting = (x) => x / 4;
  let lapping = (x) => x - x * 0.2;
  let grinding = (x) => x - 20;
  let etching = (x) => x - 2;
  let xReying = (x) => x + 1;

  for (let i = 1; i < arr.length; i++) {
    let cut = 0;
    let lap = 0;
    let grind = 0;
    let etch = 0;
    let currentSize = arr[i];
    console.log(`Processing chunk ${currentSize} microns`);

    while (currentSize !== calibr) {
      //   currentSize = xReying(currentSize);
      //   console.log(`X-ray x1`);
      //   console.log(`Finished crystal ${calibr} microns`);
      //   break;

      if (currentSize / 4 >= calibr) {
        currentSize = cutting(currentSize);
        cut++;
      }
      if (currentSize == calibr) {
        console.log(`Cut x${cut}`);
        console.log("Transporting and washing");
        currentSize = Math.floor(currentSize);
        console.log(`Finished crystal ${calibr} microns`);
        continue;
      } else {
        console.log(`Cut x${cut}`);
        console.log("Transporting and washing");
        currentSize = Math.floor(currentSize);
      }
      while (currentSize * 0.8 >= calibr) {
        currentSize = Math.floor(lapping(currentSize));
        lap++;
      }
      if (currentSize == calibr) {
        console.log(`Lap x${lap}`);
        console.log("Transporting and washing");
        currentSize = Math.floor(currentSize);
        console.log(`Finished crystal ${calibr} microns`);
        continue;
      } else {
        console.log(`Lap x${lap}`);
        console.log("Transporting and washing");
        currentSize = Math.floor(currentSize);
      }
      while (currentSize - 20 >= calibr) {
        currentSize = grinding(currentSize);
        grind++;
      }
      if (currentSize == calibr) {
        console.log(`Grind x${grind}`);
        console.log("Transporting and washing");
        console.log(`Finished crystal ${calibr} microns`);
        continue;
      } else {
        console.log(`Grind x${grind}`);
        console.log("Transporting and washing");
        currentSize = Math.floor(currentSize);
      }
      while (currentSize - 2 >= calibr) {
        currentSize = etching(currentSize);
        etch++;
      }
      if (currentSize == calibr) {
        console.log(`Etch x${etch}`);
        console.log("Transporting and washing");
        console.log(`Finished crystal ${calibr} microns`);
        continue;
      } else {
        currentSize = etching(currentSize);
        etch++;
        currentSize = xReying(currentSize);
        console.log(`Etch x${etch}`);
        console.log("Transporting and washing");
        console.log(`X-ray x1`);
        console.log(`Finished crystal ${calibr} microns`);
      }
    }
  }
}

radioCrystals([1000, 999]);
