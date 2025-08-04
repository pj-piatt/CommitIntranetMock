// ai-assistant.js

// Toggle open/close
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

  // HR
  if (lower.includes("pto") || lower.includes("vacation") || lower.includes("time off"))
    return `You can submit your PTO request <a href='pto-request.html'>here</a>. Check the <a href='wiki-articles/pto-policy.html'>PTO policy</a> for details.`;
  if (lower.includes("benefits") || lower.includes("insurance"))
    return `Benefit details can be found in the <a href='documents.html'>HR Documents section</a>.`;
  if (lower.includes("employee handbook"))
    return `You can find the latest Employee Handbook in the <a href='documents.html'>HR panel</a> of the Documents Library.`;

  // IT Support
  if (lower.includes("hardware") || lower.includes("laptop") || lower.includes("computer"))
    return `Need equipment? Submit a <a href='hardware-request.html'>Hardware Request</a>.`;
  if (lower.includes("vpn"))
    return `For VPN access, use the <a href='documents.html'>VPN Setup Guide</a> under IT Documents or ask IT via the <a href='it-helpdesk.html'>Help Desk</a>.`;
  if (lower.includes("help desk") || lower.includes("tech support") || lower.includes("support ticket"))
    return `Submit a request via the <a href='it-helpdesk.html'>IT Help Desk</a>.`;
  if (lower.includes("software") || lower.includes("install"))
    return `Use the <a href='software-request.html'>Software Request form</a> to request installations or access.`;
  if (lower.includes("reset password"))
    return `Check the <a href='wiki-articles/reset-password.html'>password reset guide</a> in the Wiki, or contact IT for help with MFA.`;

  // Policy
  if (lower.includes("policy") || lower.includes("guidelines"))
    return `Explore department guidelines on the <a href='policy.html'>Policy Page</a> or browse relevant files in the <a href='documents.html'>Policy Documents</a>.`;

  // Operations
  if (lower.includes("operations") || lower.includes("logistics") || lower.includes("inventory"))
    return `Visit the <a href='operations.html'>Operations page</a> for updates or upload Ops docs via the Documents Library.`;

  // Onboarding & HR Culture
  if (lower.includes("onboarding") || lower.includes("new hire") || lower.includes("starting work"))
    return `Welcome! Start with the <a href='wiki-articles/onboarding-checklist.html'>Onboarding Checklist</a> in the Wiki.`;

  // Shoutouts
  if (lower.includes("shoutout") || lower.includes("recognition"))
    return `Give a team member a shoutout via the <a href='shoutouts.html'>Shoutouts page</a>. Recognition goes a long way!`;

  // Document Upload
  if (
    lower.includes("upload a document") ||
    lower.includes("upload file") ||
    lower.includes("add document") ||
    lower.includes("submit document") ||
    lower.includes("how do i upload") ||
    lower.includes("upload to documents") ||
    lower.includes("upload guide")
  )
    return `You can upload files to your department panel on the <a href='documents.html'>Documents page</a>.<br>Need step-by-step help? View the <a href='wiki-articles/upload-documents.html'>Upload Documents Guide</a>.`;

  // Fallback
  return "I'm still learning! Try rephrasing your question or check the <a href='wiki.html'>Wiki</a> for help. You can ask about things like PTO, onboarding, password resets, or where to upload files.";
}
