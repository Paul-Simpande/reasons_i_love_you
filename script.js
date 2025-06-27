const reasons = [
  "You're my best friend and my favorite person 🌈",
  "You make me laugh even when I'm sad 😂",
  "I love your cute little smile 😍",
  "You're the most thoughtful person I've ever met 💡",
  "You're my home, wherever we are 🏡"
];

let currentIndex = 0;

function updateReason() {
  document.getElementById("reason-text").textContent = reasons[currentIndex];
  document.getElementById("counter").textContent = `${currentIndex + 1} / ${reasons.length}`;
}

function nextReason() {
  if (currentIndex < reasons.length - 1) {
    currentIndex++;
    updateReason();
  }
}

function prevReason() {
  if (currentIndex > 0) {
    currentIndex--;
    updateReason();
  }
}

function startLove() {
  const landing = document.getElementById("landing-screen");
  const main = document.getElementById("main-screen");
  const music = document.getElementById("bg-music");

  // Start music
  music.play().catch(e => console.log("Autoplay blocked"));

  // Transition screens
  landing.classList.remove("active");
  landing.classList.add("hidden");

  main.classList.remove("hidden");
  main.classList.add("active");

  updateReason(); // Show first reason
}
