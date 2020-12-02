//Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
//resultado: [1, 2, 3, 4, 5]

const desaninhar = (array) => {

    const vetor = new Array();

    const func = (vec) => {
        
        for (let j = 0; j < vec.length; j++) {
            if(!Array.isArray(vec[j])){
                vetor.push(vec[j]);
            }
            else {
                func(vec[j]);   
            }   
        }
    } 

    func(array);
    return vetor;

}

console.log(desaninhar([1, 2, [3], [4, 5]]));