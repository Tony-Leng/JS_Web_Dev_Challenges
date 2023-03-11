const buttons = document.querySelectorAll('button');

const randColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

// const colorize = () => {
//   document.button.style.backgroundColor = randColor;
//   document.button.style.text = randColor;
// }

for (let button of buttons) {
  button.addEventListener('click', () => {
    button.style.backgroundColor = randColor();
    button.style.text = randColor();
    console.log("clicked!");
    console.log(randColor());
  });
}
