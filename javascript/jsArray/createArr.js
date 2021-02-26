/* how to create an array in javascript*/

var car = ['tata', 'hyundai', 'volvo', 'safari', 'BMW'];
console.log(car);
var num = [1,3,23,45];
console.log(num);
var fruits = new Array('mango','orange','kiwi','banana');
console.log(fruits);

/* How to access items from the array */
console.log(car[2]);
name = fruits[1];
console.log(name);

//<<arrays are objects>>//

/*accessing the last item of an array (array.length - 1)*/
console.log(num[num.length-1]);

/* accessing all the items of an array using for loop */

for(var i =0; i <= car.length-1;i++)
{
    console.log(car[i]);
}

for(var i =0; i <= num.length-1;i++)
{
    console.log(num[i]);
}