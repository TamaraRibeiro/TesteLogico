//Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
//resultado: [1, 2]

const clear = (array) => {

    const result = new Array();
   
    for (let index = 0; index < array.length; index++) {
        
        if(array[index]){ 
            result.push(array[index]);
        }

    }
 
    return result;
}

console.log(clear([1,2, '', undefined]));