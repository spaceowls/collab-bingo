const geraCartela = document.querySelector(".gera-cartela");
const b = document.querySelectorAll(".numbers-randomb");
const i = document.querySelectorAll(".numbers-randomi");
const n = document.querySelectorAll(".numbers-randomn");
const g = document.querySelectorAll(".numbers-randomg");
const o = document.querySelectorAll(".numbers-randomo");

let cartela = [];

let numerosDoBingo = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
];

let numerosB = [];
let numerosI = [];
let numerosN = [];
let numerosG = [];
let numerosO = [];

numerosDoBingo.forEach((num) => {
  while (num < 16) {
    let numO = num;
    numO = num >= 10 ? num : `0${num}`
    numerosB.push(numO);
    break;
  }
});

numerosDoBingo.forEach((num) => {
  while (num >= 16 && num <= 30) {
    numerosI.push(num);
    break;
  }
});

numerosDoBingo.forEach((num) => {
  while (num > 30 && num <= 45) {
    numerosN.push(num);
    break;
  }
});

numerosDoBingo.forEach((num) => {
  while (num >= 46 && num <= 60) {
    numerosG.push(num);
    break;
  }
});

numerosDoBingo.forEach((num) => {
  while (num >= 61 && num <= 75) {
    numerosO.push(num);
    break;
  }
});

function geraTabela() {
  b.forEach((valor) => {
    let ranNums = [];
    let i = numerosB.length;
    let j = 0;

    j = Math.floor(Math.random() * i);
    ranNums.push(numerosB[j]);

    cartela.push(numerosB[j]);
    valor.innerHTML = numerosB.splice(j, 1);
  });

  i.forEach((valor) => {
    let ranNums = [];
    let i = numerosI.length;
    let j = 0;

    j = Math.floor(Math.random() * i);
    ranNums.push(numerosI[j]);

    cartela.push(numerosI[j]);
    valor.innerHTML = numerosI.splice(j, 1);
  });

  n.forEach((valor) => {
    let ranNums = [];
    let i = numerosN.length;
    let j = 0;

    j = Math.floor(Math.random() * i);
    ranNums.push(numerosN[j]);

    cartela.push(numerosN[j]);
    valor.innerHTML = numerosN.splice(j, 1);
  });

  g.forEach((valor) => {
    let ranNums = [];
    let i = numerosG.length;
    let j = 0;

    j = Math.floor(Math.random() * i);
    ranNums.push(numerosG[j]);

    cartela.push(numerosG[j]);
    valor.innerHTML = numerosG.splice(j, 1);
  });

  o.forEach((valor) => {
    let ranNums = [];
    let i = numerosO.length;
    let j = 0;

    j = Math.floor(Math.random() * i);
    ranNums.push(numerosO[j]);

    cartela.push(numerosO[j]);
    valor.innerHTML = numerosO.splice(j, 1);
  });
  console.log(cartela.toString());
}

geraCartela.addEventListener("click", () => {
  geraTabela();
});
