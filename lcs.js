let input = [];
for (let i = 2; i < process.argv.length; i++){
    input[i - 2] = process.argv[i];
}
input.sort((a, b) => {return a.length - b.lenght});
console.log(findRep(input));


function findRep(array) {
    let repStr = '';
    let subStr = '';
    let length = 1;
    for (let i = 0; i < array[0].length;){
        subStr = array[0].substring(i, i + length);
        let j = 1;
        for (; j < array.length; j++){
            if (!array[j].includes(subStr)){
                break;
            }
        }
        if (j == array.length && subStr.length >= repStr.length){
            repStr = subStr;
            length++;
        }
        else{
            i++;
            length = 1;
        }
    }
    return repStr;
}
