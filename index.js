// Smooth scroll for buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Project click alert
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert("Project: " + card.querySelector("h3").innerText);
  });
});
