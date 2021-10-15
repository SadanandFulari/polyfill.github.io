

let word = 'SadanandFulari';

document.write(word.split('')); 


/******************** Reverse *********************/
document.write([1, 2, 3].reverse());
document.write(['a','b'].reverse());


/*******************Split , reverse and join example***************************/
let str = 'Learning form Geekster'
let newStr = str.split('');
console.log(newStr.reverse().join(''));

/**************** With a loop **********************/
let newStr2 = ''
for(let i = str.length -1; i>=0; i--){
    newStr2 += str[i];
}
console.log(newStr2);