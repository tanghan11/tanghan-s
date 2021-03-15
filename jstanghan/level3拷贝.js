function Animal() {
    this.species = "动物";
}
Animal.prototype.species = "动物";

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

function Coln(child, parent) {
    for (var x in parent.prototype) {
        child.prototype[x] = parent.prototype[x];
    }
}

Coln(Cat, Animal);
var cat1 = new Cat("xiaoming", 'grey');
console.log(cat1.species);