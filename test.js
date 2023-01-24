const $counter = document.querySelector('.count');
const max = 98;

function counter($counter, max) {
    let now = max;

    const handle = setInterval(() => {
        $counter.innerHTML = Math.ceil(max-now);

        if(now < 1) {
            clearInterval(handle);
        }
        const step = now / 10;
        now -= step;
    }, 50)
}