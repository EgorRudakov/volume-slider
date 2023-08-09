import data from "./data.js";

//У тебя слишком длинные комментарии. Не стесняйся переносить!!!

// Добавляем обработчик события input к элементу range. Когда пользователь перемещает ползунок, функции calculateValue и updateBackground вызываются для вычисления значения value и обновления свойства background элемента range
data.range.addEventListener("input", () => {
	const result = calculateValue(data.range);
	updateBackground(data.range, result);
	rangeValueUPData(data.range.value);
	outputUpData(data.range.value);
});

// Функция calculateValue вычисляет отношение текущего значения ползунка к его максимальному и минимальному значениям
function calculateValue(range) {
	return (
		(range.value - range.min) / (range.max - range.min) * 100);
}


// Функция updateBackground обновляет свойство background элемента range, используя линейный градиент, который меняет цвет от #ffa501 до transparent в зависимости от значения value
function updateBackground(range, value) {
	range.style.background = `linear-gradient(to right, #ffa501 ${value}%, transparent ${value}%)`;
}


//Функции обновляют значение и положение элемента на основе значения ползунка
function rangeValueUPData(vol) {
 data.rangeValue.innerHTML = vol;
}

function outputUpData(vol) {
	data.output.value = vol;
	let leftValue = vol - 20;

	if (vol > 9) leftValue = vol - 30;
	if (vol > 99) leftValue = vol - 40;
	if (vol > 240) leftValue = vol - 45;
	if (vol > 430) leftValue = vol - 50;
	if (vol > 470) leftValue = vol - 55;

	data.output.style.left = leftValue + 'px';
}
