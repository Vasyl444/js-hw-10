import flatpickr from "flatpickr";
const startButton = document.querySelector("button[data-start]");
const myInput = document.querySelector("#datetime-picker");
const section = document.querySelector("section");
const fp = flatpickr(myInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  dateFormat: "Y-m-d H-i",
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
});

startButton.setAttribute("disabled", "");
section.addEventListener("click", (event) => {
    if (event.target === myInput) {
        startButton.removeAttribute("disabled");
    } else if (event.target !== myInput) { startButton.setAttribute("disabled", ""); }
});
