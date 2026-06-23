const nav = document.querySelector(".main-nav");
const menuToggle = document.querySelector("[data-menu-toggle]");
const filterButtons = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll(".vehicle-card");

menuToggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav?.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("open");
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    cards.forEach((card) => {
      const visible = filter === "all" || card.dataset.kind.includes(filter);
      card.hidden = !visible;
    });
  });
});
