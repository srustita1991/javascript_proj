function checkU4(x)
{
    if((x % 10) == 4)
    {
        return true;
    }
    else{
        return false;
    }

}

var num = [12, 34 , 554 , 1234];
for( var i = 0; i <= num.length; i++)
{
    if (checkU4(num[i]))
    {
        console.log(num[i], "has 4 at unit place");
    }
    else{
        console.log(num[i], "doesn't have 4 at unit place");
    }
}
