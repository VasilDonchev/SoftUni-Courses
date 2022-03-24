function weekday(dayAsNumber) {
  //   if (dayAsNumber < 1 || dayAsNumber > 7) {
  //     console.log("Invalid day!");
  //   } else {
  //     let day = [
  //       "Monday",
  //       "Tuesday",
  //       "Wednesday",
  //       "Tursday",
  //       "Friday",
  //       "Saturday",
  //       "Sunday",
  //     ];
  //     let index = dayAsNumber - 1;

  //     console.log(day[index]);
  //   }
  console.log(
    dayAsNumber <= 7 && dayAsNumber >= 1
      ? [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Tursday",
          "Friday",
          "Saturday",
          "Sunday",
        ][dayAsNumber - 1]
      : "Invalid day!"
  );
}
weekday(1);
weekday(3);
weekday(6);
weekday(-3);
weekday(33);
weekday(1);
weekday(1);
