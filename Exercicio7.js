//Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
//resultado: true

const compare = (array1, array2) => {

    if(array1.length != array2.length)
        return false;

    for (let index = 0; index < array1.length; index++) {
        if (array1[index] != array2[index]){
            return false;
        }           
    }
    return true;
}

console.log(compare([1,2,3,4],[1,2,3,4]));