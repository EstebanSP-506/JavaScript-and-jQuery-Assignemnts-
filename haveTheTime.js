var HOUR = 12;
var MINUTE = 45;
var PERIOD = "PM";

// If minutes less than 30, "just after" the hour, more than 30, "almost" the next hour
// AM / PM, "in the morning", "in the evening",

var TIME1 = "";
var TIME2 = "";
var TIME3 = "";

// Bonus (Only If You Have Time):
//     Add functionality for "quarter after", "half past", "5 after" ...
//     Distinguish between "in the afternoon", "at night", "noon", "midnight" ...

if(PERIOD == "AM"){
    TIME3 = "in the morning";
    if (PERIOD == "AM" && HOUR == 12){
        TIME3 = "midnight"
    }
}
else if(PERIOD == "PM"){
    TIME3 = "in the evening";
    if (PERIOD == "PM" && HOUR == 12){
        TIME3 = "noon"
    }
    else if (PERIOD == "PM" && HOUR < 6){
        TIME3 = "in the afternoon";
    }
    else if (PERIOD == "PM" && HOUR > 6){
        TIME3 = "at night";
    }
}

if(MINUTE == 5){
    TIME1 = "5 past";
    TIME2 = HOUR;
}
else if (MINUTE==15){
    TIME1 = "quarter past";
    TIME2 = HOUR;
}
else if (MINUTE==30){
    TIME1 = "half past";
    TIME2 = HOUR;
}
else if (MINUTE==45){
    TIME1 = "quarter to";
    TIME2 = HOUR+1;
    if (MINUTE==45 && HOUR == 12){
        TIME1 = "quarter to";
        TIME2 = 1;
        if(PERIOD == "PM"){
            TIME3 = "in the afternoon";
            }
        else {
        TIME3 = "in the morning";
        }
    }
}
else if (MINUTE > 30){
    TIME1 = "almost";
    TIME2 = HOUR+1;
    if (MINUTE > 30 && HOUR == 12){
        TIME1 = "almost";
        TIME2 = 1;
        if(PERIOD == "PM"){
        TIME3 = "in the afternoon";
        }
        else {
        TIME3 = "in the morning";
        }
    }
}
else if (MINUTE<30){
    TIME1 = "just after";
    TIME2 = HOUR;
}
console.log ("It's",TIME1,TIME2,TIME3);