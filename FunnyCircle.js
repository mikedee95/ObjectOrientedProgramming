function Circle(x,y,radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}
// function creatCircle(){
//     let ctx = document.getElementById("myCanvas").getContext("2d");
//     let circle = new Circle(500,500,80);
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0 , 2* Math.PI);
//     ctx.fill();
// }
// creatCircle();

// function  creatCircle2(){
//     let ctx = document.getElementById("myCanvas").getContext("2d");
//     let radius = Math.floor(Math.random()*80);
//     let circle2 = new Circle(500,500, radius);
//     ctx.beginPath();
//     ctx.arc(circle2.x, circle2.y, circle2.radius, 0, 2*Math.PI);
//     ctx.fill();
// }
// creatCircle2()

// function getRandomHex(){
//     return Math.floor(Math.random()*255);
// }
// function getRandomColor(){
//     let red = getRandomHex();
//     let green = getRandomHex();
//     let blue = getRandomHex();
//     return "rgb(" + red + "," + green + "," + blue + ")";
// }
// function creatCircle3(){
//     let ctx = document.getElementById("myCanvas").getContext("2d");
//     let radius = Math.floor(Math.random()*80);
//     let color = getRandomColor();
//     let circle3 = new Circle(450,450,radius);
//     ctx.beginPath();
//     ctx.arc(circle3.x, circle3.y, radius, 0, 2*Math.PI);
//     ctx.fillStyle = color;
//     ctx.fill();
// }
// creatCircle3()
