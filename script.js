// Scrivere una funzione (e lanciarla) che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

// function generateArray(min, max, ...myNumbers) {
//     const include = myNumbers.filter((element) => {
//         return element > min && element < max
//     })
//     return include
// }

// const minNum = Math.floor(Math.random() * 2);
// const maxNum = Math.floor(Math.random() * 10);
// const numbers = [1,2,3,4,5,6,7,8,9,0]

// const minPosition = minNum + 1;
// const maxPosition = maxNum - 1;
// console.log(numbers)
// console.log(`Prendiamo i numeri dell'array compresi tra le posizioni ${minPosition} e ${maxPosition}`)
// console.log(generateArray(minNum,maxNum, ...numbers))

function generateArray(min, max, ...myNumbers) {
    const include = myNumbers.filter((element, index) => {
        return index > min && index < max
    })
    return include
}

const minNum = Math.floor(Math.random() * 2);
const maxNum = Math.floor(Math.random() * 10);
const numbers = [1,2,3,4,5,6,7,8,9,0]
const strings = [`gelo`, `freddo`, `caldo`, `primavera`, `libro`, `quaderno`, `guida`, `borotalco`, `tomahawk`, `computer`, `pollo`]

const minPosition = minNum + 1;
const maxPosition = maxNum - 1;
console.log(numbers)
console.log(`Prendiamo i numeri dell'array compresi tra le posizioni ${minPosition} e ${maxPosition}`)
console.log(generateArray(minNum,maxNum, ...numbers))

console.log(strings);
console.log(`Prendiamo gli elemnti dell'array compresi tra le posizioni ${minPosition} e ${maxPosition}`)
console.log(generateArray(minNum,maxNum, ...strings))