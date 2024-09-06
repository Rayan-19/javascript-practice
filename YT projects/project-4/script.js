const card = document.getElementById("card");
const gloss = document.getElementById("gloss");

card.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e; // Destructure mouse coordinates
  const { left, top, width, height } = card.getBoundingClientRect(); // Destructure card dimensions

  // Calculate deltas relative to the card center
  const deltaX = clientX - (left + width / 2);
  const deltaY = clientY - (top + height / 2);

  // Normalize deltas for card rotation and gloss positioning
  const rotateX = deltaY / height * 10; // Max tilt: 10 degrees
  const rotateY = -deltaX / width * 10; // Reverse tilt for natural feel
  const glossX = (-deltaX / width) * 50;
  const glossY = (-deltaY / height) * 50;

  // Apply card tilt and gloss translation/opacity
  card.style.transform = `perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  gloss.style.transform = `translate(${glossX}%, ${glossY}%) scale(2.4)`;
  gloss.style.opacity = 0.5; // Fixed gloss opacity for simplicity
});

card.addEventListener("mouseleave", () => {
  card.style.transform = ""; // Reset rotation
  gloss.style.opacity = 0;   // Hide gloss
});
