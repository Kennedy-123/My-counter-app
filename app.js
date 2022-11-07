let count = 0;

let stop;

const runBtn2 = document.querySelector('#runBtn2');

const decreaseBtn = document.querySelector('#decreaseBtn');

const resetBtn = document.querySelector('#resetBtn');

const increaseBtn = document.querySelector('#increaseBtn');

const countlabel = document.querySelector('#countlabel');

const runBtn = document.querySelector('#runBtn');

const pauseBtn = document.querySelector('pauseBtn');

decreaseBtn.addEventListener('click', () =>{
    count--
    countlabel.innerHTML = count
})

increaseBtn.addEventListener('click', () =>{
    count++
    countlabel.textContent = count
})

resetBtn.addEventListener('click', () =>{
    count = 0
    countlabel.innerHTML = count
    clearInterval(stop)
})

runBtn.addEventListener('click',() =>{
    stop = setInterval(() =>{
        count++
        countlabel.textContent = count
    },100)
})
runBtn2.addEventListener('click',() =>{
    stop = setInterval(() =>{
        count--
        countlabel.textContent = count
    },100)
})

pauseBtn.addEventListener('click', () =>{
    clearInterval(stop);
})