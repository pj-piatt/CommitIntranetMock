async function loadPartial(id, url) {
  const container = document.getElementById(id);
  if (!container) return;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to load ${url}`);

    const html = await response.text();
    container.innerHTML = html;
  } catch (error) {
    console.error(`Error loading ${url}:`, error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const base = location.pathname.includes("/CommitIntranetMock/") ? "/CommitIntranetMock/" : "/";
  loadPartial("sidebar", `${base}partials/sidebar.html`);
  loadPartial("topnav", `${base}partials/header.html`);
  loadPartial("footer", `${base}partials/footer.html`);
  loadPartial("ai-widget", `${base}partials/ai-widget.html`);
});

