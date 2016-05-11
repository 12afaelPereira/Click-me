(function(){
	var background;
	var text;

	var colors = ["#FF8F17", "#87CEEB", "#A9A9A9", "#C0C0C0", "#66CDAA", "#D3D3D3", "#FFFACD", "#EEE8AA", "#53DF83", "#66CC99", "#ADD8E6", "#5F9EA0", "#00BFFF", "#6495ED", "#FFD700", "#20B2AA", "#FC575E", "#55C34D"];

	function init(){
		background = document.body;

		text = document.getElementsByClassName("click-me");
		text = text[0];

		text.style.cursor = "pointer";

		text.addEventListener("click", changeBgColor, false);
	}

	function changeBgColor(){
		background.style.background = colors[ Math.floor(Math.random() * colors.length) ];
	}

	window.addEventListener("load", init, false);
})();