import flatpickr from "flatpickr";
const startButton = document.querySelector("button[data-start]");
const myInput = document.querySelector("#datetime-picker");
const daysInTimer = document.querySelector("span[data-days");
const hoursInTimer = document.querySelector("span[data-hours]");
const minutesInTimer  = document.querySelector("span[data-minutes]");
const secondsInTimer  = document.querySelector("span[data-seconds]");
const body = document.querySelector("body");

startButton.setAttribute("disabled", "");

let userSelectedDate;

let alertBox = document.createElement('div');
  alertBox.style.padding = '0';
  alertBox.style.border = 'none';
  alertBox.style.borderRadius = '4px';
  alertBox.style.backgroundColor = '#EF4040';
  alertBox.style.color = '#fff'
  alertBox.style.position = 'absolute';
  alertBox.style.top = '50%';
  alertBox.style.left = '450%';
  alertBox.style.transform = 'translate(-50%, -50%)';
  alertBox.style.zIndex = '9999';
  alertBox.innerText = 'Please choose a date in the future';
  alertBox.style.display = 'flex';
  alertBox.style.justifyContent = 'space-evenly';
  alertBox.style.alignItems = 'center';
  alertBox.style.height = '64px';
  alertBox.style.width = '300px';

let closeButton = document.createElement('button');
  closeButton.style.border = 'none';
  closeButton.style.backgroundColor = '#EF4040';
  closeButton.style.marginLeft = '10px';
  closeButton.style.display = 'flex';
  closeButton.style.padding = '0';
  closeButton.style.width = 'auto';
  closeButton.style.height = 'auto';
  closeButton.insertAdjacentHTML("beforeend", '<svg width=12 height=12><use href="../img/symbol-defs.svg#icon-Vector"></use></svg>');
  closeButton.onclick = function() {       
  closeButton.remove();
  alertBox.remove();
};
    
function customAlert() {  
  alertBox.appendChild(closeButton);
    startButton.appendChild(alertBox);
}

const fp = flatpickr(myInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  dateFormat: "Y-m-d H-i",
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] < new Date()) {
          customAlert();
      } else {         
          userSelectedDate = selectedDates[0].getTime();
          startButton.removeAttribute("disabled");
          closeButton.remove();
          alertBox.remove();
    };
  },
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return `${value}`.padStart(2, '0');
}

startButton.addEventListener("click", () => {
    startButton.setAttribute("disabled", "");
    myInput.setAttribute("disabled", "");
  const  interval = setInterval(() => {
      let residue = userSelectedDate - new Date();
      const convertation = convertMs(residue);
        secondsInTimer.textContent = addLeadingZero(convertation.seconds);
        minutesInTimer.textContent = addLeadingZero(convertation.minutes);
      hoursInTimer.textContent = addLeadingZero(convertation.hours);
      daysInTimer.textContent = addLeadingZero(convertation.days);
        if (residue < 1000) {
          clearInterval(interval);
          myInput.removeAttribute("disabled");
            return;
        }
    }, 1000);
})
