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

// Simulated AI Bot
function submitAIQuestion() {
  const input = document.getElementById("ai-input");
  const response = document.getElementById("ai-response");

  if (!input || !response) return;

  const question = input.value.trim().toLowerCase();
  if (!question) {
    response.textContent = "Please enter a question.";
    return;
  }

  // Simulated responses based on keyword detection
  let answer = "";

  if (question.includes("pto") || question.includes("vacation")) {
    answer = "You can submit PTO requests through ADP. Be sure to notify your supervisor in advance.";
  } else if (question.includes("benefits")) {
    answer = "Our benefits information is located in the Benefits Guide on the Documents page.";
  } else if (question.includes("holiday")) {
    answer = "You can view upcoming company holidays on the Calendar page.";
  } else if (question.includes("tech support") || question.includes("it help")) {
    answer = "For IT support, please submit a help desk ticket or email support@commit.org.";
  } else if (question.includes("dress code")) {
    answer = "We follow a business casual dress code unless otherwise specified for events or client meetings.";
  } else {
    // Default fallback
    answer = `I'm a mock assistant. For your question, "${input.value}", please check the Employee Handbook or contact HR.`;
  }

  // Simulate a response delay
  setTimeout(() => {
    response.innerHTML = `<strong>AI Response:</strong> ${answer}`;
  }, 500);
}
// Add emoji picker functionality
const emojiButton = document.getElementById("emoji-button");
const messageField = document.getElementById("message");

emojiButton.addEventListener("click", () => {
  const emojis = ["😀", "🎉", "👏", "🌟", "💯", "🔥", "🙌", "💪"];
  const picker = document.createElement("div");
  picker.classList.add("emoji-picker");

  emojis.forEach((emoji) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = emoji;
    btn.onclick = () => {
      messageField.value += emoji;
      picker.remove();
    };
    picker.appendChild(btn);
  });

  // Remove any existing picker before adding a new one
  const existing = document.querySelector(".emoji-picker");
  if (existing) existing.remove();

  emojiButton.insertAdjacentElement("afterend", picker);
});

// Enhanced submit with department tag
document.getElementById("shoutout-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const msg = document.getElementById("message").value;
  const dept = document.getElementById("department").value;

  const shoutout = `🎊 [${dept}] Shoutout from ${from} to ${to}: ${msg}`;
  const list = document.getElementById("shoutout-list");
  const newItem = document.createElement("li");
  newItem.textContent = shoutout;
  list.insertBefore(newItem, list.firstChild);

  const confirm = document.getElementById("shoutout-success");
  confirm.innerHTML = `✅ Shoutout posted! Confirmation ID: #SO-${Math.floor(Math.random() * 9000 + 1000)}`;
  confirm.style.display = "block";

  this.reset();
  confirm.scrollIntoView({ behavior: "smooth" });

  const picker = document.querySelector(".emoji-picker");
  if (picker) picker.remove();
});


