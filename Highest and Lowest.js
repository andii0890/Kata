function highAndLow(numbers){
    var arrayNumbers = numbers
      .split(" ")
      .map((v,i,a)=> parseInt(v,10))
      .sort(function(low,high){
        return high-low
      })
    
   return arrayNumbers[0] + " " + arrayNumbers[arrayNumbers.length-1]
   }

Test.assertEquals(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
