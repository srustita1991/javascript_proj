function least(x,y)
{
    if(x<y)
    {
        return true;
    }
    else{
        return false;
    }
}
var m= 20;
var n= 3;
if(least(m,n))
{
    console.log(m, 'is the least number between (', n,'&', m, ')');
}
else{
    console.log(n, 'is the least number between (', n,'&', m, ')');
}