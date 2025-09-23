const chatEl = document.getElementById("chat");
const input = document.getElementById("msg");
const send = document.getElementById("send");

function appendMessage(text, cls) {
  const d = document.createElement("div");
  d.className = cls;
  d.textContent = text;
  chatEl.appendChild(d);
  chatEl.scrollTop = chatEl.scrollHeight;
}

async function sendMessage() {
  const text = input.value.trim();
  if (!text) return;
  appendMessage(text, "user");
  input.value = "";

  try {
    const res = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    });
    const j = await res.json();
    appendMessage(j.reply, "bot");
  } catch (err) {
    appendMessage("Error: " + err.message, "bot");
  }
}

send.addEventListener("click", sendMessage);
input.addEventListener("keydown", e => {
  if (e.key === "Enter") sendMessage();
});
