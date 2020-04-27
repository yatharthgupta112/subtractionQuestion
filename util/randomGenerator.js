module.exports.randomNumber = function (min, max) 
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // console.log(this.randomNumber (1,2))
    // console.log()
module.exports.numGeneratorWithDigit = (minuendLength)=>{
        let min = Math.pow(10, minuendLength -1);
        let max = Math.pow(10, minuendLength) -1;
        return this.randomNumber(min, max)
    }
module.exports.numBorrowingMinuend = (minuendLength, max)=>{
        let min = Math.pow(10, minuendLength -1);
         max = Math.min(Math.pow(10, minuendLength)-1, max);
        return this.randomNumber(min, max)
    }

    module.exports.randomOption = (arr)=>{
        let temp = this.randomNumber(1,8);
        while (temp >0)
        {
           arr = this.swapElements(arr, this.randomNumber(0,3),this.randomNumber(0,3));
           temp --;
        }
        return arr;
    }

    module.exports.swapElements = (arr, index1, index2)=>{
        let swap = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = swap;
        return arr;
    }