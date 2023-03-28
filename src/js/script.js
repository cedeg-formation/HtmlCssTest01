const imageText = document.getElementById("imageText");
const textVanilla = imageText.innerText;
let count = 0;
document.addEventListener(
    "click",
    (ev) => {
        imageText.style.transform = `translateY(${ev.clientY - 25}px)`;
        imageText.style.transform += `translateX(${ev.clientX - 25}px)`;

    },
    false
);

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const changeText = (element) => {
    if (count > 5) {
        element.innerText = textVanilla;
        count = 0;
        return
    }
    const randomInt = getRandomInt(element.innerText.length)
    element.innerText = element.innerText.replace(element.innerText[randomInt], '00');
    count++;
}
setInterval(changeText, 800, imageText);

// Modal

let modalButton = document.getElementsByClassName("modalButton");
modalButton = Array.from(modalButton)

modalButton.forEach(e => e.addEventListener('click', function(e) {
document.getElementById('modal').classList.toggle('hidden')
    document.getElementById('body').classList.toggle('modalOpen')
}))




