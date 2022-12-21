const btn = document.getElementById("menu_btn");
const nav = document.getElementById("menu");
const body = document.getElementById("hideBody");

btn.addEventListener("click", () => {
	btn.classList.toggle("open");
	nav.classList.toggle("flex");
	nav.classList.toggle("hidden");
	body.classList.toggle("hidden");
});