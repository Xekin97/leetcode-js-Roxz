# Question's Summary

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:
```
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
```
Example 2:
```
Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
```
Example 3:
```
Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
```
# 思路
  判断两个二叉树是否完全相同——像这种判断是否完全相同的，其实相反就是在找不同。
  
  第一种解法：将整个树 DFS 出每个节点的 val 后按拟定顺序拼接，判断最终结果是否相同，这种方式需要遍历到每个叶子节点之后才能得出结果。
  
  第二种解法：用 BFS 判断每一层的节点们是否一致，一有不同则返回 false，直到遍历完所有节点都相同时，返回true。
  

 
