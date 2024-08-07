// PATTERN 1
result1=''
count1=5;                                                       
for (let i=1;i<=count1;i++){
  for(let j=1;j<=count1;j++){
    result1+="*"
  }
  result1+="<br>"

}
document.getElementById('display1').innerHTML=result1

// ****
// ****
// ****
// ****
// ****

//PATTERN 2
count2=5
result2=''                                                       
for (let i=1;i<=count2;i++){
  for(let j=1;j<=i;j++){
    result2+="*"
  }
  result2+="<br>"

}
document.getElementById('display2').innerHTML=result2

// *
// **
// ***
// ****
// *****

//PATTERN 3
count3=5
result3=''                                                       
for (let i=0;i<=count3;i++){
  for(let j=1;j<=count3-i;j++){
    result3+="*"
  }
  result3+="<br>"

}
document.getElementById('display3').innerHTML=result3

// *****
// ****
// ***
// **
// *

//PATTERN 4
count4=5
result4='';
                                                       
let m=1;
for (let i=1;i<=count4;i++){
    for(let j=1;j<=count4-i;j++){
      result4+="<span class='space'>*</span>"
    }
  
  
  for(let k=1;k<=m;k++){
    result4+="*"
  }
  result4+="<br>"
  m=m+2
}
document.getElementById('display4').innerHTML=result4

//      *
//     ***
//    *****
//   *******
//  *********

//PATTERN 5

count4=5
result5='';
let n=9;                                                       
for (let i=1;i<=count4;i++){
 
    for(let j=2;j<=i;j++){
      result5+="<span class='space'>*</span>"
    }
  
  
  for(let k=1;k<=n;k++){
    result5+="*"
  }
  result5+="<br>"
  n=n-2
}
document.getElementById('display5').innerHTML=result5

//  *********
//   *******
//    *****
//     ***
//      *


// PATTERN 6



upperResult6='';
                                                       
let p=1;
for (let i=1;i<=5;i++){
    for(let j=1;j<=5-i;j++){
      upperResult6+="<span class='space'>*</span>"
    }
  
  
  for(let k=1;k<=p;k++){
    upperResult6+="*"
  }
  upperResult6+="<br>"
  p=p+2
}
document.getElementById('display6').innerHTML=upperResult6

lowerResult6='';
let q=9;                                                       
for (let i=1;i<=4;i++){
 
    for(let j=1;j<=i;j++){
      lowerResult6+="<span class='space'>*</span>"
    }
  
  
  for(let k=3;k<=q;k++){
    lowerResult6+="*"
  }
  lowerResult6+="<br>"
  q-=2
}
document.getElementById('display6').innerHTML+=lowerResult6

// PATTERN 7
result7=''                                                       
for (let i=1;i<=5;i++){
  for(let j=1;j<=5;j++){
    
    if(i==1||i==5||j==1||j==5){
      result7+="*"
    }
    else{
      result7+="<span class='space'>*</span>"
    }
  }
  result7+="<br>"

}
document.getElementById('display7').innerHTML=result7

// ****
// *  *
// *  *
// *  *
// ****

//PATTERN 8

result8='';
                                                       
let r=1;
let x=0
for (let i=1;i<=5;i++){
    for(let j=1;j<=5-i;j++){
      result8+="<span class='space'>*</span>"
    }
  
  for(let k=1;k<=r;k++){
   
    if(k==1||i==5||k==i+x){
       result8+=`*`
    }
    else{
      result8+=`<span class='space'>*</span>`
    }
   
  }
  result8+="<br>";
  r+=2;
  x+=1
}
document.getElementById('display8').innerHTML=result8

//      *
//     * *
//    *   *
//   *     *
//  *********

// PATTERN 9
result9='' 
let y=7                                                     
for (let i=1;i<=y;i++){
  for(let j=1;j<=y;j++){
     
    if(i==1||j==1||i==y||j==y||i==j||j==y-i+1){
    result9+=`* `
  }
    else{
      result9+=`<span class='space'>* </span>`
    }
  }
  result9+="<br>"

}
document.getElementById('display9').innerHTML=result9

// ****
// ****
// ****
// ****
// ****

//PATTERN 10

result10='';
                                                       
let a=9;
let b=8
for (let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
      result10+=`<span class='space'>*</span>`
    }
  
  for(let k=1;k<=a;k++){
    
    if(k==1||i==1||k==i+b){
       result10+=`*`
    }
    else{
      result10+=`<span class='space'>*</span>`
    }
   
  }
  result10+="<br>";
  a-=2;
  b-=3
}
document.getElementById('display10').innerHTML=result10

//  *********
//   *     *
//    *   *
//     * *
//      *