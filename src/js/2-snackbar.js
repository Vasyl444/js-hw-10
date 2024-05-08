import iziToast from "izitoast";

const time = document.querySelector('input[type="number"]');
const fulfilled = document.querySelector('input[value="fulfilled"]');
const rejected = document.querySelector('input[value="rejected"]');
const form = document.querySelector('.form');
let functionTime = 0;
let result = '';

time.addEventListener('blur', () => {
    functionTime = time.value;
})
fulfilled.addEventListener('click', () => {
    result = fulfilled.value;
});

rejected.addEventListener('click', () => {
    result = rejected.value;
}); 
form.addEventListener('submit', (event) => {
    event.preventDefault();
    //time = delay.value;
    const promise = new Promise((resolve, reject) => {
        if (result === 'fulfilled') {
            const delay = functionTime;
            setTimeout(() => {
                resolve(
                    iziToast.show({
                        id: null,
                        class: 'izi-toast',
                        title: 'Ok',
                        titleColor: '#fff',
                        message: `✅ Fulfilled promise in ${delay}ms`,
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
                    })
                ),
                    result = ""
            }, functionTime);
            form.reset();
        } else {
            const delay = functionTime;
            reject(
                setTimeout(() => {
                                      iziToast.show({
                        id: null,
                        class: 'izi-toast',
                        title: '',
                        titleColor: '#fff',
                        message: `❌ Rejected promise in ${delay}ms`,
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
                    }),
                        result = ''
                }, functionTime
                )
            );
            form.reset();
        }
    })
  
        promise
            .then(value => { return value })
            .catch(error => {return error})
        .finally()
});