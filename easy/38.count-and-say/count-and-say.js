/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n == 1) return '1'
    var result = '1'
    var start = 2
    function generate(val) { 
        // 1211  1 => '1'|'1' => last = '1'
        //       2 => '2'|'1' => ret += count + last = '11' count = 1 last = '2'
        //       1 => '1'|'2' => ret += count + last = '1112' count = 1 last = '1'
        //       1 => '1'|'1' => count ++ 
        //       end ret += count + last = '111221'
        var count = 1
        var last = val[0]
        var ret = ''
        var arr = val.split('')
        for (var i = 1, l = arr.length; i < l; i++) {
            if (arr[i] != last) {
                ret += '' + count + last
                count = 1
                last = arr[i]
            } else count ++
        }
        ret += count + last
        return ret
    }
    while (start <= n) {
        result = generate(result)
        start++
    }
    

    return result
};

