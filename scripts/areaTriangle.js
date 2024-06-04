let base = document.querySelector('#base');
let height= document.querySelector('#height');
let btn = document.querySelector('#areaCon');
let areaSpan = document.querySelector('#TriSpan')

btn.addEventListener('click', () => {
    let baseValue = parseFloat(base.value);
    let heightValue = parseFloat(height.value);
    if (!isNaN(baseValue) &&!isNaN(heightValue)) {
        let area = (0.5 * baseValue * heightValue);
        areaSpan.innerHTML = area.toFixed(2) + 'cm²';
    } else {
        areaSpan.innerHTML = "Invalid input";
    }
});