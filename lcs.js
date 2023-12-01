let array = process.argv;
let repStr = '';
let subStr = '';
let length = 1;
for (let i = 0; i < array[2].length;){
    subStr = array[2].substring(i, i + length);
    let j = 3;
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
console.log(repStr);