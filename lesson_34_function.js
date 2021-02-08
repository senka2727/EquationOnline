"use strict";
let button = document.querySelector("button");
let x_1;
let x_2;
let D;
let a;
let b;
let c;
let answer = document.querySelector(".answer");
let theme = document.querySelector(".theme");
let switcher = document.querySelector(".switcher input");
let body = document.querySelector(".calc");
switcher.onclick = function(){
    // if(body.classList.contains("darktheme")){
    //     body.classList.remove("darktheme");
    // }else {
    //     body.classList.add("darktheme");       
    // }
    document.body.classList.toggle("darktheme");
};
function Discriminant(a, b, c) {
    let str = "<p>";
    str += "D = b * b - 4 * a * c = ";
    if (b < 0) {
        str += `(${b}) * (${b}) `;
    } else {
        str += `${b} * ${b} `;
    }
    if (a < 0) {
        str += `- 4 * (${a}) `;
    } else {
        str += `- 4 * ${a} `;
    }
    if (c < 0) {
        str += `* (${c}) `;
    } else {
        str += `* ${c} `;
    }
    D = b * b - 4 * a * c;
    str += `= ${D}</p>`;
    if (D < 0) {
        str += ("<p>Квадратное уравнение не имеет решений</p>");
    } else if (D == 0) {
        x_1 = (-b) / (a * 2);
        str += (`<p>Квадратное уравнение имеет единственное решение: x = ${x_1}</p>`);
    } else {
        x_1 = (-b + Math.sqrt(D)) / (a * 2);
        x_2 = (-b - Math.sqrt(D)) / (a * 2);
        str += (`<p>Квадратное уравнение имеет два решения:</p> <p> x<sub>1</sub> = ${x_1}</p> <p>x<sub>2</sub> = ${x_2}</p>`);
    }
    return str;
}

function kvadratnoeYravnenieWithoutC(a, b) {
    let str = "<p>x(";
    let yrav = "";
    let x = 0;
    if (a < 0) {
        yrav += "-";
    }
    // a = Math.abs(a);
    if ((Math.abs(a) != 1)) {
        yrav += `${Math.abs(a)}x `;
    }
    if ((a == 1) || (a == -1)) {
        yrav += "x ";
    }
    if (b < 0) {
        yrav += `- ${Math.abs(b)}`;
    } else {
        yrav += `+ ${b}`;
    }
    str += `${yrav}) = 0</p><p>x = 0      или     ${yrav} = 0</p>`;
    str += `<p>x = `;
    b = -b;
    str += `${b} : `;
    if (a < 0) {
        str += `(${a})`;
    } else {
        str += `${a}`;
    }
    str += `</p>`;
    x = a / b;
    str += `<p>x = ${x}</p>`;
    str += (`<p>Квадратное уравнение имеет два решения:</p> <p> x<sub>1</sub> = 0</p> <p>x<sub>2</sub> = ${x}</p>`);
    return str;
}

function koren(a, c) {
    let str = `<p>`;
    let yrav = "";
    let x = 0;
    if (a == 1) {
        str += `x<sup>2</sup> = `;
    }
    if (a == -1) {
        str += `-x<sup>2</sup> = `;
    }
    if ((a > 1) || (a < -1)) {
        str += `${a}x<sup>2</sup> = `;
    }
    if (c > 0) {
        str += `-${c}`;
        yrav = `-${c}`;
        x = -c;
    } else {
        str += `${-c}`;
        yrav = `${-c}`;
        x = -c;
    }
    str += `</p><p>x<sup>2</sup> = ${yrav} : `;
    if (a > 0) {
        str += `${a}`;
    } else {
        str += `(${a})`;
    }
    x = x / a;
    str += `</p><p>x<sup>2</sup> = ${x}</p>`;
    if (x < 0) {
        str += "<p>Квадратное уравнение не имеет решений</p>";
    } else {
        str += `<p>Квадратное уравнение имеет два решения:</p> <p> x<sub>1</sub> = ${Math.sqrt(x)}</p> <p>x<sub>2</sub> = -${Math.sqrt(x)}</p>`;
    }
    return str;
}

