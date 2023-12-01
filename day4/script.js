
// Ques 1: Print odd numbers in an array

// In anonymous function ;


var odd = function(num){
    var final = [ ];
    for(let i=0; i<num.length; i++){
        
        if (num[i]%2==1){
final.push(num[i])
        }
    }
    console.log(final);
};

var num = [1, 2, 3, 4, 5];
odd(num);

// output ; [ 1, 3, 5 ]

// Using IIFE

var num = [1, 2, 3, 4, 5];
var final = [];


(function(){
    
    for(let i=0; i<num.length; i++){
        
        if (num[i]%2==1){
final.push(num[i])
        };
    }
    console.log(final);
})(final);

// output ; [ 1, 3, 5 ]

-----------------------------------------------------------------------------------------------------------------------------------------

// QUES 2 : Convert all the strings to title caps in a string array ;
// anonymous fucntion 
let title = function (str) { 
    
    for(var i=0; i<str.length; i++){
        
        str[i]=str[i].toLowerCase();
        str[i]=str[i].charAt(0).toUpperCase()+ str[i].slice(1);
        
        }
    
    console.log(str.join(' '));
    }

var str = ['i', 'aM', 'aN', 'sTUdEnT'];
title(str);

// output : I Am An Student

// using IIFE function

var str = ['i', 'aM', 'aN', 'sTUdEnT'];
(function(){
    for(var i=0; i<str.length; i++){
        
        str[i]=str[i].toLowerCase();
        str[i]=str[i].charAt(0).toUpperCase()+ str[i].slice(1);
       
}console.log(str.join(' '));
})(str);
// output : I Am An Student
-----------------------------------------------------------------------------------------------------------------------------------------
// QUES : 3 Sum of all numbers in an array
// Anonymous function
let add = function (n){
    let sum = 0;
        for(i=0; i<n.length; i++ ){
    
            sum += n[i];
            
        }
        console.log(sum);
    };
    var n = [1, 3, 5];
    add(n);
// output : 9
// Using IIFE
var n = [1, 3, 5];
var sum = 0;
(function(add){
    for(let i=0; i<n.length; i++){
        sum+=n[i];
    }console.log(sum);
})(sum);

// output : 9
-----------------------------------------------------------------------------------------------------------------------------------------
// QUES ; 4 Return all the prime numbers in an array
// Anonymous function
var prime=function(a){

    var  res=[];
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++;
            }
        }
        if(count==2)
        {
            res.push(a[i]);
        }
    }
    console.log(res);
};
prime([1,2,3,4,5,6,7,8,9,11]);
// output : [2,3,5,7,11]
// By using IIFE
(function(a){
    var  res=[];
    for(i=0;i<a.length;i++){
        count=0;
        for(j=1;j<=a[i];j++){
            
            if(a[i]%j===0){
                count++;
            }
            
        }
            
        if(count==2){
                res.push(a[i]);
            
        }
    }
    console.log(res);
 
})
([1,2,3,4,5,6,7,8,9,11]);

// output : [2,3,5,7,11]
-----------------------------------------------------------------------------------------------------------------------------------------

// QUES 5: Return all the palindromes in an array
// Anonymous function
let palindrome = function(arr){
    
    var N=arr.length;
    var out =[];
    for(let i=0;i<arr.length;i++){
        let final = arr[i];
        let str = final.split('').reverse().join('');
        if(str==arr[i])
       out.push(arr[i]);
        }
     console.log(out);
   
};
var arr =["kid", "mom", "radar", "rotor", "moon"];

palindrome(arr);
//output
//['mom', 'radar', 'rotor']

//IIFE function

 
(function(){
    var arr1 =["kid", "mom", "radar", "rotor", "moon"];
    var N1=arr1.length;
    var out =[];
    for(let i=0;i<arr1.length;i++){
        let final = arr1[i];
        let str = final.split('').reverse().join('');
        if(str==arr1[i])
       out.push(arr1[i]);
        }
     console.log(out);
   
})(); 
//output
//['mom', 'radar', 'rotor']
-----------------------------------------------------------------------------------------------------------------------------------------

//QUES 6.Return median of two sorted arrays of the same size.
//Anonymous function
let median = function (arr1,arr2){
    let arr = [...arr1, ...arr2];
    
    arr.sort((a,b) => a-b);
    let len = arr.length;
  
    if(len%2!==0){

 let ans = arr[Math.round(len/2)-1];
 let final = ans;

 }else{

 ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
 final = ans;

}
console.log(final);
};
var arr1 = [3,2,1,4,5];
var arr2 = [8,6,7,9,10];
median(arr1,arr2);
//output
//11

//Return median of two sorted array using IIFE

var arr1 = [3,2,1,4,5];
var arr2 = [8,6,7,9,10];
(function (){
   
let arr = [...arr1, ...arr2];
    
    arr.sort((a,b) => a-b);
    let len = arr.length;
  
    if(len%2!==0){

 let ans = arr[Math.round(len/2)-1];
 let final = ans;

 }else{

 ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
 final = ans;
 }
 console.log(final);
})(arr1,arr2);
//output
//11
-----------------------------------------------------------------------------------------------------------------------------------------
//  QUES 7 : Remove duplicates from an array
// Anonymous function
var dup=function(arr){
    var frequency = {};
   
    for(let i = 0; i < arr.length; i++) {
       if(frequency[arr[i]]) {
         frequency[arr[i]] = frequency[arr[i]] + 1;
       } else {
         frequency[arr[i]] = 1;
       }
    }
   
   let final = [];
   for(let x in frequency) {
     if(frequency[x] === 1) {
       final.push(x);
     }
   }
   
   console.log(final); 
   
   };
   dup([1,12,11,3,4,5,12]);
   //output
   //[ '1', '3', '4', '5', '11' ]
   
   //BY Using IIFE
   
   (function (arr){
     var frequency = {};
   
    for(let i = 0; i < arr.length; i++) {
       if(frequency[arr[i]]) {
         frequency[arr[i]] = frequency[arr[i]] + 1;
       } else {
         frequency[arr[i]] = 1;
       }
    }
   
   let final = [];
   for(let x in frequency) {
     if(frequency[x] === 1) {
       final.push(x);
     }
   }
   
   console.log(final);   
   })([1,2,3,4,4,5,6,7,5]);
   
   //output
   //[ '1', '2', '3', '6', '7' ]
-----------------------------------------------------------------------------------------------------------------------------------------
// QUES 8 :Rotate an array by k times
// Anonymous function
let rotation = function (arr,n,d)
{
    let p = 1;
        while (p <= k) {
            let last = arr[0];
            for (let i = 0; i < n - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[n - 1] = last;
            p++;
            
        }
         let out = [];
        for (let i = 0; i < n; i++) {
           out.push(arr[i]);
            
        }
        console.log(out);
};
var arr =[4,5,6,1,2,3];
var n = arr.length;
var k = 3;

rotation(arr, n,k);

//output
//[ 1, 2, 3, 4, 5, 6 ]

//By Using IIFE

var arr =[4,5,6,1,2,3];
var n = arr.length;
var k = 3;

(function(arr,n,k){
   let p = 1;
        while (p <= k) {
            let last = arr[0];
            for (let i = 0; i < n - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[n - 1] = last;
            p++;
            
        }
         let out = [];
        for (let i = 0; i < n; i++) {
            out.push(arr[i]);
            
        }
        console.log(out);  
})(arr,n,k);

//output
//[ 1, 2, 3, 4, 5, 6 ]
