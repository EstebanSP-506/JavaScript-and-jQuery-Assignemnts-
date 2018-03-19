function rotateLeft(arr){
    var tempFirstValue = arr[0];
    // console.log(tempFirstValue);
    console.log('original array '+arr);
    for (var i = 0 ; i < arr.length ; i++){
        if (i <= arr.length-2){
            arr[i] = arr[i+1];
        }
        else if(i == arr.length-1){
            arr[i] = tempFirstValue;
        }
        console.log('value in position number '+i+' in the array is: '+arr[i]);
    }
    return arr; 
}

console.log('rotated array :'+rotateLeft([1,2,3,4]));