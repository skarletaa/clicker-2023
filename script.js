let punkti = 0;

let red = 0;
let green = 0;
let blue = 0;

let platums = 200;
let augstums = 200;

function OnButtonClick () {
    punkti += 1;
    document. getElementById ("score"). innerHTML = punkti;

red = getRandomInt(256);
green = getRandomInt(256);
blue = getRandomInt(256);


let rgbCode = "rgb(" + red.toString() + "," + green.toString()  + "," + blue.toString() + "}" ;
    document. getElementById ("button").style.backgroundColor =rgbCode;

    platums -= 5;
    augstums -= 5;

    document. getElementById ("button").style.width = width.toString() + "px";
    document. getElementById ("button").style.height = height.toString() + "px";


}
function getrandomint (max){
    return Math.floor(math.random() * max);


}