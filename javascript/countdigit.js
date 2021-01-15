/*const num = 2353454;
const digits = (num, count = 0) => {
   if(num){
      return digits(Math.floor(num / 10), ++count);
   };
   return count;
};
console.log(digits(num));
console.log(digits(123456));
console.log(digits(53453));
console.log(digits(5334534534));*/

function digit(x)
{
    if(x>99 && x<1000)
    {
        return true;
    }
    else{
        return false;
    }

}

var num = [12, 344 , 554 , 1234];
for( var i = 0; i < num.length; i++)
{
    if (digit(num[i]))
    {
        console.log(num[i], "has three digits");
    }
    else{
        console.log(num[i], "is not a three digit number");
    }
}
