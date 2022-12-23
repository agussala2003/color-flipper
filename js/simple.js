const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let button = document.getElementById('btn');
let colorText = document.querySelector('.colorPicker');
let main = document.getElementById('main');

button.addEventListener('click', function () {
    let color = colors[randomPicker()]
    console.log (color)
    colorText.style.color = color;
    main.style.backgroundColor = color;
    colorText.innerText = color
})

function randomPicker () {
    return Math.floor(Math.random() * colors.length);
}