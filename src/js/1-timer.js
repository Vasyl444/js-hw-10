import flatpickr from "flatpickr";
const startButton = document.querySelector("button[data-start]");
const myInput = document.querySelector("#datetime-picker");
const days = document.querySelector("span[data-days");
console.log("🚀 ~ days:", days);
const hours = document.querySelector("span[data-hours]");
console.log("🚀 ~ hours:", hours)
const section = document.querySelector("section");

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
  
let image = document.createElement('img');
image.src = '../img/Vector (1).svg';

  let closeButton = document.createElement('button');
closeButton.style.border = 'none';
    closeButton.style.backgroundColor = '#EF4040';
closeButton.style.marginLeft = '10px';
closeButton.style.display = 'flex';
closeButton.style.padding = '0';
closeButton.style.width = 'auto';
closeButton.style.height = 'auto';
    closeButton.prepend(image);
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
          return userSelectedDate;
          };
    },
});
myInput.addEventListener('click', () => {
    closeButton.remove();
    alertBox.remove();
});

startButton.setAttribute("disabled", "");
section.addEventListener("click", (event) => {
    if (event.target === myInput) {
        startButton.removeAttribute("disabled");
    } else if (event.target !== myInput) { startButton.setAttribute("disabled", ""); }
});

startButton.addEventListener("click", () => {
  const  interval = setInterval(() => {
       let residue = Math.floor((userSelectedDate - new Date()) / 1000); 
        console.log(residue);
        residue -= 1;
        if (residue < 0) {
            clearInterval(interval);
            return;
        }
    }, 1000);
})
