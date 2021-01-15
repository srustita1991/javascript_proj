var num = [10,30,50,40,5];
var j = 0; 
var a = 0;
for (var i=0; i<num.length; ++i) 
 { 
   for (j=i+1; j<num.length; ++j) 
   { 
     if (num[i] > num[j]) 
     {
       a= num[i];
       num[i] = num[j];
       num[j] = a;
     }
   }
 }
 for (i=0; i<num.length; ++i)
 console.log(num[i]);