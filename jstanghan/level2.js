var arr = [1, [2, [3, [4, 5]]], 6];
var arrx = [];

function even(arr) {
    //你的代码
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) //判断是不是数组，是数组则递归
        {
            even(arr[i]);
        } else {
            arrx.push(arr[i]);
        }
    }

}
even(arr); //[1,2,3,4,5,6]
console.log(arrx);