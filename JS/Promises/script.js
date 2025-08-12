// Exemplo da lógica e dinâmica de uma Promise;
function sumNumbers() {
    let result = 5 + 5;

    if (result == 10) {
        sucessCallback();
    } else {
        errorCallback();
    }
}

function sucessCallback() {
    console.log('Yeah! Result is number 10!');
}

function errorCallback() {
    console.log('Oh no! Result is not number 10!');
}

sumNumbers();

// Exemplo usando Promise;
let p = new Promise((resolve, reject) => {
    let a = 5 + 5;
    if (a == 10) {
        resolve('Success!');
    } else {
        reject('Failed');
    }
})

p.then((message) => {
    console.log('This is in the then ' + message);
})
.catch((err) => {
    console.log('This is the catch ' + err);
})

// Outro exemplo de uma Promise;
let betterDeveloper = 'Neto';

function whoIsBetterCallback() {
    
    return new Promise((resolve, reject) => {
        if (betterDeveloper == 'Neto') {
            resolve({
                name: betterDeveloper,
                message: 'CDFs are the best!'
            })
        } else {
            reject({
                name: 'This is wrong',
                message: betterDeveloper + '? Really ?'
            })
        }
    })
}

whoIsBetterCallback()
    .then((result) => {
        console.log(result.name + '? Yeah! ' + result.message)
    }).catch((error) => {
        console.log(error.name + ' ' + error.message);
    })