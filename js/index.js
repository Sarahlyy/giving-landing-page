const btn = document.getElementById("donate_button")
btn.onclick = function () {
    console.log('button has been clicked')
    alert('Donate money');
}

const buttonLeft = document.getElementById('left');
buttonLeft.onclick = function () {
    document.getElementById('parent').scrollLeft -= 300;
    
};


const buttonRight = document.getElementById('right');
buttonRight.onclick = function () {
    document.getElementById('parent').scrollLeft += 300;
};






// document.addEventListener('DOMContentLoaded', (event) => {
//     const parent = document.getElementById('parent');
//     const leftButton = document.getElementById('left');
//     const rightButton = document.getElementById('right');

//     const scrollAmount = 300; // Adjust this value as needed

//     leftButton.addEventListener('click', () => {
//         parent.scrollBy({
//             left: -scrollAmount,
//             behavior: 'smooth'
//         });
//     });

//     rightButton.addEventListener('click', () => {
//         parent.scrollBy({
//             left: scrollAmount,
//             behavior: 'smooth'
//         });
//     });
// });

