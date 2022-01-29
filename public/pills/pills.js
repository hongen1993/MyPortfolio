function pillB(){
    var bOn = document.getElementById('blueO');
    bOn.classList.add("blueOn");
}
function pillR(){
    var rOn = document.getElementById('redO');
    rOn.classList.add("redOn");
}
function removeLine() {
var lineRemover = document.getElementById('textWritter');
lineRemover.classList.remove("lineborder");
};
function displayTextTwo() {
var display = document.getElementById('textWritterTwo');
display.classList.add("displaytextTwo");
};
function removeLineTwo() {
var lineRemoverTwo = document.getElementById('lineborderTwoX');
lineRemoverTwo.classList.remove("lineborderTwo");
};
function displayTextThree() {
var displayThird = document.getElementById('textWritterThree');
displayThird.classList.add("displaytextThree");
};
function removeLineThree() {
var lineRemoverThree = document.getElementById('textWritterThree');
lineRemoverThree.classList.remove("lineborderThree");
};
function displayTextFour() {
var displayF = document.getElementById('textWritterFour');
displayF.classList.add("displaytextFour");
};

window.onload =setTimeout(pillB,6800), setTimeout(removeLine, 7000), setTimeout(displayTextTwo,7000), setTimeout(removeLineTwo,10300), setTimeout(displayTextThree,10300), setTimeout(pillR,13500), setTimeout(removeLineThree,14000), setTimeout(displayTextFour,14000);
