const A = 3;
const B = 8;

const calc = (numA, numB, callback) => {
    return callback(numA, numB)
}

const add = (numA, numB) => {
    return numA + numB;
}
const multi = (numA, numB) => {
    return numA * numB;
}

console.log(calc(A, B, add))