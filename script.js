
const  dictionary = {
    'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',
    'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',
    'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',
    'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
    'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--',
    'Z': '--..',
    
}



englishToMorse = (inputString) => {
    let result = ""
    
   for(let i = 0; i < inputString.length;i++) {
    const upperCase = inputString[i].toUpperCase()

    if(upperCase === " ") {
        result += "//"

    }

    else if (dictionary[upperCase] !== undefined) {
        result += dictionary[upperCase] + " "
    }

   }

    return result

}


console.log(englishToMorse("hello th"))



