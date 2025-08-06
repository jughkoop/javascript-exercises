const sumAll = function(a, b) {
    if((typeof a !== "number" || a < 0) || (typeof b !== "number" || b < 0)) return "ERROR";
    else if(!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

    if(a > b) {
        const temp = a;
        a = b;
        b = temp;
    }
    let sum = 0;
    for(let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
