function div7(x) 
{
  if (x % 7 == 0) 
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

var num = [14,28,420,543]
for (var i=0; i<num.length; i++)
{
    if(div7(num[i]))
    {
        console.log(num[i], "is divisible by 7");
    }
    else{
        console.log(num[i], "is not divisible by 7");
    }
}