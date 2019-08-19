# Question's Summary

Given an integer, write a function to determine if it is a power of two.

Example 1:
```
Input: 1
Output: true 
Explanation: 20 = 1
```
Example 2:
```
Input: 16
Output: true
Explanation: 24 = 16
```
Example 3:
```
Input: 218
Output: false
```

# 思路
  数学方法，求以 2 为底的 n 的对数是否为整数， 即 log2n % 1 === 0
  
# 坑点

  在 JS 中使用Math.log时返回以 x 为底 y 的对数（即logx y）：
  
  ```
  function getBaseLog(x, y) {
      return Math.log(y) / Math.log(x);
  }
  ```
  
  如果你运行 getBaseLog(10, 1000)，则会返回2.9999999999999996，非常接近实际答案, 原因是浮点数精度问题
  
  所以只能兼容求其是否小于 0.000000001
