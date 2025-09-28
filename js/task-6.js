function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('#controls input[type="number"]'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

function createBoxes(amount) {
  const startSize = 30;
  const step = 10;

  const frag = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const size = startSize + i * step;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    frag.appendChild(box);
  }

  destroyBoxes();
  refs.boxes.appendChild(frag);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

refs.btnCreate.addEventListener('click', () => {
  const min = Number(refs.input.min) || 1;
  const max = Number(refs.input.max) || 100;

  const amount = Number(refs.input.value.trim());

  if (!Number.isInteger(amount) || amount < min || amount > max) {
    refs.input.value = '';
    return;
  }

  createBoxes(amount);
  refs.input.value = '';
});

refs.btnDestroy.addEventListener('click', () => {
  destroyBoxes();
});
