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
        apple.decrease;
    }
}

let apple1 = new Apple()
let Adam = new Human("Adam", "Male", 100);
let Eva = new Human("Eva","Female", 70);

// while (apple1.isEmpty() === false){
    Adam.eat(apple1);
    let appleMass = apple1.getWeight()
    document.write(appleMass)
    // Eva.eat(apple1);
    // document.write(apple1.getWeight + "<br>");
// }