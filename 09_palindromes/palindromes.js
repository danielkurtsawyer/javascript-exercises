const palindromes = function (string) {
    const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");

    return processedString === processedString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
