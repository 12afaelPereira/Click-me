
const background = document.querySelector("body");
const click = document.querySelector(".click-me");

let colors = ["#FF8F17", "#87CEEB", "#A9A9A9", "#C0C0C0", "#66CDAA", "#D3D3D3", "#C0BA78", "#EEE8AA", "#53DF83", "#66CC99", "#ADD8E6", "#5F9EA0", "#00BFFF", "#6495ED", "#FFD700", "#20B2AA", "#FC575E", "#55C34D"];

click.style.cursor = "pointer";

function changeBgColor() {
	background.style.background = colors[Math.floor(Math.random() * colors.length)];
}


click.addEventListener("click", changeBgColor, false);