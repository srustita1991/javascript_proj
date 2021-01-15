function check_evenodd(x)
{
    if(x % 2 == 0)
    {
        return true;
    }
    else{
        return false;
    }

}

var num = [12, 344 , 45 , 23, 65, 88];
for( var i = 0; i < num.length; i++)
{
    if (check_evenodd(num[i]))
    {
        console.log(num[i], "is an even number");
    }
    else{
        console.log(num[i], "is an odd number");
    }
}