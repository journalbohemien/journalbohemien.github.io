const textTitle = document.querySelector('.journal');
const strTextTitle = textTitle.textContent;
const splitTextTitle = strTextTitle.split("");
textTitle.textContent = "";
for (let i = 0; i < splitTextTitle.length; i++) {
    textTitle.innerHTML += "<span>" + splitTextTitle[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 166);

function onTick() {
    const span = textTitle.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if (char === splitTextTitle.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}