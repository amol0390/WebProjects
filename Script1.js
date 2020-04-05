// document.write("This is external file. I am skeptical about the future of window applicaton");
// document.write(" You can criticize govement or appriciate but can't ignore");

var x, y, x;
x = 10; y = 20;
z = x + y;

function changeHeading() {

    document.getElementById("total").innerHTML = parseInt(document.getElementById("first").value) + parseInt(document.getElementById("second").value);

}

function getCube(n) {

    var i,result;
    result=n;
    for (i = 0; i < 2; i++) {
        result *= n;
    }
    return result;
}
    function test(a) {
        document.getElementById("cuberesult").innerHTML = getCube(a);
    }
