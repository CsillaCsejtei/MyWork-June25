//var listItems= document.querySelectorAll("li");
//for(var i=0; i<listItems.length; i++){
//listItems[i].style.color = "blue";
//}

var list = document.querySelector("ul");
list.style.color = "blue";

var widgetEl = document.querySelectorAll(".widget");
widgetEl[0].querySelector("h2").textContent = "Reports";

widgetEl[2].querySelector("p").textContent =
  "Optimise performance metrics here.";
