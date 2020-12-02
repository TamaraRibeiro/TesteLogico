//Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. 
//resultado: [4,2]

const remove = (array, num1, num2) => {

    const result = new Array();

    for (let i = 0; i < array.length; i++) {
        if(array[i] != num1 && array[i] != num2){
                result.push(array[i]);
        }        
    }
    
    return result;
}

console.log(remove([5,4,3,2,5], 5, 3));