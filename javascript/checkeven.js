var a = 12;
var b = 32;
var c = 65;
var d = 7;
var e = 6;
var arr = [a,b,c,d,e];
console.log("printing the EVEN numbers");
for (var n of arr)
{
    if(n%2 == 0)
    {
        console.log(n);
    }
}
