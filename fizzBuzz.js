function fizzBuzz(value){
  if (Number.isInteger(value) === false)
  {
    console.log("The input is not a number");
    return;
  }
  if (value % 3 == 0 && value % 5 ==0) return("FizzBuzz");
else if (value % 3 == 0) return("Fizz");
else if (value % 5 ==0) return("Buzz");
else return(value);
  }



console.log(fizzBuzz(12) === "Fizz"); 
console.log(fizzBuzz(55) === "Buzz"); 
console.log(fizzBuzz(60) === "FizzBuzz");
console.log(fizzBuzz(14) === 14);

function fizzBuzzCounter(value){
  if (Number.isInteger(value) === false)
  {
    console.log("The input is not a number");
    return;
  }
  for (i=1; i<=value; i++){
  console.log(fizzBuzz(i));
  }
}
fizzBuzzCounter(15);