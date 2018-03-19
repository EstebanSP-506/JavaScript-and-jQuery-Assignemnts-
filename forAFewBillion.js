function calculateRewardIn30Days(){
    var reward = 0;
    var penny = 0.01;
    for(var i=1;i<=30;i++){
        reward = reward+penny;
        // console.log('penny for the day '+i+' : '+penny);
        // console.log('Reward at day '+i+' : '+reward);
        penny = 2*penny;
    };
    return reward;
};
console.log('total reward for 30 days '+calculateRewardIn30Days());


function calculateRewardInXDays(x){
    var reward = 0;
    var penny = 0.01;
    for(var i=1;i<=x;i++){
        reward = reward+penny;
        // console.log('penny for the day '+i+' : '+penny);
        // console.log('Reward at day '+i+' : '+reward);
        penny = 2*penny;
    };
    return reward;
};
var a = 1030
console.log('total reward for '+a+' days '+calculateRewardInXDays(a));
var a = 1031
console.log('total reward for '+a+' days '+calculateRewardInXDays(a));


