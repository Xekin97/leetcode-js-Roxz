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
    var lSum = 0;
    var rStart = null, rSum=0;
    for(var i=0, l=gas.length; i<l; i++) {
      if(rStart === null) rStart=i;
      rSum += (gas[i]-cost[i]);
      if(rSum < 0) {
        lSum += rSum;
        rSum = 0;
        rStart=null;
      }
    }
    return (lSum+rSum >=0)? rStart : -1;
  };