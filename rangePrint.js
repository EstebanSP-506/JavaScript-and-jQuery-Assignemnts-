//print a range from "startPoint" to "endPoint" (not inclusive); with an skip amount of "skip"

// Bonus (Only If You Have Time):

//     Make sure it works for negative numbers
//     If the user doesn't pass a skip amount, make it default to 1 (printRange(4, 8); would print 4, 5, 6, 7)
//     If the user doesn't pass an end point, make it start at 0, and end at the first (printRange(4); would print 0, 1, 2, 3)
function printRange(startPoint, endPoint,skip){
    if(typeof(skip)==="number"){
        for(var i=startPoint;i<endPoint;i=i+skip){
            console.log(i);
        }}
    else{
        if(typeof(endPoint)==="number"){
            for(var i=startPoint;i<endPoint;i++){
                console.log(i);
            }
        }
        else {
            for(var i=0;i<startPoint;i++){
                console.log(i);
            }            
        }
    }    
};

console.log("test0");
printRange(-92, 10, 3);

console.log("test1");

printRange(2, 10);

 console.log("test2 ");
 printRange(6);
 console.log("test3 ");
 
 printRange(2, 10,"NOT A NUMBER");
 console.log("test4 ");
 
printRange(6,"NOT A NUMBER","NOT A NUMBER");
