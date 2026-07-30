(() => {
	document.documentElement.classList.add("js");

	const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const button = document.querySelector(".menu-button");
	const menu = document.getElementById("menu");
	const pageMain = document.querySelector("main");
	const pageFooter = document.querySelector(".footer");
	const logo = document.querySelector(".header .logo");
	const contact = document.querySelector(".header__contact");
	let closeTimer;

	if (button && menu) {
		const setPageInert = (inert) => {
			[pageMain, pageFooter, logo, contact].forEach((element) => {
				if (element) element.inert = inert;
			});
		};

		const setOpen = (open, restoreFocus = false) => {
			window.clearTimeout(closeTimer);
			button.setAttribute("aria-expanded", String(open));
			button.querySelector(".menu-button__label").textContent = open ? "Закрити" : "Меню";
			document.body.classList.toggle("menu-open", open);

			if (open) {
				setPageInert(true);
				menu.hidden = false;
				requestAnimationFrame(() => {
					menu.classList.add("is-open");
					menu.querySelector("a")?.focus();
				});
				return;
			}

			menu.classList.remove("is-open");
			const finishClose = () => {
				setPageInert(false);
				menu.hidden = true;
				if (restoreFocus) button.focus();
			};

			if (reduceMotion) finishClose();
			else closeTimer = window.setTimeout(finishClose, 500);
		};

		button.addEventListener("click", () => {
			const open = button.getAttribute("aria-expanded") !== "true";
			setOpen(open, !open);
		});

		menu.addEventListener("click", (event) => {
			if (event.target.closest("a")) setOpen(false);
		});

		document.addEventListener("keydown", (event) => {
			if (event.key !== "Escape" || menu.hidden) return;
			setOpen(false, true);
		});
	}

	const hero = document.querySelector(".hero");
	if (hero) {
		requestAnimationFrame(() => {
			requestAnimationFrame(() => hero.classList.add("is-ready"));
		});
	}

	const revealItems = [
		...document.querySelectorAll("[data-reveal], [data-media-reveal]"),
	];

	const markVisible = (item) => item.classList.add("is-visible");

	if (reduceMotion || !("IntersectionObserver" in window)) {
		revealItems.forEach(markVisible);
	} else {
		const revealObserver = new IntersectionObserver(
			(entries, observer) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;
					markVisible(entry.target);
					observer.unobserve(entry.target);
				});
			},
			{
				rootMargin: "0px 0px -5% 0px",
				threshold: 0.01,
			}
		);

		revealItems.forEach((item) => {
			const rect = item.getBoundingClientRect();
			const inView = rect.top < window.innerHeight * 0.95 && rect.bottom > 0;
			if (inView) markVisible(item);
			else revealObserver.observe(item);
		});
	}

	const parallaxItems = [...document.querySelectorAll("[data-parallax]")];
	if (!reduceMotion && parallaxItems.length) {
		let frameRequested = false;

		const updateParallax = () => {
			frameRequested = false;
			const viewportHeight = window.innerHeight;

			parallaxItems.forEach((item) => {
				const rect = item.getBoundingClientRect();
				if (rect.bottom < 0 || rect.top > viewportHeight) return;

				const progress =
					(rect.top + rect.height / 2 - viewportHeight / 2) /
					(viewportHeight + rect.height);
				const shift = Math.max(-24, Math.min(24, progress * -48));
				item.querySelector("img")?.style.setProperty("--parallax-y", `${shift}px`);
			});
		};

		const requestParallax = () => {
			if (frameRequested) return;
			frameRequested = true;
			requestAnimationFrame(updateParallax);
		};

		updateParallax();
		window.addEventListener("scroll", requestParallax, { passive: true });
		window.addEventListener("resize", requestParallax);
	}
})();
