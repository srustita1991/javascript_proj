//in this program we will see diff methods to remove elements from an array in JS
/* pop - Removes from the End of an Array
shift - Removes from the beginning of an Array
splice - removes from a specific Array index
filter - allows you to programatically remove elements from an Array */

//Removing Element from the end of the array
var ar = [12,34,54,64,87,23];
ar.pop();
console.log(ar); //OP: [ 12, 34, 54, 64, 87 ]

//Removing element from the beginning of the array
var ar1 = ['hello','hi','hi there','hey','hola'];
ar1.shift();
console.log(ar1); //OP: [ 'hi', 'hi there', 'hey', 'hola' ]

//Using Splice
var ar2 = [11,22,33,44,55,66,77,88,99];
var rmv = ar2.splice(2,2);
console.log(rmv); // OP: [ 33, 44 ]
console.log(ar2); 
/* OP: [
    11, 22, 55, 66,
    77, 88, 99
  ]*/


/* deleting all the 5 from the array using splice*/
  var arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 5, 9, 0];
    
  for( var i = 0; i < arr.length; i++){ 
                                 
      if ( arr[i] === 5) { 
          arr.splice(i, 1); 
          i--; 
      }
  }
  console.log(arr);

/* filtering only numbers higher than 5 */
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var filtered = array.filter(function(value){ 
      return value > 5;
  });
console.log(filtered);
console.log(array);

//LOADASH array remove method
/*var ary = [1, 2, 3, 4];
var evens = _.remove(ary, function(n) { return n % 2 === 0;});
console.log(ary);
console.log(evens);*/
// => [1, 3]console.log(evens);// => [2, 4]

//making an user defined remove method
let krish = [1,2,3,4,5,6,7,8,9,10,11,12];
var result = arrayremove(krish,7);
function arrayremove(arr, n)
{
  return arr.filter(function (ele)
  {
    return ele!=n;
  });
}
console.log(result);

