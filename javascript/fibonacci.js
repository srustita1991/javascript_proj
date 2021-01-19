var x=0;
var y=1;
var z=0;
var n = 17;
while(z<=n)
{
    z= x+y;
    x=y;
    y=z;
    console.log(x);
}