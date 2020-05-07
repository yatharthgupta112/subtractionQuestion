const {randomNumber,numGeneratorWithDigit} = require('../util/randomGenerator');
const { nonBorrowingnum, borrowingNum,generateOption,checkMinuend} = require('../util/numberManupilator');



function Questionaire(req){
    // let question = 15;
    // let borrowingFlag = false;

    if( req.body.minuend<req.body.subtrahend)
     throw({message : "invalid input"})
    let question = req.body.noOfQuestions;
    let borrowingFlag = req.body.borrowing;
    let response = []
    while(question >0)
    {
        if(borrowingFlag)
            response.push(borrowingQuestion(req));
        else
            response.push(nonBorrowingQuestion(req));
        question--;
    }
    // console.log(response)
    return response;
    
}

function borrowingQuestion(req){
    let minuendLength = req.body.minuend;
    let subtrahendLength = req.body.subtrahend;
    // let minuendLength = 3;
    // let subtrahendLength = 1;
    let minuend= numGeneratorWithDigit(minuendLength);
    // let minuend=258;
    while(!checkMinuend(minuend.toString(), subtrahendLength))
    { minuend = numGeneratorWithDigit(minuendLength);}
    let subtrahend = borrowingNum(minuend.toString(), subtrahendLength);
    let answer = parseInt(minuend)- parseInt(subtrahend);
    let option = generateOption(answer);
    return {
        minuend : parseInt(minuend),
        subtrahend : parseInt(subtrahend),
        answer : answer,
        options : option
    }

}
function nonBorrowingQuestion(req){
    let minuendLength = req.body.minuend;
    let subtrahendLength = req.body.subtrahend;
    // let minuendLength = 4;
    // let subtrahendLength = 3;
    let minuend = numGeneratorWithDigit(minuendLength);
    if(minuend.toString().charAt(minuendLength-subtrahendLength) === "0")
        minuend += Math.pow(10,subtrahendLength-1)* randomNumber(1,9);
    let subtrahend = nonBorrowingnum(minuend.toString(), subtrahendLength)
    let answer = parseInt(minuend)- parseInt(subtrahend);
    let option = generateOption(answer); 
    return {
        minuend : parseInt(minuend),
        subtrahend : parseInt(subtrahend),
        answer : answer,
        options : option
    }
}

module.exports = {Questionaire}

// console.log(Questionaire({}));
// console.log(borrowingQuestion());