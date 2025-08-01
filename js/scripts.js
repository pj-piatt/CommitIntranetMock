// scripts.js

// Navigation Highlight (optional global behavior)
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split("/").pop();
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
    }
  });
});

// Form Handling
function handleFormSubmission(formId, successMessageId) {
  const form = document.getElementById(formId);
  const message = document.getElementById(successMessageId);

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simulate async form submission
      setTimeout(() => {
        message.style.display = 'block';
        form.reset();
      }, 500);
    });
  }
}

// Help Desk Request Form
handleFormSubmission("helpdesk-form", "helpdesk-success");

// PTO Request Form
handleFormSubmission("pto-form", "pto-success");

// IT Hardware/Software Request Form
handleFormSubmission("hardware-form", "hardware-success");

// Document Upload Simulation
document.addEventListener("DOMContentLoaded", () => {
  const uploadInput = document.getElementById("upload-input");
  const uploadedList = document.getElementById("uploaded-list");

  if (uploadInput && uploadedList) {
    uploadInput.addEventListener("change", (e) => {
      const files = Array.from(e.target.files);
      files.forEach(file => {
        const listItem = document.createElement("li");
        listItem.textContent = file.name + " (mock uploaded)";
        uploadedList.appendChild(listItem);
      });

      // Reset input
      uploadInput.value = "";
    });
  }
});
