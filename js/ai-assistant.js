// ai-assistant.js

// Open and close toggle
const toggleBtn = document.getElementById("ai-toggle");
const chatWindow = document.getElementById("ai-chat-window");
const closeBtn = document.getElementById("ai-close");
const sendBtn = document.getElementById("ai-send");
const chatBody = document.getElementById("ai-messages");
const inputField = document.getElementById("ai-user-input");

if (toggleBtn && chatWindow && closeBtn && sendBtn && chatBody && inputField) {
  toggleBtn.onclick = () => (chatWindow.style.display = "block");
  closeBtn.onclick = () => (chatWindow.style.display = "none");

  sendBtn.onclick = () => {
    const input = inputField.value.trim();
    if (!input) return;

    const userMsg = document.createElement("div");
    userMsg.innerHTML = `<strong>You:</strong> ${input}`;
    chatBody.appendChild(userMsg);

    const aiMsg = document.createElement("div");
    aiMsg.innerHTML = `<strong>Commit AI:</strong> ${getAIResponse(input)}`;
    chatBody.appendChild(aiMsg);

    inputField.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
  };
}

function getAIResponse(input) {
  const lower = input.toLowerCase();

  if (lower.includes("pto")) return `You can submit your PTO request <a href='pto-request.html'>here</a>.`;
  if (lower.includes("hardware")) return `Need a device? Use the <a href='hardware-request.html'>hardware request form</a>.`;
  if (lower.includes("vpn")) return `Check the IT Wiki for VPN setup or view the <a href='documents.html'>VPN Guide</a>.`;
  if (lower.includes("help desk") || lower.includes("support")) return `Submit a request on the <a href='it-helpdesk.html'>IT Help Desk page</a>.`;
  if (lower.includes("policy")) return `Explore the latest <a href='policy.html'>policy updates</a> or browse the <a href='documents.html'>documents</a>.`;
  if (lower.includes("onboarding") || lower.includes("new hire")) return `You can view the onboarding checklist in the <a href='wiki.html'>Wiki</a>.`;
  if (lower.includes("submit software") || lower.includes("software request")) return `Use the <a href='software-request.html'>Software Request form</a> to get started.`;

  return "I'm still learning! Try searching the Wiki or browsing documents for more help.";
}
