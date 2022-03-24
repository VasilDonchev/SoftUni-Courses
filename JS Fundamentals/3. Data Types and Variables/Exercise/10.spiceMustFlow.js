function spiceMustFlow(startingYield) {
  let days = 0;
  let dayYeld = startingYield;
  let spiceExtracted = 0;

  if (startingYield >= 100) {
      while (dayYeld >= 100) {
        spiceExtracted += dayYeld;
        dayYeld -= 10;
        spiceExtracted -= 26;
        days++;
      }
      spiceExtracted -= 26;
      console.log(days);
      console.log(spiceExtracted);
      
  } else {
    console.log(days);
    console.log(spiceExtracted);
  }

}

spiceMustFlow(99);
