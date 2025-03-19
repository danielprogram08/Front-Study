function soma() {
    let val1 = document.getElementById("value-1").value;
    let value1 = parseInt(val1);
    let val2 = document.getElementById("value-2").value;
    let value2 = parseInt(val2);

    let soma = (value1 + value2);
    document.body.innerHTML = `
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            background: black;
            height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        section {
            background: rgb(158, 111, 158);
            border-radius: 10px;
            height: 250px;
            width: 250px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 15px;
        }

        input {
            height: 10%;
            width: 80%;
            margin: 5px;
            border-radius: 5px;
            border: none;
            padding-left: 10px;
        }

        label {
            color: white;
            font-weight: bold;
        }

        button {
            background: rgb(0, 217, 255);
            padding: 10px;
            border: none;
            border-radius: 10px;
            font-weight: bold;
            color: black;
            transition: all 0.3s linear;
        }

        button:hover {
            cursor: pointer;
            background-color: blue;
            color: white;
        }

    </style>

    <section id="main">
        <label>Digite o primeiro numero: </label>
            <input id="value-1" type="text" placeholder="numero:">
        <label>Digite o segundo numero: </label>
            <input id="value-2" type="text" placeholder="numero:">
        <button onclick="soma()">Calcular</button>
        <p>${value1} + ${value2} = ${soma}</p>
    </section>
    `;
}