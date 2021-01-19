var n = 153;
var r;
var sum = 0;
var temp;
temp = n;
while(n>0)
{
    r=n%10;
    sum=sum+(r*r*r);
    n=Math.floor(n/10);
}
if(temp == sum)
{
    console.log(temp,"is an armstrong number");
}
else{
    console.log(temp,"is not an armstrong number");
}
