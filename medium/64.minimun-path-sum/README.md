# Question's Summary

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:
```
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
```

# 思路

### 动态规划

此类题属于涉及动态规划的范畴中。动态规划，即当一个问题可以分解成若干个子问题进行求解后，小问题的解合并起来即为原题解。
  
面对动态规划的题目，有两种常用的思路：广度优先遍历(BFS)和深度优先遍历(DFS)。

深度优先遍历，指先从根节点先往下一直查找到叶子节点（边缘节点），然后讲结果回溯回根节点，再进行下一分支的查找，一般是通过递归函数的方式。

广度优先遍历，则是对当前层次查找所有节点进行处理，遵循先进先出的原则，直到找到最终的结果为止

### 回归题目

回到题目，我们看到我们如果需要求 grid 中左上角到右下角的最小距离，通常来说，首先想到的是先获取所有路径，取路径最小值。

这种情况下使用 DFS 不太合适，因为你需要走完所有的路径再通过对比所有结果，才能拿到最后的答案，而不能在找到正确结果后立即停止查找。

所以我们使用 BFS 的方式

在这里，首先我们已知节点的下一步方向只能往右或者往下。所以我们可以将每个节点都算成路径值的最小和，最后得出我们的目标值则被算成我们所需要的结果。

在代码中，我是从目标开始遍历回原点，顺序上两边都是可以的，下面是代码的思路

... 未完
  
  

 
