//Implemente um método que crie um novo array baseado nos valores passados.
//resultado: ['a', 'a', 'a']

const create = (number, letter) => {

    const array = new Array(number);
   
    for (let index = 0; index < array.length; index++) {
        array[index] = letter;
    }
 
    return array;
}

console.log(create(3, 'a'));