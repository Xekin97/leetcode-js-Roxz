/*
 * @lc app=leetcode id=134 lang=javascript
 *
 * [134] Gas Station
 */
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    /**
     * Input: 
     * gas  = [1,2,3,4,5]
     * cost = [3,4,5,1,2]
     */
    var l = gas.length
    for(var i = 0; i < l; i++) {
        var tank = 0;
        var complete = 1;
        for(var j = 0; j < l; j++) {
            tank += gas[(j+i)%l];
            if(tank < cost[(j+i)%l]) {
                complete = 0;
                break;
            }
            else tank -= cost[(j+i)%l];
        }
        if(complete) return i;
    }
    
    return -1;
};