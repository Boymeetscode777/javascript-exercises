const removeFromArray = function(array,argToRemove) {
    const newArray=[];

    for (let i = 0; i < array.length; i++){
        if (array[i]!==n){
            newArray.push(array[i])
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
