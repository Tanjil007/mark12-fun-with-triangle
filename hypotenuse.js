const sides = document.querySelectorAll('.side-number');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const outputEl = document.querySelector('#output');


function calculateSumOfSquare(a, b) {
    const sumOfSquare = a**2 + b**2;
    return sumOfSquare;
}

function calculateHypotenuse() {
        const sumOfSquare = calculateSumOfSquare(Number(sides[0].value), Number(sides[1].value));
        const lengthOfHypotenuse = Math.sqrt(sumOfSquare);
        if(lengthOfHypotenuse) {
            outputEl.innerText = 'The length of hypotenuse is '+ lengthOfHypotenuse;
        } else {
            outputEl.innerText = 'Please enter both the field';
        }
         
}

hypotenuseBtn.addEventListener('click', calculateHypotenuse)
