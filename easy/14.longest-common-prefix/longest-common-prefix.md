# Question's Summary

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
```
Input: ["flower","flow","flight"]
Output: "fl"
Example 2:
```
```
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```
Note:

All given inputs are in lowercase letters a-z.
***
# 思路

定义一个 result 结果

找出最长的相同前缀，循环遍历数组，默认第一项为一开始的结果，后续项用循环把每个字符与 result 中相同索引的字符进行比较

保留相同的字符，变更 result 值，直到遍历结束
