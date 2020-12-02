//Implemente um método que inverta um array, não utilize métodos nativos do array.
//resultado: [4, 3, 2, 1]

const invert = (array) => {

    const result = new Array();
   
    for (let index = 0; index < array.length; index++) {
        
        result[index] = array[array.length-1-index];
        
    }
 
    return result;
}

console.log(invert([1, 2, 3, 4]));