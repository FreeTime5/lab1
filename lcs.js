let array = process.argv;
array[2] = 'sdjipd';
array[3] = 'iuqojad';
let repStr = '';
let subStr = '';
let length = 1;
for (let i = 0; i < array[2].length;){
    subStr = array[2].substring(i, i + length);
    let j = 3;
    for (; j < array.length; j++){
        if (!array[j].includes(subStr)){
            i++;
            length = 1;
            break;
        }
    }
    if (j == array.length && subStr.length >= repStr.length){
        repStr = subStr;
        length++;
    }
}
console.log(repStr);