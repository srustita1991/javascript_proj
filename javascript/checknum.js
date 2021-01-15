function checkPN(x) 
{
  if (x > 0) 
  {
    return "is a +ve num";
  } 
  else if(x<0)
  {
    return "is a -ve num";
  }
  else{
      return "its a 0";
  }
}

var num = [2,-54,0,6]
for (var i=0; i<num.length; i++)
{
    console.log(num[i], checkPN(num[i]));
    
}