import './styles.css';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyRef = document.querySelector('body');
const startRef = document.querySelector('[data-action="start"]');
const stopRef = document.querySelector('[data-action="stop"]');
let intervalId = intervalId;

const changeBgColor = () => {
  const quantityOfColors = colors.length - 1;
  const selectedColor = randomIntegerFromInterval(0, quantityOfColors);
  bodyRef.style.backgroundColor = colors[selectedColor];
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const handelStart = () => {
  intervalId = setInterval(changeBgColor, 1000);
  startRef.removeEventListener('click', handelStart);
  startRef.setAttribute('disabled', null);
  stopRef.addEventListener('click', handelStop);
};
const handelStop = () => {
  if (!intervalId) return;
  clearInterval(intervalId);
  stopRef.removeEventListener('click', handelStop);
  startRef.removeAttribute('disabled');
  startRef.addEventListener('click', handelStart);
};

startRef.addEventListener('click', handelStart);
