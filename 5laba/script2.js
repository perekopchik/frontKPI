const mybutton = document.querySelector(".mybutton");

function randomColor(){
	return '#' + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16);
};

mybutton.addEventListener("mouseover", () => {
	mybutton.style.backgroundColor = randomColor()});

mybutton.addEventListener("click", (e) => {
	var mycolor = document.querySelector(".color"); 
	mybutton.style.backgroundColor = mycolor.value;
var dblclick = document.querySelectorAll(".dblclick");
dblclick.forEach((element) => {element.style.backgroundColor = "color";});});

mybutton.addEventListener("dblclick", (e) => { 
var dblclick = document.querySelectorAll(".dblclick"); 
var mycolor = document.querySelector(".color"); 
dblclick.forEach((element) => {element.style.backgroundColor = mycolor.value;});});
