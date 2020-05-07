const { expect } = require( 'chai');
const {Questionaire} = require('../controller/subtractionController')


describe(' Subtraction', () => {
    
  describe('non borrowing', () => {
   
    describe('minuend has greater digit', () => {
        let req = {
            body :   {
                noOfQuestions: 1000,
                borrowing: false,
                minuend: 1,
                subtrahend: 0
            }
        }
        const result =Questionaire(req);
    

        it('is non borrowing', async () => {

            for(let i = 0; i <result.length; i++)
            {
                let minuend=  result[i].minuend.toString()
                let subtrahend=  result[i].subtrahend.toString()
                let relativeIndex = minuend.length - subtrahend.length
                for (let j= 0; j< subtrahend.length; j++)
                {
                    // console.log(minuend.charAt(relativeIndex + j),subtrahend.charAt(j))
                    expect(parseInt(minuend.charAt(relativeIndex + j))).least(parseInt(subtrahend.charAt(j)));
                }
            }
            
          });
      it('Has correct no of questions ', async () => {
        expect(result.length).to.eql(req.body.noOfQuestions);
        
      });
      it('Minuend and subtrahend is of correct length ', async () => {
        for(let i = 0; i <result.length; i++)
        {
            minuend=  result[i].minuend.toString().length
            subtrahend=  result[i].subtrahend.toString().length
            expect(minuend).to.eql(req.body.minuend);
            expect(subtrahend).to.eql(req.body.subtrahend);
        }
        
      });
      it('answer is correct', async () => {

        for(let i = 0; i <result.length; i++)
        {
           let  minuend=  result[i].minuend
            let subtrahend=  result[i].subtrahend
            let answer=  result[i].answer
            expect(minuend - subtrahend).to.eql(answer);
        }
        
      });

      it('option has correct answer', async () => {

        for(let i = 0; i <result.length; i++)
        {
           let  option =  result[i].options
           let answer=  result[i].answer
            expect(option).contains.members([answer]);
        }
        
      });
     

    });
    describe('minuend and subtrahend has equal digit', () => {
        let req = {
            body :   {
                noOfQuestions: 1000,
                borrowing: false,
                minuend: 6,
                subtrahend: 6
            }
        }
        const result =Questionaire(req);
    

        it('is non borrowing', async () => {

            for(let i = 0; i <result.length; i++)
            {
                let minuend=  result[i].minuend.toString()
                let subtrahend=  result[i].subtrahend.toString()
                let relativeIndex = minuend.length - subtrahend.length
                for (let j= 0; j< subtrahend.length; j++)
                {
                    // console.log(minuend.charAt(relativeIndex + j),subtrahend.charAt(j))
                    expect(parseInt(minuend.charAt(relativeIndex + j))).least(parseInt(subtrahend.charAt(j)));
                }
            }
            
          });
      it('Has correct no of questions ', async () => {
        expect(result.length).to.eql(req.body.noOfQuestions);
        
      });
      it('Minuend and subtrahend is of correct length ', async () => {
        for(let i = 0; i <result.length; i++)
        {
            minuend=  result[i].minuend.toString().length
            subtrahend=  result[i].subtrahend.toString().length
            expect(minuend).to.eql(req.body.minuend);
            expect(subtrahend).to.eql(req.body.subtrahend);
        }
        
      });
      it('answer is correct', async () => {

        for(let i = 0; i <result.length; i++)
        {
           let  minuend=  result[i].minuend
            let subtrahend=  result[i].subtrahend
            let answer=  result[i].answer
            expect(minuend - subtrahend).to.eql(answer);
        }
        
      });

      it('option has correct answer', async () => {

        for(let i = 0; i <result.length; i++)
        {
           let  option =  result[i].options
           let answer=  result[i].answer
            expect(option).contains.members([answer]);
        }
        
      });
     

    });
  
  });

  describe('borrowing', () => {
   
    describe('minuend has greater digit', () => {
        let req = {
            body :   {
                noOfQuestions: 1000,
                borrowing: true,
                minuend: 3,
                subtrahend: 1
            }
        }
        const result =Questionaire(req);
    
        // console.log("--->",result)
        it('is borrowing', async () => {

            for(let i = 0; i <result.length; i++)
            {
                let minuend=  result[i].minuend.toString()
                let subtrahend=  result[i].subtrahend.toString()
                for (let j= 0; j< subtrahend.length; j++)
                {
                    // console.log(minuend.charAt(relativeIndex + j),subtrahend.charAt(j))
                    expect(checkBorrowing(minuend, subtrahend)).to.eql(true);
                }
            }
            
          });
      it('Has correct no of questions ', async () => {
        expect(result.length).to.eql(req.body.noOfQuestions);
        
      });
      it('Minuend and subtrahend is of correct length ', async () => {
        for(let i = 0; i <result.length; i++)
        {
            minuend=  result[i].minuend.toString().length
            subtrahend=  result[i].subtrahend.toString().length
            expect(minuend).to.eql(req.body.minuend);
            expect(subtrahend).to.eql(req.body.subtrahend);
        }
        
      });
      it('answer is correct', async () => {

        for(let i = 0; i <result.length; i++)
        {
           let  minuend=  result[i].minuend
            let subtrahend=  result[i].subtrahend
            let answer=  result[i].answer
            expect(minuend - subtrahend).to.eql(answer);
        }
        
      });

      it('option has correct answer', async () => {

        for(let i = 0; i <result.length; i++)
        {
           let  option =  result[i].options
           let answer=  result[i].answer
            expect(option).contains.members([answer]);
        }
        
      });
     

    });
    describe('minuend and subtrahend has equal digit', () => {
        let req = {
            body :   {
                noOfQuestions: 1000,
                borrowing: true,
                minuend: 6,
                subtrahend: 6
            }
        }
        const result =Questionaire(req);
    

        it('is borrowing', async () => {

            for(let i = 0; i <result.length; i++)
            {
                let minuend=  result[i].minuend.toString()
                let subtrahend=  result[i].subtrahend.toString()
                for (let j= 0; j< subtrahend.length; j++)
                {
                    // console.log(minuend.charAt(relativeIndex + j),subtrahend.charAt(j))
                    expect(checkBorrowing(minuend, subtrahend)).to.eql(true);
                }
            }
            
          });
      it('Has correct no of questions ', async () => {
        expect(result.length).to.eql(req.body.noOfQuestions);
        
      });
      it('Minuend and subtrahend is of correct length ', async () => {
        for(let i = 0; i <result.length; i++)
        {
            minuend=  result[i].minuend.toString().length
            subtrahend=  result[i].subtrahend.toString().length
            expect(minuend).to.eql(req.body.minuend);
            expect(subtrahend).to.eql(req.body.subtrahend);
        }
        
      });
      it('answer is correct', async () => {

        for(let i = 0; i <result.length; i++)
        {
           let  minuend=  result[i].minuend
            let subtrahend=  result[i].subtrahend
            let answer=  result[i].answer
            expect(minuend - subtrahend).to.eql(answer);
        }
        
      });

      it('option has correct answer', async () => {

        for(let i = 0; i <result.length; i++)
        {
           let  option =  result[i].options
           let answer=  result[i].answer
            expect(option).contains.members([answer]);
        }
        
      });
     

    });
  
  });

});

function checkBorrowing  (minuend, subtrahend)
{
   
    // console.log("from check")
    for (let i = subtrahend.length-1; i>=0;i--)
    {
        let relativeIndex = minuend.length - subtrahend.length + i
        if(parseInt(subtrahend.charAt(i))> parseInt(minuend.charAt(relativeIndex)))
        return true;
    }
    return false;
}