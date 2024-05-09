import iziToast from "izitoast";
const delayInput = document.querySelector('input[type="number"]');
const fulfilled = document.querySelector('input[value="fulfilled"]');
const rejected = document.querySelector('input[value="rejected"]');
const form = document.querySelector('.form');
const submit = document.querySelector('button[type="submit"');

let result = '';

fulfilled.addEventListener('click', () => {
    result = fulfilled.value;
});

rejected.addEventListener('click', () => {
    result = rejected.value;
}); 
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const makePromise = () => {     
        return new Promise((resolve, reject) => {
           let delay = delayInput.value;
            if (result === 'fulfilled') {
                resolve(delay)                   
            } else {
                reject(delay)
            };
            result = '',
            form.reset()
        });    
    };
    
    makePromise()
        .then(value => {
                setTimeout(() => {
                    iziToast.show({
                        id: null,
                        class: 'izi-toast',
                        title: 'Ok',
                        titleColor: '#fff',
                        message: `✅ Fulfilled promise in ${value}ms`,
                        messageColor: '#fff',
                        backgroundColor: '#59A10D',
                        theme: 'light',
                        color: '#fff',
                        zindex: 100,
                        layout: 1,
                        balloon: false,
                        close: false,
                        closeOnEscape: false,
                        closeOnClick: false,
                        displayMode: 0, // once, replace
                        position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
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
                    })
                }, value)
            })
        .catch(value => {
            setTimeout(() => {
                 iziToast.show({
                    title: '',
                    id: null,
                    class: 'izi-toast',
                    titleColor: '#fff',
                    message: `❌ Rejected promise in ${value}ms`,
                    messageColor: '#fff',
                    backgroundColor: '#B51B1B',
                    theme: 'light',
                    color: '#fff',
                    zindex: 100,
                    layout: 1,
                    balloon: false,
                    close: false,
                    closeOnEscape: false,
                    closeOnClick: false,
                    displayMode: 0, // once, replace
                    position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
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
                })
            }, value)
        });
})
