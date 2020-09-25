function Apple() {
    this.weight = 15;
    this.decrease = function () {
        if (this.weight > 0)
            this.weight--

    }
    this.isEmpty = function () {
        return (this.weight === 0)
    }
    this.getWeight = function (){
        return this.weight
    }
}

function Human(name,gender,weight){
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.eat = function (apple){
        this.weight++;
        apple.decrease();
    }
}

let apple1 = new Apple()
let Adam = new Human("Adam", "Male", 100);
let Eva = new Human("Eva","Female", 70);

let myInterval = setInterval(function () {
    if (AdamTurn) {
        Adam.eat(apple1);
        document.write("Adam eat the apple, the remaining apple mass is " + apple1.getWeight() + "<br>");

        document.write("Adam says:" + Adam.say("Hello") + "<br>");

    }
    Eva.eat(apple1);
    document.write("Eva eat the apple, the remaining apple mass is " + apple1.getWeight() + "<br>");
    document.write("Eve says:" + Adam.say("Hello") + "<br>");
    if (apple1.isEmpty()) {
        clearInterval(myInterval)
    }
}, 1000)
