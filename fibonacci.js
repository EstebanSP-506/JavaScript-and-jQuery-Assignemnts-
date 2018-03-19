
function fibonacho(a){
    var FibArray = [0,1];
    
    if (FibArray[a] == (FibArray.length - 2)){
        var FibArray = [0];
    }
    if (FibArray[a] == (FibArray.length - 1)){
        var FibArray;
    }
    else {
        for(i=FibArray[FibArray.length - 1];i < a;i++){
            var temp = (FibArray[FibArray.length - 1])+(FibArray[FibArray.length - 2]);
            FibArray.push(temp);
        }
    }

console.log("This is the value at the position "+a+" : "+FibArray[a]);
console.log("This is the Fibonnacci array up to",a,":",FibArray);
return FibArray[a];
}
fibonacho(0);
fibonacho(2);
fibonacho(6);
fibonacho(1476);
fibonacho(1477);
