/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var minPrice = Number.MAX_SAFE_INTEGER
    var maxPrice = 0
    for (var i = 0, l = prices.length; i < l; i++) {
        if (prices[i] < minPrice) minPrice = prices[i]
        else if (prices[i] - minPrice > maxPrice) maxPrice = prices[i] - minPrice
    }
    return maxPrice
};