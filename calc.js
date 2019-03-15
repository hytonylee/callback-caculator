const A = 3;
const B = 8;

let calc = (numA, numB, callback) => {
    if (typeof callback === 'function') {
        return callback(numA, numB)
    } else {
        console.log('Please provide a function');
    }
}

let add = (numA, numB) => {
    return numA + numB;
}
let multi = (numA, numB) => {
    return numA * numB;
}

console.log(calc(A, B, add))