function defaultx(b, c) {
    let str = `<p>`;
    let yrav = "";
    if (Math.abs(b) == 1){
        if (b < 0) {
            str += `-x = `;
        }
        if (b > 0) {
            str += `x = `;
        }
    }else{
        str += `${b}x = `;
    }
    if (c > 0) {
        str += `-${c}`;
        yrav = -c;
    }
    if (c < 0) {
        str += `${-c}`;
        yrav = -c;
    }
    str += `</p><p>x = ${yrav} : `;
    if (b < 0) {
        str += `(${b})`;
    }
    if (b > 0) {
        str += `${b}`;
    }
    str += `</p>`;
    yrav = yrav / b;
    str += `<p>Уравнение имеет одно решение:</p><p>x = ${yrav}</p>`
    return str;
}

function changeStr(a, b, c) {
    let str = "<p>";
    if (a < 0) {
        str += "-";
    }
    a = Math.abs(a);
    if ((a > 0) && (a != 1)) {
        str += `${a}x<sup>2</sup>`;
    }
    if (a == 1) {
        str += "x<sup>2</sup>";
    }
    if (b < 0) {
        str += "-";
    }
    if ((a != 0) && (b > 0)) {
        str += "+";
    }
    b = Math.abs(b);
    if ((b > 0) && (b != 1)) {
        str += `${b}x`;
    }
    if (b == 1) {
        str += "x";
    }
    if (c < 0) {
        str += "-";
    }
    if (((a != 0) || (b != 0)) && (c > 0)) {
        str += "+";
    }
    c = Math.abs(c);
    if (c > 0) {
        str += `${c}`;
    }
    if ((a == 0) && (b == 0) && (c == 0)) {
        str += `${c}`;
    }
    str += "=0</p>";
    return str;
}
button.onclick = function () {
    a = document.querySelector(".equation input:nth-child(1)").value;
    b = document.querySelector(".equation input:nth-child(3)").value;
    c = document.querySelector(".equation input:nth-child(5)").value;
    console.log(a, b, c);
    console.log(answer);
    answer.innerHTML = `<p>Решение:</p>`;
    answer.innerHTML += changeStr(a, b, c);
    if ((a != 0) && (b != 0) && (c != 0)) {
        answer.innerHTML += Discriminant(a, b, c);
    }
    if ((a != 0) && (b != 0) && (c == 0)) {
        answer.innerHTML += kvadratnoeYravnenieWithoutC(a, b);
    }
    if ((a != 0) && (b == 0)) {
        answer.innerHTML += koren(a, c);
    }
    if ((a == 0) && (b != 0)) {
        answer.innerHTML += defaultx(b, c)
    }
    if ((a == 0) && (b == 0) && (c != 0)) {
        answer.innerHTML += `<p>Квадратное уравнение не имеет решений</p>`;
    }
    if ((a == 0) && (b == 0) && (c == 0)) {
        answer.innerHTML += `<p>Уравнение имеет бесконечное количество решений</p>`;
    }
};
document.querySelector("input:nth-child(1)").onkeydown = function(){
    this.style.width = `${(this.value.length + 1) * 25}px`;
}
document.querySelector("input:nth-child(3)").onkeydown = function(){
    this.style.width = `${(this.value.length + 1) * 25}px`;
}
document.querySelector("input:nth-child(5)").onkeydown = function(){
    this.style.width = `${(this.value.length + 1) * 25}px`;
}

//Сделать вывод 2 этапа решения квадратного уравнения
//ax^2 + bx = 0 
//x(ax + b) = 0   x(5x + 2) = 0  
//x1 = 0
//ax2 + b = 0   
//x2 = - b : a

//ax^2 + bx + c = 0
//1)Дискриминант(сделано а б с не равны нулю)
//2)Вынести x за скобки(а и б не равны нулю и с равно нулю)
//3)Корень(а не равно нулю б равны нулю с может и не может равно нулю)
//4)Обычное уравнение(а равно нулю б не равно нулю с по барабану)
//5)Неправильное(не имеет решения появляется когда а б равны нулю)