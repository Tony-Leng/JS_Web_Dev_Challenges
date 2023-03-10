const h1 = document.querySelector('h1');
const btn = document.querySelector('#btn');
const r = Math.floor(Math.random(1) * 255);
const g = Math.floor(Math.random(1) * 255);
const b = Math.floor(Math.random(1) * 255);

btn.onclick = () => {
  h1.innerText = `rgb (${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = (r, g, b);
};
