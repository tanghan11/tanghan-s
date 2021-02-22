var arr = [[1, 2], [3, 4,], [6, 7, 9, [11, 12, [12, 13, [14]]]], 10]
function delayering(a) {
    var ar = []
    a.map(
        function v(i) {
            function c(i) {
                if (Array.isArray(i)) ar = ar.concat(arr1(i))
                else  ar.push(i)
            }
            return c(i)
        }
    )
    return ar
}
console.log(delayering(arr));