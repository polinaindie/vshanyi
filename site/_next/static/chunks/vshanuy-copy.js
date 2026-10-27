(() => {
  const ICONS = `
    <svg class="is-idle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" focusable="false">
      <rect x="8.5" y="8.5" width="11" height="11"/>
      <path d="M15.5 8.5v-4h-11v11h4"/>
    </svg>
    <svg class="is-done" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" focusable="false">
      <path d="M5 12.5l4.5 4.5L19 7.5"/>
    </svg>
  `;

  const writeClipboard = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch {}
    }
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.append(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    if (!ok) throw new Error("copy failed");
  };

  const start = () => {
    const status = document.querySelector("[data-copy-status]");

    document.querySelectorAll(".vshanuy-support-page__copy").forEach((button) => {
      button.innerHTML = ICONS;
      let timer;

      button.addEventListener("click", async () => {
        const field = button.closest(".vshanuy-support-page__field");
        const label = field?.querySelector("dt")?.textContent.trim() ?? "";
        const value = field?.querySelector("dd")?.textContent.trim() ?? "";
        try {
          await writeClipboard(value);
          button.setAttribute("data-copied", "");
          if (status) status.textContent = `${label} скопійовано`;
          window.clearTimeout(timer);
          timer = window.setTimeout(() => {
            button.removeAttribute("data-copied");
          }, 2000);
        } catch {
          if (status) status.textContent = "Не вдалося скопіювати. Виділіть текст вручну.";
        }
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
