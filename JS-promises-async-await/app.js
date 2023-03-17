const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  })
}

async function colorChange() {
  await delayedColorChange('red', 2000);
  await delayedColorChange('orange', 2000);
  await delayedColorChange('yellow', 2000);
  await delayedColorChange('green', 2000);
  await delayedColorChange('indigo', 2000);
  await delayedColorChange('violet', 2000);
  console.log("End of rainbow!")
}

console.log("Hi, Eri!")
