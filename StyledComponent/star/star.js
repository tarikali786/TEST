let scrolled = false;

function stars() {
  if (scrolled) {
    let e = document.createElement("div");
    e.setAttribute("class", "star");
    document.body.appendChild(e);
    e.style.left = Math.random() * +innerWidth + "px";
    let size = Math.random() * 12;
    e.style.fontSize = 12 + size + "px";
    e.style.fontSize = 6 + size + "px";

    setTimeout(function () {
      document.body.removeChild(e);
    }, 10000); 
  }
}

setInterval(function () {
  stars();
}, 100);

window.addEventListener("scroll", function () {
  scrolled = true;
});
