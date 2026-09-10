const eventData = {
  connection: {
    title: "Connection",
    icon: "🔗",
    text: "A fun challenge that tests observation, lateral thinking and your ability to find meaningful connections.",
    points: ["Identify links between visual or textual clues.", "Think quickly and explain your connection clearly.", "Follow the time limit and event instructions."]
  },
  poster: {
    title: "Poster Design",
    icon: "🎨",
    text: "Create an eye-catching poster around a given theme and communicate your message through design.",
    points: ["Original artwork and concepts are encouraged.", "Focus on composition, readability and visual impact.", "Submit the final design within the announced time."]
  },
  paper: {
    title: "Paper Presentation",
    icon: "📄",
    text: "Present a researched technical idea, emerging technology or innovative solution to a panel.",
    points: ["Choose a relevant Computer Science or technology topic.", "Keep slides clear, concise and professional.", "Be prepared for questions from the judges."]
  },
  ai: {
    title: "AI Prompt Engineering",
    icon: "🤖",
    text: "Demonstrate how effectively you can communicate with AI by designing clear, structured and purposeful prompts.",
    points: ["Understand the task before writing the prompt.", "Use context, constraints, role and output format when useful.", "Evaluate and refine prompts based on the AI response."]
  }
};

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

document.querySelectorAll(".details-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const e = eventData[btn.dataset.event];
    modalContent.innerHTML = `
      <p class="eyebrow">${e.icon} EVENT DETAILS</p>
      <h2>${e.title}</h2>
      <p>${e.text}</p>
      <ul>${e.points.map(p => `<li>${p}</li>`).join("")}</ul>
    `;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}
document.querySelector(".close").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

document.querySelector(".modal-register").addEventListener("click", () => {
  closeModal();
  setTimeout(() => document.getElementById("name").focus(), 500);
});

document.getElementById("registerForm").addEventListener("submit", e => {
  e.preventDefault();
  const event = document.getElementById("event").value;
  const toast = document.getElementById("toast");
  toast.textContent = `Registration captured for ${event}!`;
  toast.classList.add("show");
  e.target.reset();
  setTimeout(() => toast.classList.remove("show"), 3200);
});
