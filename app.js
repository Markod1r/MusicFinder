const prompt = require("prompt-sync")();

let query = prompt();
fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}`)
	.then((res) => res.json())
	.then((display) => console.log(display))
	.catch((error) => console.error(error));

/* const inp = document.getElementById("input");
const btn = document.getElementById("button");
const sum = document.getElementById("result");

btn.addEventListener("click", (a) => {}); */