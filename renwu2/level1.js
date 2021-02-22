var n = 8;
var arr = new Array();
for (var i = 0; i < n; i++) {
    arr[i] = prompt();
}
function recur(arr) {
    var a = Array.from(new Set(arr))
    var temp = new Array(a.length);
    for (var i = 0; i < a.length; i++) {
        temp[i] = 0;
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < a.length; j++) {
            if (arr[i] == a[j]) {
                temp[j]++;
            }
        }
    }

    for (j = 0; j < temp.length; j++) {
        if (temp[j] > 1) {
            for (i = 0; i < temp[j]; i++) {
                console.log(a[j])
            }
        }
    }
}
recur(arr);
function count(arr) {
    var a = Array.from(new Set(arr))
    var temp = new Array(a.length);
    for (var i = 0; i < a.length; i++) {
        temp[i] = 0;
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < a.length; j++) {
            if (arr[i] == a[j]) {
                temp[j]++;
            }
        }
    }
    console.log(a);
    console.log(temp);
}
count(arr);