var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var side = document.getElementById("aside");
var body = document.getElementById("body")
const rndom = Math.floor(Math.random() * 1100) + 401;


//btn 2 when have a click, the side bar is block

btn1.style.fontSize ="20px"
  if (btn1.style.fontSize === "20px") {
    btn1.addEventListener("click", function () {
      side.style.display = "block"
      btn1.style.fontSize = "1px"
      btn1.style.animation = "none"
        
      setTimeout(function (){
        btn2.style.animation = "btn2 1s ease"
        console.log(rndom)
        clearTimeout(rndom)
      }, rndom)
      if (true) {
        btn2.addEventListener("click", function() {
         side.style.display = "none"
         btn1.style.fontSize = "21px"
         btn2.style.animation = "none"
         btn1.style.animation = ".5s btn1 ease"
         console.log(rndom)
         clearTimeout(rndom)
        })
      }
    })
  }
  
  
  
  
  
  
