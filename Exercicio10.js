//Implemente um método que encontre os valores comuns entre dois arrays.
//resultado: [8]

const comum = (array, array1) => {

    const result = new Array();
   
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array1.length; j++) {
            
            if(array[i] == array1[j])
                result[0] = array[i];

        }
        
    }
 
    return result;
}

console.log(comum([6, 8], [8, 9]));