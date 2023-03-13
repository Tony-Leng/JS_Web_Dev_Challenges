const form = document.querySelector("form");
const prd = document.querySelector("#product");
const qty = document.querySelector("#qty");
const list = document.querySelector("#list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const prdInput = prd.value;
  const qtyInput = qty.value;
  const newLI = document.createElement("LI");
  newLI.innerText = `${qtyInput} ${prdInput}`;
  list.append(newLI);
  prd.value = "";
  qty.value = "";
})
