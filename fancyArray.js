

var tesArr = [ "James", "Jill", "Jane", "Jack" ];
var testSym = "----->";
var reversedArr = true;
var noReversedArr = false;

function fancyArray(arr,symbol,reversed){
    if (reversed == false){
        for(i=0;i<arr.length;i++){
            console.log(i+' '+symbol+' '+arr[i])
        }
    }
    else if(reversed == true){
            for(i=arr.length-1;i>=0;i--){
            console.log(i+' '+symbol+' '+arr[i])
        }
    }
}


fancyArray(tesArr,testSym,noReversedArr);


fancyArray(tesArr,testSym,reversedArr);


fancyArray(['patito1','patito2','patito3','patito4'],"->",false)
