const backToTopButton = $("a#back-to-top");
window.addEventListener("scroll", () => {
	let top = wn.scrollY;
	let off = $("section#services").offsetTop - 100;
	console.log(top, off);

	if (top >= off) {
		backToTopButton.className = "active";
	} else {
		backToTopButton.className = "hidden";
	}
});
