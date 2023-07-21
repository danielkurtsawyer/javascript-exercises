const removeFromArray = function(fullArray) {
    let itemsToRemove = Array.from(arguments);
    itemsToRemove.shift();

    let newArray = [];

    for(let fullArrayItem of fullArray){
        if(!itemsToRemove.includes(fullArrayItem)) newArray.push(fullArrayItem);
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
