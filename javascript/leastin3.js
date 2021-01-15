function minimum(n1,n2,n3) 
{
  if (n1<n2 && n1<n3) 
  {
    return n1 + " is least among three";
  } 
  else if(n2<n1 && n2<n3)
  {
    return n2 + " is least among three";
  }
  else{
      return n3 + " is least among three";
  }
}

var n1 = 22;
var n2 = 1;
var n3 = 9;
    
console.log(minimum(n1,n2,n3));