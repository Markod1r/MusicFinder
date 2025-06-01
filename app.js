const input = document.getElementById("input");
const btn = document.getElementById("button");
const sum = document.getElementById("result");

class Api {
	constructor(url) {
		this.url = url;
	}
}

btn.addEventListener("click", () => {
	result.innerHTML = "";
	const itunes = new Api(`https://itunes.apple.com/search?term=${encodeURIComponent(input.value)}`);

	fetch(itunes.url)
		.then((res) => res.json())
		.then((data) => {
			sum.innerHTML = "";
			data.results.forEach((item) => {
				const newImg = document.createElement("img");
				newImg.src = item.artworkUrl100;

				const newElement = document.createElement("h4");
				newElement.textContent = item.trackName + " - " + item.artistName;
				newElement.classList.add("song-title");

				const parent = document.createElement("div");
				parent.classList.add("song-item");

				parent.appendChild(newImg);
				parent.appendChild(newElement);
				result.appendChild(parent);
			});
		})
		.catch(() => {
			sum.textContent = "Terjadi kesalahan saat mengambil data.";
		});

	input.value = "";
});
