/*Реализовать калькулятор, в котором есть слайдер (`input type=”range”`) и поле ввода (`input type=”number”`).
Изменяя состояние `range` меняется состояние поля ввода `number`. И наоборот.
Реализовать блок-диаграмму, который в пикселях будет отображать значение range.
Например - range выбрали число 83, высота блока-диаграммы будет 83 пикселя.
Красный блок - количество комиссии. Комиссия вычисляется по формуле:
    (range < 20) -> 2%

    (20 - 50)  -> 4%

    (50 - 75)  -> 6%

    (75 - 100)  -> 8%
Красный блок отображает количество комиссии. Например Значение выбора 100, комиссия будет 8%. Результирующая сумма: 108. Высота красного блока - 8px  */


let sliderInput = document.getElementById("slider");
let numberInput = document.getElementById("number");

let divGreen = document.querySelector('.green');
let divRed = document.querySelector('.red');

let valueSlider, valueNumber;

sliderInput.addEventListener("click" , () => {
  valueSlider = sliderInput.value;
  numberInput.value = sliderInput.value;
  valueNumber = valueSlider;
  return growColor(valueSlider);
});

numberInput.addEventListener("click", () => {
  valueNumber = numberInput.value;
  sliderInput.value = numberInput.value;
  valueSlider = valueNumber;
  return growColor(valueSlider);
})

function growColor(valueSlider) {
  
  divGreen.style.height = `${valueSlider}px`;

  if (valueSlider <= 20) {
    divRed.style.height = '2px';
  } else if (valueSlider >= 20 && valueSlider <= 50){
    divRed.style.height = '4px';
  } else if (valueSlider > 50 && valueSlider <= 75){
    divRed.style.height = '6px';
  } else if (valueSlider > 75 && valueSlider <= 100){
    divRed.style.height = '8px';
  }

}