function calculateNumbers1 (a, b) {
    let squaredA = a*a;
    let squaredB = b*b;
    let addSquared = squaredA + squaredB;
    let doubleSquared = addSquared*addSquared;
    return doubleSquared;
}
console.log(calculateNumbers1(5,5));


const calculateNumbers2 = function (number1, number2){
    const squaredNumber1 = number1*number1; 
    const squaredNumber2 = number2*number2;
    const squaredNumbers = squaredNumber1 + squaredNumber2;
    const doubleSquaredNumbers = squaredNumbers*squaredNumbers;
    return doubleSquaredNumbers;
};
console.log(calculateNumbers2(5,5));

const calculateNumbers3 = (x,y) => {
    let squaredX = x*x;
    let squaredY = y*y;
    let addSquared3 = squaredX + squaredY;
    let doubleSquared3 = addSquared3*addSquared3;
    return doubleSquared3;
};

console.log(calculateNumbers3(5,5));
