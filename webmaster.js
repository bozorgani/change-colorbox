var idArray = [".box1", ".box2", ".box3", ".box4", ".box5"];
const myColor1 =["#fceae5" , "#ffb598" , "#fc6d45" , "#ce190e" , "#370601"];
const myColor2 =["#f7f1ff ", "#e5d3ff" , "#9e74e3" , "#542d91" , "#250852"];
const myColor3 =["#e9f4fd" , "#aedefc ", "#0073d3" , "#014a8d" , "#00122b"];



document.querySelector(".btn1").onclick = function () {
    for (i = 0; i < idArray.length; i++) {
        document.querySelector(idArray[i]).style.backgroundColor =
        myColor1[i];
    }
    };
  
    document.querySelector(".btn2").onclick = function () {
    for (i = 0; i < idArray.length; i++) {
        document.querySelector(idArray[i]).style.backgroundColor =
        myColor2[i];
    }
    };

    document.querySelector(".btn3").onclick = function () {
    for (i = 0; i < idArray.length; i++) {
        document.querySelector(idArray[i]).style.backgroundColor =
        myColor3[i];
    }
    };
