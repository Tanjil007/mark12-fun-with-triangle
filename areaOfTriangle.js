const base = document.querySelector("#base");
const height = document.querySelector("#height");

const btnArea = document.getElementById("area-btn");

const outputEl = document.getElementById('output')

function calculateArea(b, h) {
    const area = 1/2*( b * h );
    return area;
}


function areaOfTriangle() {
    const area = calculateArea(Number(base.value), Number(height.value));
    if(area) {
        outputEl.innerText = 'Area of triangle is '+ area + 'cm²';
    } else {
	outputEl.style.color = 'red';
        outputEl.innerText = 'Please enter both the fileds';
    }
    
}

btnArea.addEventListener('click', areaOfTriangle)