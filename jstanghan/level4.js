var data = {
    age: 18,
    name: "liuruchao",
    education: ["小学", "初中", "高中", "大学", undefined, null],
    likesFood: new Set(["fish", "banana"]),
    friends: [
        { name: "summer", sex: "woman" },
        { name: "daWen", sex: "woman" },
        { name: "yang", sex: "man" }
    ],
    work: {
        time: "2019",
        project: { name: "test", obtain: ["css", "html", "js"] }
    },
    play: function() { console.log("玩滑板"); }
}

function deepClone(data) {
    let result = isAr(data) ? [] : {};
    for (i in data) {
        result[i] = isObj(data[i]) ? deepClone(data[i]) : data[i];
    }
    return result;
}

function isObj(data) {
    return ((typeof data === "object" || typeof data === "function") && typeof data != null);
}

function isAr(data) {
    return Array.isArray(data);
}


console.log(data);
let x = deepClone(data);
x.age = 20;
x.name = "tanghan"
console.log(x); //验证