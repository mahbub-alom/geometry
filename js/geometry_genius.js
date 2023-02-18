let serial = 0;

// triangle box DOM is here 
document.getElementById('triangle-btn').addEventListener('click', function(){

    // get the data 
    const takeTriangle = document.getElementById('triangle-text').innerText;
    const triangleFirstString = document.getElementById('triangle-first-input');
    const triangleFirst = triangleFirstString.value;
    const triangleSecondString = document.getElementById('triangle-second-input');
    const triangleSecond = triangleSecondString.value;

    triangleFirstString.value = '';
    triangleSecondString.value = '';
    // multiply
    const triangleTotalValueDecimal = 0.5 * parseFloat(triangleFirst) * parseFloat(triangleSecond);
    const triangleTotalValue = triangleTotalValueDecimal.toFixed(2);
    
    // triangle input validation is here 
    if( triangleFirst < 0 ||  triangleSecond < 0){
        alert('please input a positive number');
    }
    else if(isNaN(triangleTotalValue)){
        alert('please input a number');
    }
    else{
        serial += 1;
        displayData(takeTriangle, triangleTotalValue);
    }
})

// random color parameter callback 
randomColor('triangle-random-bg-color');
randomColor('rectangle-random-bg-color');
randomColor('parallelogram-random-bg-color');
randomColor('rhombus-random-bg-color');
randomColor('pentagon-random-bg-color');
randomColor('ellipse-random-bg-color');


// rectangle box DOM is here 
document.getElementById('rectangle-btn').addEventListener('click', function(){
    // get the data 
    const takeRectangle = document.getElementById('rectangle-text').innerText;
    const rectangleFirstString = document.getElementById('rectangle-first-input');
    const rectangleFirst = rectangleFirstString.value;
    const rectangleSecondString = document.getElementById('rectangle-second-input');
    const rectangleSecond = rectangleSecondString.value;

    rectangleFirstString.value = ''; 
    rectangleSecondString.value = '';
    // multiply 
    const rectangleTotalValueDecimal = parseFloat(rectangleFirst) * parseFloat(rectangleSecond);

    const rectangleTotalValue = rectangleTotalValueDecimal.toFixed(2);

    // rectangle input validation is here 
    if( rectangleFirst < 0 ||  rectangleSecond < 0){
        alert('please input a positive number');
    }
    else if(isNaN(rectangleTotalValue)){
        alert('please input a number');
    }
    else{
        serial += 1;
        displayData(takeRectangle, rectangleTotalValue);
    }


})

// parallelogram box DOM is here 
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    serial += 1;
    // get the data 
    const takePara = document.getElementById('parallelogram-text').innerText;
    const paraFirst = document.getElementById('parallelogram-first-input').innerText;
    const paraSecond = document.getElementById('parallelogram-second-input').innerText;
    const paraTotalValueDecimal = parseFloat(paraFirst) * parseFloat(paraSecond);
    const paraTotalValue = paraTotalValueDecimal.toFixed(2);

    displayData(takePara, paraTotalValue);
})

// rhombus box DOM is here 
document.getElementById('rhombus-btn').addEventListener('click', function(){
    serial += 1;
    // get the data 
    const takeRhombus = document.getElementById('rhombus-text').innerText;
    const totalResultDecimal = rhombusAndPentagon('rhombus-first-input', 'rhombus-second-input')
    const totalResult = totalResultDecimal.toFixed(2);
    displayData(takeRhombus, totalResult);
})
// pentagon box DOM is here 
document.getElementById('pentagon-btn').addEventListener('click', function(){
    serial += 1;
    // get the data 
    const takePentagon = document.getElementById('pentagon-text').innerText;
    const totalResultDecimal = rhombusAndPentagon('pentagon-first-input', 'pentagon-second-input');
    const totalResult = totalResultDecimal.toFixed(2);
    displayData(takePentagon, totalResult);
})

// ellipse box DOM is here 
document.getElementById('ellipse-btn').addEventListener('click', function(){
    serial += 1;
    // get the data 
    const takeEllipse = document.getElementById('ellipse-text').innerText;
    const ellipseFirst = document.getElementById('ellipse-first-input').innerText;
    const ellipseSecond = document.getElementById('ellipse-second-input').innerText;
    // multiply 
    const ellipseTotalValueDecimal = 3.14 * parseFloat(ellipseFirst) * parseFloat(ellipseSecond);
    const ellipseTotalValue = ellipseTotalValueDecimal.toFixed(2);
    displayData(takeEllipse, ellipseTotalValue);
})

// // randomly background color change function is here 
function randomColor (randomId){
    const divElem = document.getElementById(randomId);
function randomColor() {
    return Math.floor(Math.random() * 255);
}
divElem.addEventListener('mouseover', () => {
    divElem.style.backgroundColor = 'rgba(' 
        + randomColor() + ',' + randomColor() 
        + ',' + randomColor() + '\)';
    })
divElem.addEventListener('mouseout', () => {
    divElem.style.backgroundColor = 'white';
    })
}
