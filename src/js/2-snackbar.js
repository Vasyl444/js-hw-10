import iziToast from "izitoast";

const delay = document.querySelector('input[type="number"]');
const fulfilled = document.querySelector('input[value="fulfilled"]');
const rejected = document.querySelector('input[value="rejected"]');
const submit = document.querySelector('button[type="submit"]');
const form = document.querySelector('.form');
let time = 0;
let checked = "";
let notChecked = "";

delay.addEventListener("blur", () => {
    time = delay.value;
})
fulfilled.addEventListener("click", () => {
    checked = fulfilled.value;
});
rejected.addEventListener("click", () => {
    notChecked = rejected.value;
});
     
submit.addEventListener("click", (event) => {
    event.preventDefault();
    const promise = new Promise((resolve, reject) => {
        if (checked) {
            setTimeout(() => {
                resolve(iziToast.show({
                    id: null,
                    class: '',
                    title: 'Ok',
                    titleColor: '#fff',
                    titleSize: '',
                    titleLineHeight: '',
                    message: `✅ Fulfilled promise in ${time}ms`,
                    messageColor: '',
                    messageSize: '',
                    messageLineHeight: '',
                    backgroundColor: '',
                    theme: 'light', // dark
                    color: '', // blue, red, green, yellow
                    icon: '',
                    iconText: '',
                    iconColor: '',
                    iconUrl: null,
                    image: '',
                    imageWidth: 50,
                    maxWidth: null,
                    zindex: 100,
                    layout: 1,
                    balloon: false,
                    close: true,
                    closeOnEscape: false,
                    closeOnClick: false,
                    displayMode: 0, // once, replace
                    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
                    target: '',
                    targetFirst: true,
                    timeout: 5000,
                    rtl: false,
                    animateInside: true,
                    drag: true,
                    pauseOnHover: true,
                    resetOnHover: false,
                    progressBar: true,
                    progressBarColor: '',
                    progressBarEasing: 'linear',
                    overlay: false,
                    overlayClose: false,
                    overlayColor: 'rgba(0, 0, 0, 0.6)',
                    transitionIn: 'fadeInUp',
                    transitionOut: 'fadeOut',
                    transitionInMobile: 'fadeInUp',
                    transitionOutMobile: 'fadeOutDown',
                    buttons: {},
                    inputs: {},
                    onOpening: function () { },
                    onOpened: function () { },
                    onClosing: function () { },
                    onClosed: function () { }
                }))
            }, time);
        } else {
            setTimeout(() => {
                reject(iziToast.error({
                    title: 'Error',
                    message: 'Illegal operation',
                }))
            }, time);
        };
    });
    promise
        .then(value => { return value })
        .catch(console.error())
        .finally()
});    
    
        
    
     