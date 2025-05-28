const input = document.getElementById("input");
const btn = document.getElementById("button");
const sum = document.getElementById("result");

btn.addEventListener("click", () => {
	const query = input.value;
	result.innerHTML = "";

	fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}`)
		.then((res) => res.json())
		.then((data) => {
			sum.innerHTML = "";
			data.results.forEach((item) => {
				const newElement = document.createElement("h4");
				newElement.textContent = item.trackName;
				result.appendChild(newElement);
			});
		})
		.catch(() => {
			sum.textContent = "Terjadi kesalahan saat mengambil data.";
		});

	input.value = "";
});
