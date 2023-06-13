const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#cfc9bf",
  "#c4beb4",
  "#bab4aa",
  "#afa9a0",
  "#a59f95",
  "#9a958b",
  "#908b81",
  "#868178",
  "#7c776e",
  "#69645b",
  "#605a52",
  "#565149",
  "#4d4840",
  "#443f37",
  "#3b372f",
  "#332e27",
  "#2a261f",
  "#221e17",
  "#1b170e",
  "#130d00",
  "#000000",
  "#fc03cf"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
