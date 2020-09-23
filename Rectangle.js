let Rectangle = function (w, h) {
    this.getWidth = function () {
        return w
    }
    this.getHeight = function () {
        return h
    }
    this.getArea = function () {
        return w * h
    }
    this.getPerimeter = function () {
        return (w + h) * 2
    }
}
let rectangle2 = new Rectangle(400, 200);
let w = rectangle2.getWidth();
let h = rectangle2.getHeight();
// let area = rectangle2.getArea();
// alert("The area of this rectangle is : " + area);
// let perimeter = rectangle2.getPerimeter();
// alert("The perimeter of this rectangle is : " + perimeter)
let c = document.getElementById("myRectangle");
let ctx = c.getContext("2d");
ctx.beginPath();
ctx.rect(20,20,w,h);
ctx.stroke()
