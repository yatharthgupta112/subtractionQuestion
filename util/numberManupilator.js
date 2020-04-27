const {randomNumber,numGeneratorWithDigit,numBorrowingMinuend,randomOption} = require('./randomGenerator')

module.exports.getString = function (number)
{
    return number.toString();
    // return num.split("")
}
module.exports.nonBorrowingnum = function (minuend,subtrahendLength){

    let number ="";
    for (let i = 0; i<subtrahendLength; i++)
    {
        let relativeIndex =minuend.length - subtrahendLength + i;
        number = number +  randomNumber(0,parseInt(minuend.charAt(relativeIndex))).toString();
        // console.log(minuend, number)
        if (  number.charAt(0)==="0")
        {
            // console.log("in if-->"+ number)
            i =-1;
            number = "";
        }
    }
    return number;
}


module.exports.checkBorrowing = function (minuend, subtrahend)
{
    // console.log("from check")
    for (let i = subtrahend.length ; i>0;i--)
    {
        if(parseInt(subtrahend.charAt(i))> parseInt(minuend.charAt(i)))
        return true;
    }
    return false;
}

module.exports.borrowingNum = (minuend,subtrahendLength)=>{

    // console.log(this)
    let subtrahendString = numBorrowingMinuend(subtrahendLength,minuend).toString();
    // let subtrahendString = "531"
    // console.log(" --->"+subtrahendString)
    while(!this.checkBorrowing(minuend,subtrahendString))
    {
        // console.log("hiiii")
        let temp = randomNumber(1, 10);
        while (temp >0)
        {
            let index =randomNumber(1, subtrahendLength-1) ;
            let relativeIndex = minuend.length - subtrahendLength + index
            if(index=== 0 && relativeIndex === index)
                continue
            let replaceChar = randomNumber(parseInt(minuend.charAt(relativeIndex)), 9)
            subtrahendString =  this.replaceChar(subtrahendString,replaceChar.toString(),index);
            temp--;
        }
    }


    return subtrahendString
}

module.exports.replaceChar = function (origString, replaceChar, index) {
    let firstPart = origString.substr(0, index);
    let lastPart = origString.substr(index + 1);
      
    let newString = firstPart + replaceChar + lastPart;
    return newString;
}

module.exports.generateOption = function(answer)
{
    let option = [];
    let answerLength = answer.toString().length;
    option.push(answer)
    option.push(randomNumber(answer+1, answer +5))
    option.push(randomNumber(answer-1, answer -10))
    option.push(numGeneratorWithDigit(answerLength))

    return randomOption(option)
}



// console.log(this)
// console.log(this.generateOption(12))
// console.log(this.borrowingNum("2651", 3))
// console.log(this.minuendGenerator(4))
// console.log(this.nonBorrowingnum("1234",4))