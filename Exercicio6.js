//Implemente um método que retorne um array, sem valores duplicados.
//retornar: [1,2,3,4,5,7]

const noDouble = (array) => {

    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] == array[j]){
                array.splice(j, 1)
            }                   
        }
    }
   
    return array;
}

console.log(noDouble([1,2,3,3,2,4,5,4,7,3,]));