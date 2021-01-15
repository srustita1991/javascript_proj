function mul3(x) 
{
  if (x % 3 == 0) 
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

var num = [6,93,12,43]
for (var i=0; i<num.length; i++)
{
    if(mul3(num[i]))
    {
        console.log(num[i], "is a multiple of 3");
    }
    else{
        console.log(num[i], "is not a multiple of 3");
    }
}