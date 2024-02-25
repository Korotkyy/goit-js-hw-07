
const boxes = document.getElementById('boxes');
const inputNumber = document.querySelector('input[type=number]');
const btnDataCreate = document.querySelector('button[data-create]');
const btnDataDestroy = document.querySelector('button[data-destroy]');

const createBoxes = (amount) => {
  let divArrayBosex = [];
  let sizeDefault = 30;
  for (let i = 0; i < amount; i += 1) {
    sizeDefault += 10;
    const divElement = document.createElement('div');
    divElement.style.height = `${sizeDefault}px`;
    divElement.style.width = `${sizeDefault}px`;
    divElement.style.marginRight = '30px';
    divElement.style.marginBottom = '30px';
    divElement.style.backgroundColor = getRandomHexColor();
    divArrayBosex.push(divElement);
  }
  return boxes.append(...divArrayBosex);
};

const destroyBoxes = () => {
  inputNumber.value = '';
  boxes.innerHTML = '';
};

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

btnDataCreate.addEventListener('click', () => {
  const inputNumberValue = Number(inputNumber.value.trim());
  if (
    inputNumberValue > Number(inputNumber.max) ||
    inputNumberValue < Number(inputNumber.min)
  ) {
    alert('Please enter number from 1 to 100');
  } else {
    createBoxes(inputNumberValue);
  }
});

btnDataDestroy.addEventListener('click', destroyBoxes);
