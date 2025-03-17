let value1 = document.getElementById("value-1").value;
let value2 = document.getElementById("value-2").value;
let soma = (value1 + value2);

function soma() {
    document.body = '';
    document.writeln(`<h1>${value1} + ${value2} = ${soma}</h1>`);
}