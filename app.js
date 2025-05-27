const input = document.getElementById("input");
const btn = document.getElementById("button");
const sum = document.getElementById("result");

btn.addEventListener("click", () => {
	const query = input.value;

	fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}`)
		.then((res) => res.json())
		.then((data) => {
			sum.innerHTML = "";
			const judulUnik = new Set(); // Set untuk menyimpan judul unik

			data.results.forEach((item) => {
				if (item.trackName && !judulUnik.has(item.trackName)) {
					judulUnik.add(item.trackName); // Tambahkan ke set
					const newElement = document.createElement("h4");
					newElement.textContent = item.trackName;
					sum.appendChild(newElement);
				}
			});
		})
		.catch(() => {
			sum.textContent = "Terjadi kesalahan saat mengambil data.";
		});

	input.value = "";
});

