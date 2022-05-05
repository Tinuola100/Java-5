// ? question1: Divide the elements in array1 with elements in array2 respectively and store their results in a new array.

let array1 = [20, 46, 90, 80, 120];
let array2 = [2, 2, 5, 4, 2];
var a1 = array1[0]
var a2 = array2[0]
output1 = a1 / a2
//console.log(output1);
//var a1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var b1 = array1[1]
var b2 = array2[1]
output2 = b1 / b2
//console.log(output2);
//var b1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


var c1 = array1[2]
var c2 = array2[2]
output3 = c1 / c2
//console.log(output3);
//var c1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var d1 = array1[3]
var d2 = array2[3]
output4 = d1 / d2
//console.log(output4);
//var d1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var e1 = array1[4]
var e2 = array2[4]
output5 = e1 / e2
//console.log(output5);
//var e1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var array = [output1,output2,output3,output4,output5]
console.log(array);

// ? Question 2:Multi dimensional Arrays
var arr = [[1, 2, 3],[4, 5, 6],7,8,9,[[10, 11, 12, [13, 4, 112]], 136, 14],];
// *print out these numbers (10,8,13,136 and 4)from the array provided above using for loop

var arr1 = arr[5][0][0];
for(count = 1; count < arr1; count++){
    console.log(count);
}
console.log(arr1)
//var1>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var arr2 = arr[3];
for(count = 1; count < arr; count++){
    console.log(count);
}
//var2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var arr3 = arr[5][0][3][0];
for(count = 1; count < arr3; count++){
    console.log(count);
}
//var3>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var arr4 = arr[5][1];
for(count = 1; count < arr4; count++){
   console.log(count);
}
//var4>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var arr5 = arr[1][0];
for(count = 1; count < arr5; count++){
    console.log(count);
}

