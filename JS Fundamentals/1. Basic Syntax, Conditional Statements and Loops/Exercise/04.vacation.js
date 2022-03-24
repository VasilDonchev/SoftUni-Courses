function vacation(group, type, day) {
  totalPrice = 0;
  switch (type) {
    case "Students":
      if (day === "Friday") {
        if (group >= 30) {
          totalPrice = group * 8.45 * (1 - 0.15);
        } else {
          totalPrice = group * 8.45;
        }
      } else if (day === "Saturday") {
        if (group >= 30) {
          totalPrice = group * 9.8 * (1 - 0.15);
        } else {
          totalPrice = group * 9.8;
        }
      } else if (day === "Sunday") {
        if (group >= 30) {
          totalPrice = group * 10.46 * (1 - 0.15);
        } else {
          totalPrice = group * 10.46;
        }
      }
      break;
    case "Business":
      if (day === "Friday") {
        if (group >= 100) {
          totalPrice = (group - 10) * 10.9;
        } else {
          totalPrice = group * 10.9;
        }
      } else if (day === "Saturday") {
        if (group >= 100) {
          totalPrice = (group - 10) * 15.6;
        } else {
          totalPrice = group * 15.6;
        }
      } else if (day === "Sunday") {
        if (group >= 100) {
          totalPrice = (group - 10) * 16;
        } else {
          totalPrice = group * 16;
        }
      }
      break;
    case "Regular":
      if (day === "Friday") {
        if (group >= 10 && group <= 20) {
          totalPrice = group * 15 * (1 - 0.05);
        } else {
          totalPrice = group * 15;
        }
      } else if (day === "Saturday") {
        if (group >= 10 && group <= 20) {
          totalPrice = group * 29 * (1 - 0.05);
        } else {
          totalPrice = group * 20;
        }
      } else if (day === "Sunday") {
        if (group >= 10 && group <= 20) {
          totalPrice = group * 22.5 * (1 - 0.05);
        } else {
          totalPrice = group * 22.5;
        }
      }
      break;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(40,
    "Regular",
    "Saturday"
    );
