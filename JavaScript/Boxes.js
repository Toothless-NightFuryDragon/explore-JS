alert("Yoo");
var x = confirm("Want to proceed with BLUE Background??");
if(x){
document.getElementsByTagName("body")[0].style.backgroundColor="lightblue";
}
var y = prompt("Want to proceed with different Background color?? Enter your choice of color","pink");
if(y){
document.getElementsByTagName("body")[0].style.backgroundColor=y;
}
