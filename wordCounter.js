
getTotalCount = (inputString) => {

    let counter = 0
    let sentenceCount = 0
    let wordCounter = 0

    for(let i = 0; i < inputString.length;i ++) {
        counter ++

    }

    const wordArr = inputString.split(" ")
    wordCounter = wordArr.length
    

   

    const newArr = inputString.split(/[.!?]/)
    
   

    for(let x = 0; x < newArr.length;x++) {
        if(newArr[x].trim() !== "") {
            sentenceCount ++
        }                                       

    }
    return {
        wordCounter:wordCounter,
        charCounter:counter,
        sentenceCount:sentenceCount



    }

}

console.log(getTotalCount("Hi my name is Eric."));

