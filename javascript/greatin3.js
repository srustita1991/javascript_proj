function greatest(n1,n2,n3) 
{
  if (n1>n2 && n1>n3) 
  {
    return n1 + " is greatest among three";
  } 
  else if(n2>n1 && n2>n3)
  {
    return n2 + " is greatest among three";
  }
  else{
      return n3 + " is greatest among three";
  }
}

var n1 = 24;
var n2 = 52;
var n3 = 30;
    
console.log(greatest(n1,n2,n3));