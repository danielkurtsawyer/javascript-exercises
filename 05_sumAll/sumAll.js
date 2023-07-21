const sumAll = function(num1, num2) {
    let sum = 0;
    let start, end;

    if(typeof(num1) !== 'number' || typeof(num2) !== 'number' || num1 < 0 || num2 < 0) return 'ERROR';

    if(num1 <= num2){
       start = num1;
       end = num2;
    } else {
        start = num2;
        end = num1;
    }

    for(start; start <=end; start++){
        sum += start;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
