let ipt = document.querySelector("input");
let btn = document.querySelector("button");
let elem = document.querySelector("p");

btn.addEventListener("click", () => {
  if (isNaN(ipt.value)) {
    elem.innerText = ipt.value;
  } else {
    elem.innerText = ipt.value * 3;
  }
});

// let ipt = document.querySelector('input');
// let elem = document.querySelector('p');
