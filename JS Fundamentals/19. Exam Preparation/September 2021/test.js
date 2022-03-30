let entries = Object.entries(cities)
  for (let [key, value] of entries) {
      console.log(`${key} -> ${value.population} -> ${value.gold}`);
  }