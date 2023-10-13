"use strict"

// let n=prompt("Enter a value")
// for(var i=1;i<=n;i++)
// {  
//     if((i%3==0) && (i%5==0))
//     {
//         console.log("Fizzbuzz")
//     }
//     else if(i%3==0)
//     {
//         console.log("Fizz")
//     }
//     else if(i%5==0)
//     {
//         console.log("Buzz")
//     }
//     else
//     {
//         console.log(i)
//     }
// }

//--------------------------------2nd--------------------------------------

// let n=multiplies(7,5)

// function multiplies(x,y)
// {
//     var arr=[]
//     for(var i=0;i<y;i++)
//     {
//         arr[i]=x*(i+1)
//     }
//     console.log(arr)
// }

//-------------------------------------3rd-----------------------------------------

// let arr=positiveNegative([1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15])


// function positiveNegative(x)
// {
//     let count=0;
//     let sum=0;
//     // var a=[]
//     for(var i=0;i<x.length;i++)
//     {
//         if(x[i]>0)
//         {
//             count++
//         }
//         else
//         {
//             sum=sum+x[i]
//         }
//     }

//     console.log(count+" "+sum)
// }

//--------------------------------------4th--------------------------------------------


function missing(arr) 
{
    var n = arr.length;
    var total = ((n + 2) * (n + 1)) / 2;
    for (let i = 0; i < n; i++) 
    {
      total -= arr[i];
    }
    return total;
  }
  
  var arr = missing([4,9,2,5,6,8,7,1]);
  console.log(arr);


//-----------------------------------------5th------------------------------------

// let arr = [10,20,30,40,50,6,2,0,1]
// let big = arr[0]
// let small=arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > big){
//         big = arr[i]  
//     }
//     else if(arr[i] < small)
//     {
//         small = arr[i]
//     }
// }
// console.log("Smallest Number :" + small);
// console.log("Largest Number :" + big);


//-------------------------------------------------------------------



