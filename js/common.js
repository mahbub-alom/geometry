function displayData(name, secondValue,){
    const container = document.getElementById('table-container');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}.</td>
    <td>${name}</td>
    <td>${secondValue}cm<sup>2</sup></td>
    <td>
    <button class="bg-sky-600 text-white px-2 py-2 rounded-md">Convert to m<sup>2</sup></button>
    </td>
    `;
    container.appendChild(tr);
}
function rhombusAndPentagon(firstInput, secondInput){
    // const takePentagon = document.getElementById(text).innerText;
    const firstValue = document.getElementById(firstInput).innerText;
    const secondValue = document.getElementById(secondInput).innerText;
    // multiply 
    const pentagonTotalValue = 0.5 * parseFloat(firstValue) * parseFloat(secondValue);
    return pentagonTotalValue;
}