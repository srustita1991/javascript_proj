function greatest(x,y)
{
    if(x>y)
    {
        return true;
    }
    else{
        return false;
    }
}
var m= 20;
var n= 3;
if(greatest(m,n))
{
    console.log(m, 'is greatest between (', n,'&', m, ')');
}
else{
    console.log(n, 'is greatest between (', n,'&', m, ')');
}