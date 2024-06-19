const removeFromArray = function(array, arg1, arg2, arg3, arg4) {
    const newArray=[];

    for (let i = 0; i < array.length; i++){
        if (array[i]!==arg1 && array[i]!==arg2 && array[i]!==arg3 && array[i]!==arg4){
            newArray.push(array[i])
    return newArray;
  };
}

// Do not edit below this line
module.exports = removeFromArray;
