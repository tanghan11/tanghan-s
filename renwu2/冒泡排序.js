
var num = prompt("请输入元素的个数");
var arr = new Array(num);
for (var i = 0; i < num; i++) {
    arr[i] = prompt("请输入第" + (i + 1) + "个元素");
    arr[i] = Number(arr[i]);
}
console.log(arr);
function sortt(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}
sortt(arr);
