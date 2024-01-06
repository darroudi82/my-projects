function a() {

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    var result = document.getElementById("result");
    var re = num1 + num2;
    result.innerHTML = re;
}
var but = document.getElementById("button");
but.onclick = a;


function b() {
    var name = document.getElementById("name").value;
    var p1 = document.getElementById("p1");

    var family = document.getElementById("family").value;
    var p2 = document.getElementById("p2");

    var pass = document.getElementById("pass").value;
    var p3 = document.getElementById("p3");


    if (name != "mahdi") {
        p1.innerHTML = " your name is false";
    }
    if (family != "darroudi") {
        p2.innerHTML = " your family is false";
    }
    if (name != 2552) {
        p3.innerHTML = " your password is false";
    }
}
var but2 = document.getElementById("button2");
but2.onclick = b;