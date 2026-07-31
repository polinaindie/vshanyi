/* Вшануй: CTA, поява секцій і напрямки (sticky-скрол → горизонталь). */
(() => {
	const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	/* Hero inspired by REF: monumental wordmark, compact index, one documentary still. */
	const pageHeader = document.querySelector(".page__header");
	const pageContent = document.getElementById("page-content");
	const originalHero = document.querySelector(".home__hero");

	if (pageHeader && pageContent && originalHero) {
		pageHeader.classList.add("ref-header");

		if (!document.querySelector(".vshanuy-skip-link")) {
			const skipLink = document.createElement("a");
			skipLink.className = "vshanuy-skip-link";
			skipLink.href = "#page-content";
			skipLink.textContent = "Перейти до основного вмісту";
			document.body.prepend(skipLink);
		}

		const headerInner = pageHeader.querySelector(".page__header__inner");
		const headerActions = headerInner?.querySelector(".header__nav");
		if (headerInner && headerActions && !headerInner.querySelector(".ref-header__links")) {
			const primaryNav = document.createElement("nav");
			primaryNav.className = "ref-header__links";
			primaryNav.setAttribute("aria-label", "Основна навігація");
			primaryNav.innerHTML = `
				<a href="#about">Про нас</a>
				<a href="#directions">Напрямки</a>
				<a href="#guides">Посібники</a>
				<a href="#partners">Партнери</a>
			`;
			headerInner.insertBefore(primaryNav, headerActions);
		}

		const hero = document.createElement("section");
		hero.className = "home__hero ref-hero bg--orange";
		hero.id = "top";
		hero.setAttribute("aria-labelledby", "hero-title");
		hero.innerHTML = `
			<div class="ref-hero__intro wrp">
				<div class="ref-hero__statement">
					<p class="ref-hero__eyebrow">Памʼять — це щоденна дія. Ми формуємо сучасну українську культуру памʼяті.</p>
					<h1 id="hero-title">Пам'ятай про полеглих — допомагай живим.</h1>
				</div>
			</div>
			<figure class="ref-hero__media">
				<img
					src="../img/07-IMG_2729.jpg"
					alt="Учасниці щоденної Хвилини мовчання тримають плакати на міській вулиці"
					width="1600"
					height="1066"
					loading="eager"
					fetchpriority="high"
					decoding="async"
				>
				<figcaption>Київ · 2024 · Хвилина мовчання</figcaption>
			</figure>
		`;
		originalHero.replaceWith(hero);
	}

	/* Telha Clarke-inspired "All Work" field, rebuilt with Vshanuy content. */
	const directionsSection = document.getElementById("directions");
	const heroTarget = document.querySelector(".ref-hero");
	if (directionsSection && heroTarget && !document.querySelector(".vshanuy-work-field")) {
		const workImages = [
			["../img/02-481A1475.jpg", "small", "18"],
			["../img/07-IMG_2729.jpg", "large", "42"],
			["../img/09-IMG_3433.jpg", "medium", "28"],
			["../img/11-IMG_3438.jpg", "small", "20"],
			["../img/14-IMG_5113.jpg", "medium", "32"],
			["../img/15-IMG_6789.jpg", "large", "46"],
			["../img/16-IMG_8367.jpg", "small", "22"],
			["../img/25-IMG_8712.jpg", "medium", "30"],
			["../img/26-IMG_8716.jpg", "large", "48"],
			["../img/27-IMG_9225-1.jpg", "small", "24"],
		];

		const workField = document.createElement("section");
		workField.className = "vshanuy-work-field";
		workField.id = "top";
		workField.setAttribute("aria-labelledby", "all-work-title");
		workField.innerHTML = `
			<div class="vshanuy-work-field__cta">
				<h1 id="all-work-title">
					<a href="#directions">
						<span>Усі проєкти</span>
						<sup>(08)</sup>
					</a>
				</h1>
			</div>
			<div class="vshanuy-work-field__images" aria-hidden="true">
				${workImages
					.map(
						([src, size, depth], index) => `
							<figure class="vshanuy-work-field__image vshanuy-work-field__image--${size}" data-work-depth="${depth}">
								<img src="${src}" alt="" width="${index === 9 ? 1077 : 1600}" height="${index === 9 ? 1600 : 1066}" loading="lazy" decoding="async">
							</figure>
						`
					)
					.join("")}
			</div>
		`;
		heroTarget.replaceWith(workField);

		if (!reduceMotion) {
			const fieldImages = [...workField.querySelectorAll("[data-work-depth]")];
			let workTicking = false;
			let pointerX = 0;
			let pointerY = 0;

			const paintWorkField = () => {
				workTicking = false;
				const rect = workField.getBoundingClientRect();
				const progress = Math.min(
					1,
					Math.max(0, (window.innerHeight - rect.top) / (rect.height + window.innerHeight))
				);
				const centered = progress - 0.5;

				fieldImages.forEach((image, index) => {
					const depth = Number(image.dataset.workDepth) || 20;
					const direction = index % 2 === 0 ? 1 : -1;
					image.style.setProperty(
						"--work-scroll-y",
						`${(centered * depth * 3.5 * direction).toFixed(2)}px`
					);
					image.style.setProperty(
						"--work-pointer-x",
						`${(pointerX * depth * 0.35).toFixed(2)}px`
					);
					image.style.setProperty(
						"--work-pointer-y",
						`${(pointerY * depth * 0.25).toFixed(2)}px`
					);
				});
			};

			const requestWorkPaint = () => {
				if (workTicking) return;
				workTicking = true;
				window.requestAnimationFrame(paintWorkField);
			};

			workField.addEventListener("pointermove", (event) => {
				if (!window.matchMedia("(min-width: 981px)").matches) return;
				const rect = workField.getBoundingClientRect();
				pointerX = (event.clientX - rect.left) / rect.width - 0.5;
				pointerY = (event.clientY - rect.top) / rect.height - 0.5;
				requestWorkPaint();
			});
			workField.addEventListener("pointerleave", () => {
				pointerX = 0;
				pointerY = 0;
				requestWorkPaint();
			});
			window.addEventListener("scroll", requestWorkPaint, { passive: true });
			window.addEventListener("resize", requestWorkPaint);
			paintWorkField();
		}
	}

	const breathing = [...document.querySelectorAll("[data-breathe]")];
	if (breathing.length) {
		const show = (node) => node.classList.add("is-breathed");
		if (reduceMotion || !("IntersectionObserver" in window)) {
			breathing.forEach(show);
		} else {
			document.documentElement.classList.add("js-breathe");
			const observer = new IntersectionObserver(
				(entries, obs) => {
					entries.forEach((entry) => {
						if (!entry.isIntersecting) return;
						show(entry.target);
						obs.unobserve(entry.target);
					});
				},
				{ rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
			);
			breathing.forEach((node) => {
				const rect = node.getBoundingClientRect();
				if (rect.top < window.innerHeight && rect.bottom > 0) show(node);
				else observer.observe(node);
			});
		}
	}

	/* Hero: кадри проходять поверх гасла, останній завершує рух на кінці runway. */
	const heroScroll = document.querySelector("[data-hero-scroll]");
	heroScroll?.querySelector(".home__hero__column--right")?.remove();
	const heroFrames = heroScroll
		? [...heroScroll.querySelectorAll(".vshanuy-hero__frame")]
		: [];
	const heroPhotoPool = [
		{
			src: "../img/02-481A1475.jpg",
			alt: "Освітня зустріч або лекція для бізнесу",
			width: 1600,
			height: 1066,
		},
		{
			src: "../img/07-IMG_2729.jpg",
			alt: "Жінки тримають плакати під час щоденної Хвилини мовчання",
			width: 1600,
			height: 1066,
		},
		{
			src: "../img/09-IMG_3433.jpg",
			alt: "Памʼятний знак у міському просторі",
			width: 1066,
			height: 1600,
		},
		{
			src: "../img/11-IMG_3438.jpg",
			alt: "Люди стоять у тиші на міській вулиці",
			width: 1600,
			height: 1066,
		},
		{
			src: "../img/14-IMG_5113.jpg",
			alt: "Співпраця з партнерами та інституціями",
			width: 1600,
			height: 1066,
		},
		{
			src: "../img/15-IMG_6789.jpg",
			alt: "Учасниця хвилини мовчання тримає руку на серці",
			width: 1600,
			height: 1064,
		},
		{
			src: "../img/16-IMG_8367.jpg",
			alt: "Спільнота зібралася просто неба на фестивалі памʼяті",
			width: 1600,
			height: 1017,
		},
		{
			src: "../img/25-IMG_8712.jpg",
			alt: "Особиста історія в просторі памʼяті",
			width: 1600,
			height: 1066,
		},
		{
			src: "../img/26-IMG_8716.jpg",
			alt: "Люди зупинилися на міській площі під час хвилини мовчання",
			width: 1600,
			height: 1066,
		},
		{
			src: "../img/27-IMG_9225-1.jpg",
			alt: "Портрет Ірини «Чеки» Цибух",
			width: 1077,
			height: 1600,
		},
	];

	for (let index = heroPhotoPool.length - 1; index > 0; index -= 1) {
		const randomIndex = Math.floor(Math.random() * (index + 1));
		[heroPhotoPool[index], heroPhotoPool[randomIndex]] = [
			heroPhotoPool[randomIndex],
			heroPhotoPool[index],
		];
	}

	/* На першому екрані завжди три великі горизонтальні фото. */
	heroPhotoPool.sort(
		(first, second) =>
			Number(second.width >= second.height) -
			Number(first.width >= first.height)
	);

	heroFrames.forEach((frame, index) => {
		frame.querySelector("figcaption")?.remove();
		const image = frame.querySelector("img");
		const photo = heroPhotoPool[index];
		if (!image || !photo) return;
		image.src = photo.src;
		image.alt = photo.alt;
		image.width = photo.width;
		image.height = photo.height;
	});

	if (heroScroll && heroFrames.length && !reduceMotion) {
		const travel = 120;
		const heroStyle = getComputedStyle(heroScroll);
		/* Кілька перших кадрів уже в екрані; решта входять під час скролу. */
		const span = Number.parseFloat(heroStyle.getPropertyValue("--hero-span")) || 2.2;
		const spacing =
			Number.parseFloat(heroStyle.getPropertyValue("--hero-spacing")) || 0.55;
		const startOffset =
			Number.parseFloat(heroStyle.getPropertyValue("--hero-start-offset")) || 1.65;
		const total =
			span - startOffset + (heroFrames.length - 1) * spacing;
		const initialShifts = [];
		let heroTicking = false;

		heroScroll.style.setProperty("--hero-frames", String(heroFrames.length));
		heroScroll.style.setProperty("--hero-runway", total.toFixed(2));

		const measureInitialComposition = () => {
			const title = heroScroll.querySelector(".hero__title");
			if (!title || heroFrames.length < 2) return;

			const titleRect = title.getBoundingClientRect();
			/* Запас враховує винос гліфів важкого шрифту за межі line box. */
			const gap = Math.max(36, Math.min(64, window.innerHeight * 0.05));
			const headerBottom =
				document.querySelector(".page__header")?.getBoundingClientRect().bottom || 0;
			heroFrames.slice(0, 3).forEach((frame) => frame.style.removeProperty("width"));

			const placeInBand = (frame, index, bandStart, bandEnd) => {
				let frameRect = frame.getBoundingClientRect();
				const available = Math.max(36, bandEnd - bandStart);

				if (frameRect.height > available) {
					const fittedWidth = Math.max(
						54,
						frameRect.width * (available / frameRect.height)
					);
					frame.style.width = `${fittedWidth.toFixed(2)}px`;
					frameRect = frame.getBoundingClientRect();
				}

				const top =
					bandStart + Math.max(0, (bandEnd - bandStart - frameRect.height) / 2);
				initialShifts[index] =
					top - (window.innerHeight - frameRect.height) / 2;
			};

			/* Два верхні фото живуть між шапкою і гаслом. */
			[0, 1].forEach((index) => {
				placeInBand(
					heroFrames[index],
					index,
					headerBottom + 16,
					titleRect.top - gap
				);
			});

			/* Третє фото — під гаслом до нижнього краю екрана. */
			placeInBand(
				heroFrames[2],
				2,
				titleRect.bottom + gap,
				window.innerHeight - 16
			);
		};

		const paintHero = () => {
			heroTicking = false;
			const rect = heroScroll.getBoundingClientRect();
			const range = Math.max(1, heroScroll.offsetHeight - window.innerHeight);
			const progress = Math.min(1, Math.max(0, -rect.top / range));

			heroFrames.forEach((frame, index) => {
				const local =
					(progress * total + startOffset - index * spacing) / span;
				const shiftVh = Math.min(
					travel,
					Math.max(-travel, travel - local * travel * 2)
				);
				const calculatedShift = (shiftVh / 100) * window.innerHeight;
				const compositionProgress = Math.min(1, progress / 0.08);
				const easedComposition =
					compositionProgress *
					compositionProgress *
					(3 - 2 * compositionProgress);
				const shift =
					index < 3 && Number.isFinite(initialShifts[index])
						? initialShifts[index] +
							(calculatedShift - initialShifts[index]) * easedComposition
						: calculatedShift;
				frame.style.setProperty(
					"--hero-shift",
					`${shift.toFixed(2)}px`
				);
			});

			heroScroll.classList.add("is-composed");
		};

		const onHeroScroll = () => {
			if (heroTicking) return;
			heroTicking = true;
			window.requestAnimationFrame(paintHero);
		};

		const onHeroResize = () => {
			measureInitialComposition();
			onHeroScroll();
		};

		measureInitialComposition();
		paintHero();
		window.addEventListener("scroll", onHeroScroll, { passive: true });
		window.addEventListener("resize", onHeroResize);
		document.fonts?.ready.then(onHeroResize);
		heroFrames.forEach((frame) => {
			const image = frame.querySelector("img");
			if (image && !image.complete) image.addEventListener("load", onHeroResize);
		});
	} else {
		heroScroll?.classList.add("is-composed");
	}

	/* Основні напрямки: скрол сторінки гортає слайди; 09:00 → 09:01 */
	const section = document.getElementById("directions");
	const track = document.getElementById("napryamy-track");
	const viewport = document.getElementById("napryamy-viewport");
	const shell = section?.querySelector(".napryamy-shell");
	const slides = track ? [...track.querySelectorAll(".napryamy-slide")] : [];
	const firstMedia = slides[0]?.querySelector(".napryamy-media");
	const firstVisual = firstMedia?.querySelector("img") || firstMedia;
	const progressEl = document.getElementById("napryamy-bar");
	const timeEl = document.getElementById("napryamy-time");
	const logoTimes = [...document.querySelectorAll(".vshanuy-logo__time")];

	if (section && track && viewport && slides.length && !reduceMotion) {
		const lastIndex = slides.length - 1;
		/* Перший крок розгортає вступ у карусель; наступні гортають напрямки. */
		const totalSteps = slides.length;
		const stepRatio = 0.9;
		const introMediaScale = 1.65;
		let centers = [];
		let mediaWidths = [];
		let activeIndex = -1;
		let currentPhase = 0;
		let ticking = false;
		let wasPinned = false;

		const titles = slides.map(
			(slide) => slide.querySelector("h3")?.textContent?.trim() || ""
		);

		const secondForIndex = (index) => {
			if (lastIndex <= 0) return 0;
			return Math.round((index / lastIndex) * 60);
		};

		const formatSilenceTime = (index) => {
			const sec = secondForIndex(index);
			if (sec <= 0) return "09:00";
			if (sec >= 60) return "09:01";
			return `09:00:${String(sec).padStart(2, "0")}`;
		};

		const measureCenters = () => {
			const prev = track.style.transform;
			const prevTransition = track.style.transition;
			track.style.transition = "none";
			track.style.transform = "translate3d(0, 0, 0)";
			/* Force layout */
			void track.offsetWidth;
			centers = slides.map((slide) => {
				const media =
					slide.querySelector(".napryamy-media") ||
					slide.querySelector("img") ||
					slide;
				return slide.offsetLeft + media.offsetLeft + media.offsetWidth / 2;
			});
			mediaWidths = slides.map((slide) => {
				const media =
					slide.querySelector(".napryamy-media") ||
					slide.querySelector("img") ||
					slide;
				return media.offsetWidth;
			});
			track.style.transform = prev;
			track.style.transition = prevTransition;
		};

		const offsetForIndex = (index) => {
			const i = Math.min(lastIndex, Math.max(0, index));
			const center = centers[i];
			if (center == null) return 0;
			return center - viewport.clientWidth / 2;
		};

		const offsetForPosition = (position) => {
			const value = Math.min(lastIndex, Math.max(0, position));
			const from = Math.floor(value);
			const to = Math.min(lastIndex, from + 1);
			const mix = value - from;
			return offsetForIndex(from) + (offsetForIndex(to) - offsetForIndex(from)) * mix;
		};

		const introOffset = () => {
			const center = centers[0];
			const mediaWidth = mediaWidths[0] || 0;
			if (center == null) return 0;
			/* Збільшене фото стартує за правим краєм, лишаючи видимим його фрагмент. */
			const visualWidth = mediaWidth * introMediaScale;
			const visibleWidth = Math.min(visualWidth * 0.35, viewport.clientWidth * 0.28);
			const desiredRight = viewport.clientWidth + visualWidth - visibleWidth;
			const desiredCenter = desiredRight - mediaWidth / 2;
			return center - desiredCenter;
		};

		const setRunway = () => {
			const vh = window.innerHeight;
			section.style.height = `${vh + totalSteps * vh * stepRatio}px`;
		};

		const scrollRange = () => Math.max(1, section.offsetHeight - window.innerHeight);

		const progressFromScroll = () => {
			const top = section.getBoundingClientRect().top;
			/* 0 коли секція прилипла зверху; 1 на кінці runway */
			return Math.min(1, Math.max(0, -top / scrollRange()));
		};

		const isPinned = () => {
			const rect = section.getBoundingClientRect();
			return rect.top <= 1 && rect.bottom >= window.innerHeight - 1;
		};

		const paint = (position, introProgress = 1) => {
			const next = Math.min(lastIndex, Math.max(0, Math.round(position)));
			const changed = next !== activeIndex;
			activeIndex = next;
			const time = formatSilenceTime(activeIndex);

			if (changed) {
				slides.forEach((slide, i) => {
					slide.classList.toggle("is-active", i === activeIndex);
					slide.classList.toggle("is-left", i < activeIndex);
					slide.classList.toggle("is-right", i > activeIndex);
				});
			}

			track.style.transition = "none";
			const easedIntro = introProgress * introProgress * (3 - 2 * introProgress);
			const carouselOffset = offsetForPosition(position);
			const offset =
				introProgress < 1
					? introOffset() + (offsetForIndex(0) - introOffset()) * easedIntro
					: carouselOffset;
			track.style.transform = `translate3d(${-offset}px, 0, 0)`;

			if (introProgress < 1 && shell && firstVisual) {
				const shellRect = shell.getBoundingClientRect();
				const visualRect = firstVisual.getBoundingClientRect();
				const naturalRatio =
					firstVisual.naturalWidth && firstVisual.naturalHeight
						? firstVisual.naturalWidth / firstVisual.naturalHeight
						: 0;
				/* object-fit: contain може лишати порожній простір усередині img-box. */
				const renderedHeight = naturalRatio
					? Math.min(visualRect.height, visualRect.width / naturalRatio)
					: visualRect.height;
				const renderedTop = visualRect.top + (visualRect.height - renderedHeight) / 2;
				const renderedBottom = renderedTop + renderedHeight;
				const mediaTop = Math.max(0, renderedTop - shellRect.top);
				const mediaBottom = Math.max(0, shellRect.bottom - renderedBottom);
				section.style.setProperty("--intro-media-top", `${mediaTop.toFixed(2)}px`);
				section.style.setProperty("--intro-media-bottom", `${mediaBottom.toFixed(2)}px`);
			}

			if (progressEl) {
				progressEl.max = Math.max(1, lastIndex);
				progressEl.value = position;
			}
			if (timeEl) timeEl.textContent = time;
			if (document.body.classList.contains("is-napryamy")) {
				logoTimes.forEach((node) => {
					node.textContent = secondForIndex(activeIndex) >= 60 ? "09:01" : "09:00";
				});
			}

			const status = section.querySelector(".napryamy-num .visually-hidden");
			if (status) {
				const title = titles[activeIndex] ? `${titles[activeIndex]}, ` : "";
				status.textContent = `${title}${time}`;
			}
		};

		const sync = () => {
			const pinned = isPinned();
			document.body.classList.toggle("is-napryamy", pinned);
			section.classList.toggle("is-pinned", pinned);

			if (!pinned && wasPinned) {
				logoTimes.forEach((node) => {
					node.textContent = "09:00";
				});
			}
			wasPinned = pinned;

			const p = progressFromScroll();
			currentPhase = p * totalSteps;
			const introProgress = Math.min(1, currentPhase);
			const carouselPosition = Math.min(lastIndex, Math.max(0, currentPhase - 1));
			const introActive = currentPhase < 1;
			section.classList.toggle("is-intro", introActive);
			section.classList.toggle("is-carousel", !introActive);
			section.style.setProperty("--intro-progress", introProgress.toFixed(4));
			const mediaScale = introMediaScale + (1 - introMediaScale) * (
				introProgress * introProgress * (3 - 2 * introProgress)
			);
			section.style.setProperty("--intro-media-scale", mediaScale.toFixed(4));
			paint(carouselPosition, introProgress);
		};

		const onScroll = () => {
			if (ticking) return;
			ticking = true;
			window.requestAnimationFrame(() => {
				ticking = false;
				sync();
			});
		};

		const scrollToIndex = (index, smooth = true) => {
			const next = Math.min(lastIndex, Math.max(0, index));
			const phase = next + 1;
			const y =
				section.getBoundingClientRect().top +
				window.scrollY +
				(phase / totalSteps) * scrollRange();
			window.scrollTo({ top: y, behavior: smooth ? "smooth" : "auto" });
		};

		document.getElementById("napryamy-prev")?.addEventListener("click", () => {
			if (activeIndex === 0) {
				const y = section.getBoundingClientRect().top + window.scrollY;
				window.scrollTo({ top: y, behavior: "smooth" });
			} else {
				scrollToIndex(activeIndex - 1);
			}
		});
		document.getElementById("napryamy-next")?.addEventListener("click", () => {
			scrollToIndex(currentPhase < 1 ? 0 : activeIndex + 1);
		});

		section.addEventListener("keydown", (event) => {
			if (event.key === "ArrowRight" || event.key === "ArrowDown") {
				event.preventDefault();
				scrollToIndex(currentPhase < 1 ? 0 : activeIndex + 1);
			}
			if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
				event.preventDefault();
				if (activeIndex === 0) {
					const y = section.getBoundingClientRect().top + window.scrollY;
					window.scrollTo({ top: y, behavior: "smooth" });
				} else {
					scrollToIndex(activeIndex - 1);
				}
			}
		});

		const ready = () => {
			setRunway();
			measureCenters();
			sync();
		};

		ready();
		window.addEventListener("load", ready);
		window.addEventListener("resize", ready);
		window.addEventListener("scroll", onScroll, { passive: true });
		track.querySelectorAll("img").forEach((img) => {
			if (!img.complete) img.addEventListener("load", ready, { once: true });
		});
	} else if (section && track && slides.length && reduceMotion) {
		slides.forEach((slide) => slide.classList.add("is-active"));
		document.body.classList.remove("is-napryamy");
	}
})();
