let car = [
    {
        "brand": 'BMW',
        "color": 'silver',
        "name": 'gran limounsine',
        "type": 'M sports'
    },
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
    {
        "brand": 'hyundai',
        "color": 'white',
        "name": 'i20',
        "type": 'astha' 
    }
]
console.log(car.length);
//removing one object from the first position (0th postn) we use (array.shift)
ele1 = car.shift();
console.log(car);
console.log(ele1,"\n");

//removing one object from the last position (nth postn) we use (array.pop)
ele2 = car.pop();
console.log(car);
console.log(ele2,"\n");