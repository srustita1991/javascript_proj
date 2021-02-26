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

ele1 = {
    "brand": 'hyundai',
    "color": 'white',
    "name": 'i20',
    "type": 'astha' 
}
ele2 = {
    "brand": 'BMW',
    "color": 'silver',
    "name": 'gran limounsine',
    "type": 'M sports'
}

//Adding one object at the first position (0th postn) we use (array.unshift)
car.unshift(ele1);
console.log(car);

//Adding one object at the last position (nth postn) we use (array.push)
car.push(ele2);
console.log(car);