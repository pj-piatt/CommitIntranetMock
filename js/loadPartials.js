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
  loadPartial("sidebar", "partials/sidebar.html");
  loadPartial("topnav", "partials/header.html");
  loadPartial("footer", "partials/footer.html");
  loadPartial("ai-widget", "partials/ai-widget.html");
});
