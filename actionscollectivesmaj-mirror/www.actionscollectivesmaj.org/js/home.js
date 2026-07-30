(() => {
	const toggle = document.querySelector(".menu-toggle");
	const menu = document.getElementById("mobile-menu");

	if (!toggle || !menu) return;

	const setMenuState = (open) => {
		toggle.setAttribute("aria-expanded", String(open));
		menu.hidden = !open;
		document.body.classList.toggle("menu-open", open);
		toggle.querySelector("span").textContent = open ? "Закрити" : "Меню";
	};

	toggle.addEventListener("click", () => {
		setMenuState(toggle.getAttribute("aria-expanded") !== "true");
	});

	menu.addEventListener("click", (event) => {
		if (event.target.closest("a")) setMenuState(false);
	});

	document.addEventListener("keydown", (event) => {
		if (event.key !== "Escape" || menu.hidden) return;
		setMenuState(false);
		toggle.focus();
	});

	const desktopQuery = window.matchMedia("(min-width: 761px)");
	const closeAtDesktop = (event) => {
		if (event.matches) setMenuState(false);
	};

	desktopQuery.addEventListener?.("change", closeAtDesktop);
})();
