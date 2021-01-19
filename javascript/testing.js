//program to print 100 to 1 (10 number in a row)
var text = "";
for (var i =100; i>=0;i--)
{
    text +=i+","+(i<100 && i%10===0?"\n":"")
}
console.log(text);