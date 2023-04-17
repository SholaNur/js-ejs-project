const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let today = new Date();
  let currentDay = today.getDay();
  let currentDayOfWeek = daysOfWeek[currentDay];

  let day;
  if (currentDay === 6 || currentDay === 0) {
    day = "Weekend";
  } else {
    day = "Weekday";
  }

  res.render("list", { kindOfDay: currentDayOfWeek, day: day });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
