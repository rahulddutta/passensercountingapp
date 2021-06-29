let change = document.getElementById("count-el");
let count = 0;
let saveEr = document.getElementById("save-el");

function increment() {
  count += 1;
  change.innerHTML = count;
}

document.getElementById("increment-btn").addEventListener("click", increment);

function save() {
  let countsrt = count + " - ";
  saveEr.innerHTML += countsrt;
  change.innerHTML = 0;
  count = 0;
}

document.getElementById("save-btn").addEventListener("click", save);
