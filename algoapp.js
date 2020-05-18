import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

//1 to 255
for(var i=1; i<=255; i++){
    console.log(i);
}

//odd numbers
for(var i=1; i<=255; i++){
    if(i%2){
        console.log(i);

    }
    
}

//print sum
var sum=0;
for(var i=1; i<=5000; i++){
    if(i%2){
        sum+=i;

    }
    
}
console.log(sum);

//iterate through array
arr =[1,2,3,4,5];

for(var i=1; i<arr.length; i++){
    console.log(arr[i]);
}

//find max
arr =[-3,3,5,7,5];
max=arr[0];
for(var i=1; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);

//avg
arr =[1,2,3,4,5];
var sum=0;

for(var i=1; i<arr.length; i++){
    sum+=arr[i]
}
var avg=sum/arr.length;
console.log(avg);

//array with odd numbers 
var y=[];
for(var i=1; i<=255; i++){
    if(i%2){
        y.push(i);

    }
}
console.log(y);

//greaterthan
function greaterthan(arr, y){
    var count=0;
    for (var i =0; i<arr.length; i++){
        if(arr[i]>y){
            count++;
        }
    }
    return count;
}

console.log(greaterthan([3,4,5,6,7], 5))

//square 
function square(arr){
    for (var i =0; i<arr.length; i++){
        arr[i]*=arr[i];
    }
    return arr;
}

console.log(square([1,2,3,4,5]));

// remove negative numbers

function removeN(arr){
    for (var i =0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
    return arr;
}

console.log(removeN([-1,2,3,-4,5,-5]));


//max min avg 
function maxminavg(arr){
    var max=arr[0];
    var min=arr[0];
    var sum=0;
    var avg;
    for (var i =0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
        sum+=arr[i];

    }
    avg=sum/arr.length;
    console.log(max);
    console.log(min);
    console.log(avg);

}

maxminavg([1,2,3,4,5]);

//shifting

function shifting(arr){
    for(var i =0; i<arr.length-1; i++){
        arr[i]=arr[i+1];
    }
    arr[arr.length-1]=0;
    return arr;
}

console.log(shifting([1,5,10,7,-2]));

//number to string
function numtoString(arr){
    for (var i =0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]='Dojo'
        }
    }
    return arr;
}

console.log(numtoString([-1,2,3,-4,5,-5]));

//random array

function randomArray(){
    var arr =[];
    for(var i =0; i< 10; i++){
        var random_int = Math.floor(Math.random()   * 101);
        arr.push(random_int);
    }
    return arr;
}

console.log(randomArray());


// swap
function swap(arr){
    var temp= arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    return arr;
}
console.log(swap([1,2,3,4,5])); 


//reverse array

function reverse(arr){
    for(var i=0; i<arr.length/2; i++){
        temp=arr[i];
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1]=temp;
    }
    return arr;
}

console.log(reverse([1,2,3,4,5]));

//insert x and y

var arr=[1,3,5,7];
var x=10;
var  y=2;
arr.push(0);
for(var i=arr.length-1; i> y; i--){
    arr[i]=arr[i-1];
}

arr[y] = x;
console.log(arr);


function removeNegetives(arr){
    var numNeg=0;

    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            numNeg++
            console.log('enter');
        }else{
            arr[i-numNeg]=arr[i];
        }
    }

    while(numNeg--){
        arr.pop();
    }

    return arr;
}

console.log(removeNegetives([1,-2,3,-4,5,-6]));


//linear search

function linearSearch(key,arr){
    for(i=0; i<arr.length; i++){
        if(arr[i]===key){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(2,[1,2,3,4,5]));


function factorialI(n){
    var mult=1;

    for(var i=1; i<=n; i++){
        mult*=i;
    }
    return mult;

}

console.log(factorialI(5));


function factorialR(n){
    if (n==1 || n==0){
        return 1;
    }

    return n * factorialR(n-1);
}

console.log(factorialR(5));

//binary search
function binarySearch(key, arr, min=0,max=9){
    if(max<min){
        return -1;
    }
    midpoint = findMidPoint(min,max);

    if(arr[midpoint]<key){
        return binarySearch(key,arr,midpoint+1,max);
    }
    else if(arr[midpoint]>key){
        return binarySearch(key,arr,min, midpoint-1);
    }
    else{
        return midpoint;
    }
}

function findMidPoint(min,max){
    return min + Math.floor((max-min)/2);
}

console.log (binarySearch(4, [1,2,3,4,5,6,7,8,9]));

//bubble sort
function bubbleSort(arr){

    for(var  i=0; i<arr.length -1; i++){
        for(var j=0; j<arr.length-1-i; j++){
            if(arr[j]> arr[j+1]){
                swap(arr, j, j+1);
            }
        }
        
    }
    return arr;
}

//better bubble sort
function betterBubble(arr){
    var count=0;
    do{
        var swapping =false;

        //bubble up the element
        for(var i=0; i<arr.length-1-count; i++){
            if(arr[i]>arr[i+1]){
                swap(arr,i,i+1);
                swapping=true;
            }
        }
        count++;
    }while(swapping===true)
    return arr;
}

function swap(arr, i,j){
    var temp= arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

console.log(betterBubble([6,5,4,3,2,1]));


//Selection Sort
function selectionSort(arr){
    for(var i=0; i<arr.length; i++){
        var minIndex=i;

        for(var j=i; j<arr.length; j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        if(minIndex!==i){
            swap(arr,i,minIndex);
        }
    }
    return arr;
}

function swap(arr, i,j){
    var temp= arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

console.log(selectionSort([5,4,3,2,1]));


//Insertion Sort
function insertionSort(arr){
    for(var i =0; i<arr.length; i++){
        var key=arr[i];

        var j = i-1
        while(j>=0 && key<arr[j]){
            arr[j+1]=arr[j];
            j-=1;
        }
        arr[j+1]=key;

    }
    return arr;
}

console.log(insertionSort([5,4,3,2,1]));

//merge sort
function mergeSort(arr) {
    if (arr.length===1){
        return arr;
    }

    const center =Math.floor(arr.length/2);
    const left =arr.slice(0,center);
    const right =arr.slice (center);

    return merge(mergeSort(left),mergeSort(right));

}

function merge(left, right) {
    const results=[];

    while(left.length && right.length){
        if (left[0] < right[0]){
            results.push(left.shift());
        }else{
            results.push(right.shift());
        }
    }
    return [...results, ...left, ...right];

}

console.log(mergeSort([5,4,3,2,1]));


//quicksort
var items = [5,3,7,6,2,9];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]
