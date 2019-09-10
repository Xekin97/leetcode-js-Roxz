/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // counting primes: sieve of eratosthenes
    var count = 0;
    
    var mark = new Array(n + 1).fill(false);
    for(let i = 2; i < n; i++) {
        if(!mark[i]) {
            for(let j = i*i; j < n; j += i) {
                mark[j] = true;
            }
            count++;
        }
    }
    return count;
};