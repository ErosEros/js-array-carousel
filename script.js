// layout di immagini che si alternano

// 2 bottoni che permetteno di scorrere le immagini avanti e dietro
const beforeButton = document.getElementById('before');

const afterButton = document.getElementById('after');

afterButton.addEventListener('click',
function() {

    const activePick = document.querySelector('.pick.active');
    const afterElement = activePick.nextElementSibling;
    console.log(afterElement)

    if (afterElement) {
        activePick.classList.remove('active');
        afterElement.classList.add('active')
    }
}
);

beforeButton.addEventListener('click',
function() {

    const activePick = document.querySelector('.pick.active');
    const beforeElement = activePick.previousElementSibling;
    console.log(beforeElement)

    if (beforeElement) {
        activePick.classList.remove('active');
        beforeElement.classList.add('active')
    }
}
);