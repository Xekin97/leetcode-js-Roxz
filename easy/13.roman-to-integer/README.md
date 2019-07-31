# Question's Summary

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

  I can be placed before V (5) and X (10) to make 4 and 9. 
  X can be placed before L (50) and C (100) to make 40 and 90. 
  C can be placed before D (500) and M (1000) to make 400 and 900.
  
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Example 1:
```
Input: "III"
Output: 3
```
Example 2:
```
Input: "IV"
Output: 4
```
Example 3:
```
Input: "IX"
Output: 9
```
Example 4:
```
Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
```
Example 5:
```
Input: "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```
***
# 思路

定义一个编码对应数字的对象，

对传入字符串进行循环遍历，如果要转成数组，可以直接 reduce 处理

如过不转 直接取字符串 length 进行循环


过程思路是，

定义一个总和 sum 初始值为 0，

当对应的编码值比下个字符对应的值少时，sum 要减去当前值，反之则加上当前值


例如 XCVI 中 

  X(10) 比 C(100) 小，sum 值为 -10， C(100) 值比 V(5) 大， sum值为 -10 + 100 = 90
  
  V(5) 比 I(1) 大， sum 值为 95 ， 当没有下一个字符时，默认下一个值为最低的 0
  
  此时 I(1) 比 0 大， sum 值最终为 96
  

 
