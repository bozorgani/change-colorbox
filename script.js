
const myColor1 =["#fceae5" , "#ffb598" , "#fc6d45" , "#ce190e" , "#370601"];
const myColor2 =["#f7f1ff ", "#e5d3ff" , "#9e74e3" , "#542d91" , "#250852"];
const myColor3 =["#e9f4fd" , "#aedefc ", "#0073d3" , "#014a8d" , "#00122b"];


const btn1 = document.querySelector(".btn1");
btn1.addEventListener('click',function(){
document.querySelector(".box1").style.backgroundColor=myColor1[0];
document.querySelector(".box2").style.backgroundColor=myColor1[1];
document.querySelector(".box3").style.backgroundColor=myColor1[2];
document.querySelector(".box4").style.backgroundColor=myColor1[3];
document.querySelector(".box5").style.backgroundColor=myColor1[4];
});

const btn2 = document.querySelector(".btn2");
btn2.addEventListener('click',function(){
document.querySelector(".box1").style.backgroundColor=myColor2[0];
document.querySelector(".box2").style.backgroundColor=myColor2[1];
document.querySelector(".box3").style.backgroundColor=myColor2[2];
document.querySelector(".box4").style.backgroundColor=myColor2[3];
document.querySelector(".box5").style.backgroundColor=myColor2[4];
});

const btn3 = document.querySelector(".btn3");
btn3.addEventListener('click',function(){
document.querySelector(".box1").style.backgroundColor=myColor3[0];
document.querySelector(".box2").style.backgroundColor=myColor3[1];
document.querySelector(".box3").style.backgroundColor=myColor3[2];
document.querySelector(".box4").style.backgroundColor=myColor3[3];
document.querySelector(".box5").style.backgroundColor=myColor3[4];
});