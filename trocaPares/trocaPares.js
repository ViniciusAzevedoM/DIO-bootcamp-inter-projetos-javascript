function subtstituPares(array){
    if(!array) return -1;
    if(!array.length) return -1;

    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Já é zero!")
        } else if(array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }

    return array;
}

let arr = [1, 3, 2, 8, 6, 7, 89, 10, 0, 5];
console.log(subtstituPares([]))