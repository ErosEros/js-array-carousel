// layout di immagini che si alternano

// 2 bottoni che permetteno di scorrere le immagini avanti e dietro
const beforeButton = document.getElementById('before');

const afterButton = document.getElementById('after');

afterButton.addEventListener('click',
function() {

    const activePick = document.querySelector('.pick.active');
    const nextElement = activePick.nextElementSibling;
    console.log(nextElement)

    if (nextElement) {
        activePick.classList.remove('active');
        nextElement.classList.add('active')
    }
}
)