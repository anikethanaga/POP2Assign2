let binarySearch = function (arr, ele) { 
       
    let init=0, end=arr.length-1; 
          
    // Iterate while start not meets end 
    while (init<=end){ 
  
        // Find the mid index 
        let mid=Math.floor((init + end)/2); 
   
        // If element is present at mid, return True 
        if (arr[mid]===ele) return mid; 
  
        // Else look in left or right half accordingly 
        else if (arr[mid] < ele)  
             init = mid + 1; 
        else
             end = mid - 1; 
    } 
   
    return false;
} 
   
let array = [7,8,9,10,11,12,13]; 
let x = 10; 

var bs = binarySearch(array, x);
if (bs) 
    console.log("Element to be searched found at "+ bs); 
else console.log("Element not found!"); 
