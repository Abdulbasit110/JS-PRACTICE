// TODO ch 43 - 48

//! 1
const display = () => {
  const button = document.getElementById("btn");
  button.innerHTML = `Clicked!!`;
  alert(`button clicked`);
};

//! 2
const nameAlert = (i) => {
  const images = document.querySelectorAll("img");
  alert(`It is ${images[i].alt} mobile`);
};
// images.forEach((image) => {
//   image.addEventListener("click", nameAlert);
// });

//! 3
const deleteRow = (id) => {
  const row = document.getElementById(id);
  row.style.display = `none`;
};

//! 5
const adder = () => {
  const input = document.getElementById("counter");
  let count = +input.value;
  input.value = ++count;
};
const subtracter = () => {
  const input = document.getElementById("counter");
  let count = +input.value;
  input.value = --count;
};
