const fibonacci = function(nthMember) {
    if(nthMember < 0) return 'OOPS';
    else if (+nthMember === 0) return 0;
    else if (+nthMember === 1 || +nthMember === 2) return 1;
    else return fibonacci(+nthMember-1) + fibonacci(+nthMember-2);
};

// Do not edit below this line
module.exports = fibonacci;
