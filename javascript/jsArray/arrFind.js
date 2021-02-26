let car = [
    {
        "brand": 'hyundai',
        "color": 'red',
        "name": 'i10 Nios',
        "type": 'sportz'
    },
    {
        "brand": 'tata',
        "color": 'red',
        "name": 'tiago',
        "type": 'model1' 
    },
    {
        "brand": 'tata',
        "color": 'white',
        "name": 'safari',
        "type": 'newone' 
    },
]
// Array.find function returns only one object.
let find1 = car.find(ca => ca.color === "red");
console.log(find1);

//If we need to find all red cars we need to use Array.filter function
let find2 = car.filter(ca => ca.color === "red");
console.log(find2);
console.log(find2[1]);

//array.filter returns an array