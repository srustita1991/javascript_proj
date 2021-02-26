var fruits = ["mango", "orange", "apple"]

/* javascript splice() method used to modify an array. It is used to add new element to the array
 or to change the exsting ones or to remove element. SPLICE() changes the array on which it is used.
 it doesnt create a new one.*/

 /* THIS IS THE SYNTAX FOR SLPICE . array_name.splice(index_to_add_or_remove, items_to_remove, items_to_add...) */

 // DELETE from the ARRAY.

fruits.splice(1,1); //removed one element from 1st position. that is orange
console.log(fruits);
fruits.splice(1,0,'kiwi','dragon-fruit','pears'); //added 3 items at the 1st place.
console.log(fruits);
fruits.splice(0,2,'papaya','watermelon'); //removing and adding from first position at a time
console.log(fruits);