/*var num = 34567;
var revstr = '';
var rev;
console.log("num is:", num);
while(num!=0)
{
    rev = num%10;
    revstr = revstr + rev;
    num = Math.floor(num/10);
}
console.log("reversed num is:", revstr);*/

var num = 34567;
var revstr = 0;
var rev;
console.log("num is:", num);
while(num!=0)
{
    rev = num%10;
    revstr = (revstr*10)+rev;
    num = Math.floor(num/10);
}
console.log("reversed num is:", revstr);