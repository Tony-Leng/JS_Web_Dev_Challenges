const buttons = document.querySelectorAll('button');

const randColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function colorize () {
    this.style.backgroundColor = randColor();
    this.style.color = randColor();
}

for (let button of buttons) {
  button.addEventListener('click', colorize);
}
