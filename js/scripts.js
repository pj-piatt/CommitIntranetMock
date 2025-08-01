// scripts.js – Complete Site Functionality with Enhancements

// ===== Form Handling (Universal) =====
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const success = form.querySelector(".success-message");
    if (success) {
      success.style.display = "block";
      setTimeout(() => success.style.display = "none", 4000);
    }
    form.reset();
  });
});

// ===== Mock Upload Handler =====
document.querySelectorAll(".upload-input").forEach(input => {
  input.addEventListener("change", function () {
    const list = this.closest("section").querySelector(".uploaded-list");
    Array.from(this.files).forEach(file => {
      const item = document.createElement("li");
      item.textContent = file.name;
      list.appendChild(item);
    });
  });
});

// ===== Drag and Drop Uploads =====
document.querySelectorAll(".dropzone").forEach(zone => {
  const input = zone.querySelector("input[type='file']");
  const list = zone.querySelector(".uploaded-list");

  zone.addEventListener("dragover", e => {
    e.preventDefault();
    zone.classList.add("dragover");
  });

  zone.addEventListener("dragleave", () => zone.classList.remove("dragover"));
  zone.addEventListener("drop", e => {
    e.preventDefault();
    zone.classList.remove("dragover");
    const files = Array.from(e.dataTransfer.files);
    files.forEach(file => {
      const item = document.createElement("li");
      item.textContent = file.name;
      list.appendChild(item);
    });
  });
});

// ===== Calendar Highlights =====
if (document.querySelector(".calendar")) {
  const today = new Date();
  document.querySelectorAll(".calendar li").forEach(item => {
    const dateMatch = item.textContent.match(/([A-Za-z]{3,9}) (\d{1,2})/);
    if (dateMatch) {
      const [_, monthName, day] = dateMatch;
      const eventDate = new Date(`${monthName} ${day}, ${today.getFullYear()}`);
      if ((eventDate - today) / (1000 * 60 * 60 * 24) <= 7) {
        item.style.fontWeight = "bold";
        item.style.color = "#f7941e";
      }
    }
  });
}

// ===== Search Filter for Lists =====
document.querySelectorAll(".searchable").forEach(section => {
  const input = section.querySelector(".search-input");
  const items = section.querySelectorAll("li");

  if (input) {
    input.addEventListener("input", function () {
      const term = input.value.toLowerCase();
      items.forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(term) ? "" : "none";
      });
    });
  }
});

// ===== Department Tabs Logic (Optional Interactivity) =====
document.querySelectorAll(".department-tabs button").forEach(btn => {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".department-content").forEach(c => c.style.display = "none");
    document.getElementById(this.dataset.target).style.display = "block";
    document.querySelectorAll(".department-tabs button").forEach(b => b.classList.remove("active"));
    this.classList.add("active");
  });
});

// ===== Modal Support (Optional, if used) =====
document.querySelectorAll(".modal-trigger").forEach(trigger => {
  trigger.addEventListener("click", function () {
    const modal = document.getElementById(this.dataset.modal);
    if (modal) modal.style.display = "block";
  });
});

document.querySelectorAll(".modal-close").forEach(btn => {
  btn.addEventListener("click", function () {
    this.closest(".modal").style.display = "none";
  });
});
