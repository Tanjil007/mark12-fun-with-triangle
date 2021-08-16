const inputs = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const outputEl = document.getElementById('output');

function calculateSumOfAngle(angle1, angle2, angle3) {
    const sumOfAngle = angle1 + angle2 + angle3;
    return sumOfAngle;
}

function isTriangle() {
    const sumOfAngle = calculateSumOfAngle(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngle === 180) {
        outputEl.innerText = "Yay! the angles form a triangle";
    }
    else {
        outputEl.innerText = "Oh oh! the angles don't form a triangle"
    }
}


isTriangleBtn.addEventListener("click", isTriangle)