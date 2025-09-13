// Basculer entre FR/EN
document.getElementById("lang-toggle").addEventListener("click", function () {
  const isFr = this.textContent === "EN";
  this.textContent = isFr ? "FR" : "EN";

  // Mettre à jour tous les éléments avec des attributs data-fr/data-en
  document.querySelectorAll("[data-fr]").forEach((el) => {
    const text = isFr ? el.getAttribute("data-en") : el.getAttribute("data-fr");
    el.textContent = text;
  });
});

// Onglets interactifs pour les services
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Désactiver tous les boutons et onglets
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    document
      .querySelectorAll(".tab-pane")
      .forEach((p) => p.classList.remove("active"));

    // Activer l'onglet cliqué
    btn.classList.add("active");
    const tabId = btn.getAttribute("data-tab");
    document
      .querySelector(`.tab-pane[data-tab="${tabId}"]`)
      .classList.add("active");
  });
});

// Animation au défilement (optionnel)
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }
});
