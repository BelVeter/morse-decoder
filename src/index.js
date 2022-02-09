const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let rez = [];
    for(let i = 0; i < expr.length; i = i + 10) {
        let morse = '';
        for(let j = i; j < (i+10); j = j + 2){
            //console.log(`${expr[j]}-${expr[j+1]}`)
            if(expr[j]==0) continue
            if(expr[j]=='*') {
                morse = '**';
                break;
            }
            let morseDidgit = expr[j].toString() + expr[j+1].toString();
            if(morseDidgit == '10') morseLetter = '.';
            if(morseDidgit == '11') morseLetter = '-';
            
            morse += morseLetter;
        }
        if (morse == '**') rez.push(' ');
        else rez.push(MORSE_TABLE[morse]);
    }
    return rez.join('');
}

module.exports = {
    decode
}