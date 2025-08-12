// Busca a melhor banda de Rock;
function bestRockBand(band) {
    return new Promise((resolve, reject) => {
        if (band == 'Queen') {
            resolve({
                success: true,
                bandName: band,
                msg: band + ' is the best rock band ever!'
            })
        } else {
            reject({
                success: false,
                msg: 'I\'m not so sure!'
            })
        }
    })
}

// Busca a melhor música da banda;
function bestSongBand(response) {
    return new Promise((resolve, reject) => {
        if (response.success) {
            resolve('Bohemian Rhapsody by' + response.bandName);
        } else {
            reject('Do you know Queen ?');
        }
    })
}

// Chamada das Promises usando then;
bestRockBand('Queen')
    .then(response => {
        console.log('Checking the answer...');
        return bestRockSong(response)
    })
    .then(response => {
        console.log('Finding the best song...')
        console.log(response)
    })
    .catch(err => {
        console.log(err.msg);
    })

// Usando Async e Await;
async function dothejob() {
    try {
        const bestRockBandResponse = await bestRockBand('Queen');
        console.log(bestRockBandResponse);
        const bestRockSongResponse = await bestRockSong(bestRockBandResponse);
        console.log(bestRockSongResponse);    
    } catch (error) {
        console.log(error.msg);
    }
}

dothejob();