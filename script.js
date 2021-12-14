// Scrivere una funzione (e lanciarla) che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

function generateArray(min, max, ...myNumbers) {
    const include = myNumbers.filter((element, index) => {

        return index > min && index < max
    })
    return include
}

const minNum = Math.floor(Math.random() * 2);
const maxNum = Math.floor(Math.random() * 10);
console.log(minNum, maxNum)
console.log(`Prendiamo i numeri dell'array compresi tra le posizioni ${minNum} e ${maxNum}`)
console.log(generateArray(minNum,maxNum,1,2,3,4,5,6,7,8,9,0))