const nav = document.querySelector(".main-nav");
const menuToggle = document.querySelector("[data-menu-toggle]");
const filterButtons = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll(".vehicle-card");
const vehicleViewport = document.querySelector("[data-vehicle-viewport]");
const carouselPrev = document.querySelector("[data-carousel-prev]");
const carouselNext = document.querySelector("[data-carousel-next]");

menuToggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav?.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("open");
  }
});

function getVisibleCards() {
  return [...cards].filter((card) => !card.hidden);
}

function getSlideDistance() {
  if (!vehicleViewport) return 0;
  const visibleCards = getVisibleCards();
  const card = visibleCards[0];
  if (!card) return vehicleViewport.clientWidth;
  const cardWidth = card.getBoundingClientRect().width;
  const styles = getComputedStyle(document.querySelector(".vehicle-grid"));
  const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
  const cardsPerView = Math.max(1, Math.round(vehicleViewport.clientWidth / (cardWidth + gap)));
  return cardsPerView * (cardWidth + gap);
}

function updateCarouselButtons() {
  if (!vehicleViewport || !carouselPrev || !carouselNext) return;
  const maxScroll = vehicleViewport.scrollWidth - vehicleViewport.clientWidth - 2;
  carouselPrev.disabled = vehicleViewport.scrollLeft <= 2;
  carouselNext.disabled = vehicleViewport.scrollLeft >= maxScroll || getVisibleCards().length <= 1;
}

function slideVehicles(direction) {
  if (!vehicleViewport) return;
  vehicleViewport.scrollBy({
    left: direction * getSlideDistance(),
    behavior: "smooth"
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    cards.forEach((card) => {
      const visible = filter === "all" || card.dataset.kind.includes(filter);
      card.hidden = !visible;
    });
    vehicleViewport?.scrollTo({ left: 0, behavior: "smooth" });
    window.setTimeout(updateCarouselButtons, 260);
  });
});

carouselPrev?.addEventListener("click", () => slideVehicles(-1));
carouselNext?.addEventListener("click", () => slideVehicles(1));
vehicleViewport?.addEventListener("scroll", updateCarouselButtons);
window.addEventListener("resize", updateCarouselButtons);
updateCarouselButtons();
