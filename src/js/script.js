const sideBar = document.getElementById("sidebar");
const sideMenu = document.querySelectorAll(".side-menu li");
let hours = new Date().getHours();
const checkbox = document.getElementById("checkbox");
const themeToggle = document.getElementById("theme-toggle");
const burgerMenu = document.getElementById("navMenu");
let realtime = document.getElementById("realtime");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
	body.classList.add("dark");
}

sideMenu.forEach((i) => {
	i.addEventListener("click", () => {
		i.classList.toggle("active");

		document.addEventListener("click", (e) => {
			if (!i.contains(e.target)) {
				i.classList.remove("active");
			}
		});
	});
});

themeToggle.addEventListener("click", (e) => {
	const moonIco = document.querySelector(".fa-moon");
	const sunIco = document.querySelector(".fa-sun");
	const ballToggle = document.querySelector(".ball");

	document.body.classList.toggle("dark");
	ballToggle.classList.add("active");

	if (checkbox.checked === false) {
		moonIco.classList.add("active");
		sunIco.classList.remove("active");
	} else if (checkbox.checked === true) {
		sunIco.classList.add("active");
		moonIco.classList.remove("active");
	}

		if (!body.classList.contains("dark")) {
		localStorage.setItem("mode", "light-mode");
	} else {
		localStorage.setItem("mode", "dark-mode");
	}

	// if (moonIco.contains(e.target)) {
	// 	sunIco.classList.add("active");
	// 	moonIco.classList.remove("active");
	// } else {
	// 	moonIco.classList.add("active");
	// 	sunIco.classList.remove("active");
	// }
});

burgerMenu.addEventListener("click", () => {
	sideBar.classList.toggle("close");
});

if (hours > 6 && hours < 17) {
	checkbox.checked = false;
} else {
	checkbox.checked = true;
}

if (checkbox.checked) {
	document.body.classList.add("dark");
	const moonIco = document.querySelector(".fa-moon");
	moonIco.classList.add("active");
} else {
	document.body.classList.remove("dark");
	const sunIco = document.querySelector(".fa-sun");
	sunIco.classList.add("active");
}

setInterval(() => {
	const realtime = document.getElementById("realtime");
	let date = new Date();
	let hour = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	realtime.textContent = hour + " : " + minutes + " : " + seconds;
});
