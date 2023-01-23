/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
let mostrador = document.getElementById("mostrador");
let operador = document.getElementById("operador");
let numeroAuxiliar = document.getElementById("numeroAuxiliar");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");
let b0 = document.getElementById("b0");

let bSoma = document.getElementById("bSoma");
let bSub = document.getElementById("bSub");
let bMulti = document.getElementById("bMulti");
let bBarra = document.getElementById("bBarra");
let bRaiz = document.getElementById("bRaiz");
let bQuadrado = document.getElementById("bQuadrado");
let bPotencia = document.getElementById("bPotencia");

let bPonto = document.getElementById("bPonto");
let bIgual = document.getElementById("bIgual");
let bCE = document.getElementById("bCE");

let fita = document.getElementById("fita");

function digito(valor) {
    if (mostrador.value !== "0") {
        mostrador.value = mostrador.value + valor;
    } else {
        mostrador.value = valor;
    }
}
function operacao(valor) {
    fita.innerHTML += mostrador.value + " ";
    if (operador.value !== "") {
        operador.value = valor;
    } else {
        operador.value = valor;
        numeroAuxiliar.value = mostrador.value;
        mostrador.value = 0;
    }
}
function ponto() {
    if (mostrador.value.indexOf(".") === -1) {
        mostrador.value += ".";
    }
}

function igualdade() {
    if (operador.value === "Xʸ") {
        fita.innerHTML += "^ " + mostrador.value;
    } else {
        fita.innerHTML += operador.value + " " + mostrador.value;
    }

    if (operador.value === "-") {
        mostrador.value = numeroAuxiliar.value - mostrador.value;
    }
    if (operador.value === "+") {
        mostrador.value = parseFloat(numeroAuxiliar.value) + parseFloat(mostrador.value);
    }
    if (operador.value === "x") {
        mostrador.value = parseFloat(numeroAuxiliar.value) * parseFloat(mostrador.value);
    }
    if (operador.value === "/") {
        mostrador.value = parseFloat(numeroAuxiliar.value) / parseFloat(mostrador.value);
    }
    if (operador.value === "Xʸ") {
        mostrador.value = parseFloat(numeroAuxiliar.value) ** parseFloat(mostrador.value);
    }

    operador.value = "";
    numeroAuxiliar.value = 0;
    fita.innerHTML += " = " + mostrador.value + "\n\n";
}

b1.addEventListener("click", function () {
    digito(this.value);
});
b2.addEventListener("click", function () {
    digito(this.value);
});
b3.addEventListener("click", function () {
    digito(this.value);
});
b4.addEventListener("click", function () {
    digito(this.value);
});
b5.addEventListener("click", function () {
    digito(this.value);
});
b6.addEventListener("click", function () {
    digito(this.value);
});
b7.addEventListener("click", function () {
    digito(this.value);
});
b8.addEventListener("click", function () {
    digito(this.value);
});
b9.addEventListener("click", function () {
    digito(this.value);
});
b0.addEventListener("click", function () {
    digito(this.value);
});
bSoma.addEventListener("click", function () {
    operacao(this.value);
});
bSub.addEventListener("click", function () {
    operacao(this.value);
});
bMulti.addEventListener("click", function () {
    operacao(this.value);
});
bBarra.addEventListener("click", function () {
    operacao(this.value);
});
bRaiz.addEventListener("click", function () {
    fita.innerHTML += "&Sqrt;" + mostrador.value + " = ";
    mostrador.value = Math.sqrt(mostrador.value);
    operador.value = "";
    numeroAuxiliar.value = "";
    fita.innerHTML += mostrador.value + "\n\n";
});
bQuadrado.addEventListener("click", function () {
    fita.innerHTML += mostrador.value + "²" + " = ";
    mostrador.value = Math.pow(mostrador.value, 2);
    operador.value = "";
    numeroAuxiliar.value = "";
    fita.innerHTML += mostrador.value + "\n\n";
});
bPotencia.addEventListener("click", function () {
    operacao(this.value);
});

bPonto.addEventListener("click", ponto);
bCE.addEventListener("click", function () {
    mostrador.value = 0;
    numeroAuxiliar.value = 0;
    operador.value = "";
    fita.innerHTML += "\n";
});
bIgual.addEventListener("click", igualdade);