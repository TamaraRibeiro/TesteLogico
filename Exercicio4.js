//Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
//resultado: {c:2, d:4}

const convert = (array) => {

    const result = {};

    for (let i = 0; i < array.length; i++) {
        result[array[i][0]] = array[i][1];                                   
    }  

    return result;
}

console.log(convert([["c",2],["d",4]]));