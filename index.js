let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let month = new Date().getMonth();
let date = new Date().getDate();
let ExactMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octobar",
  "November",
  "December",
];

const getMonth = arr.filter((el) => {
  return el == month;
});

let year = new Date().getFullYear();

const DateFormat = () => {
  return `${date} ${ExactMonth[getMonth[0]]}, ${year}`;
};

export default DateFormat;
