/* eslint-disable no-unused-vars */

function echo(arg) {
  const printArea = document.getElementById("main");
  const p = document.createElement("p");
  p.textContent = arg;
  printArea.appendChild(p);
} 
