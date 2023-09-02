
var addBinary = function(a, b) {
    let res=''
    let carry=0
    let i=a.length-1
    let j=b.length-1
    while(i>=0 || j>=0){
      const A=i>=0?parseInt(a[i]):0
      const B=j>=0?parseInt(b[j]):0
      const sum=A+B+carry
      carry=Math.floor(sum/2)
      res=(sum%2)+res
      i--;
      j--;
      
  
    }
    if(carry===1){
        res='1'+res
      }
    return res
  };
  /*
  a = "1010", b = "1011"
  a=100,b=1
  100
  001
  1010
  1011
  -----
  10101
  c=1
  
  1+1=2
  1+1=c=1 ,0
  */