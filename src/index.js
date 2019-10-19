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
    var result = '';
    var lettersCount = expr.length / 10;
  
    for(var i = 0; i < lettersCount; i++) {
      var letter = expr.substring(i * 10, i * 10 + 10);
      result += decodeLetter(letter);
    }
    return result;
  }
  
  function decodeLetter(str) {
    var symbol = '';
  
    if (str == "**********") {
      return ' ';
    }
  
    for (var i = 0; i < str.length - 1; i += 2) {
      var letter = str.substring(i, i + 2);
      if (letter == '11') {
        symbol += '-';
      } else if (letter == '10') {
        symbol += '.';
      }
    }
  
    return MORSE_TABLE[symbol];
  }
  
  module.exports = {
      decode
  }