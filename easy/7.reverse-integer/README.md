# Question's Summary

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
```
Input: 123
Output: 321
```

Example 2:
```
Input: -123
Output: -321
```

Example 3:
```
Input: 120
Output: 21
```


Note:


Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.


# 思路

1.先提取当前数字的正负参数

2.把数字转为字符串，分割成数组 reverse() 之后再转为字符串再转换成数字

3.返回正负值乘以转换后的数字


# 优化

1. 提取正负 

2. 将剩余数字转为字符串，新建参数 ret 为字符串

3. 将转换的数字字符串循环， ret = str[i] + ret， 反向拼接字符串

4. 返回正负值乘以 ret
 
