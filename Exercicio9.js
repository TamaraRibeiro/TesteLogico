//Implemente um método divida um array por uma quantidade passada por parâmetro.
//resultado: [[1, 2], [3, 4], [5]]

const divide = (array, number) => {

    const result = [];
    let aux = [];
    let j = 1;

    for (let i = 0; i < array.length; i++) {

        aux.push(array[i]);

        if (j == number || i == array.length - 1){
            result.push(aux);  
            j = 0;
            aux = [];
        }

        j++;     
        
    }
 
    return result;
}

console.log(divide([1, 2, 3, 4, 5], 2));