const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let button = document.getElementById('btn');
let colorText = document.querySelector('.colorPicker');
let main = document.getElementById('main');

button.addEventListener('click', function () {
    let hex = '#'
    for (let i=0;i<6;i++) {
        hex += digits[randomPicker()]
    }
    console.log (hex)
    colorText.style.color = hex;
    main.style.backgroundColor = hex;
    colorText.innerText = hex
})

function randomPicker () {
    return Math.floor(Math.random() * digits.length);
}