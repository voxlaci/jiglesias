const nav = document.querySelector(".main-nav");
const menuToggle = document.querySelector("[data-menu-toggle]");
const filterButtons = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll(".vehicle-card");
const vehicleViewport = document.querySelector("[data-vehicle-viewport]");
const carouselPrev = document.querySelector("[data-carousel-prev]");
const carouselNext = document.querySelector("[data-carousel-next]");
const languageButtons = document.querySelectorAll("[data-lang]");

const translations = {
  pt: {
    title: "JIglesias | Renovação de site",
    htmlLang: "pt-PT",
    "nav.stock": "Stock",
    "nav.services": "Serviços",
    "nav.finance": "Financiamento",
    "nav.contacts": "Contactos",
    "hero.eyebrow": "Stand automóvel em São Domingos de Rana",
    "hero.lead": "Uma experiência mais rápida, elegante e orientada para contactos qualificados, com stock novo, usado e microcarros Ligier prontos a descobrir.",
    "hero.primary": "Ver viaturas",
    "hero.secondary": "Falar com a equipa",
    "search.type": "Tipo",
    "search.all": "Todos",
    "search.cars": "Automóveis",
    "search.motorhomes": "Autocaravanas",
    "search.condition": "Estado",
    "search.newUsed": "Novos e usados",
    "search.budget": "Orçamento",
    "search.anyPrice": "Qualquer preço",
    "search.until15": "Até 15.000 EUR",
    "search.from15to25": "15.000 a 25.000 EUR",
    "search.more25": "Mais de 25.000 EUR",
    "search.submit": "Procurar",
    "trust.new": "Novos",
    "trust.newText": "Ligier, Microcar e seleção pronta entrega",
    "trust.used": "Usados",
    "trust.usedText": "Stock validado com dados essenciais visíveis",
    "trust.finance": "Financiamento",
    "trust.financeText": "Simulação e acompanhamento comercial",
    "trust.contact": "Contacto direto",
    "trust.contactText": "Telefone, email e visita ao stand",
    "intro.eyebrow": "Proposta de renovação",
    "intro.title": "Do catálogo tradicional para uma experiência de compra mais confiante.",
    "intro.text": "A nova abordagem dá prioridade ao que um cliente precisa decidir: imagem forte da viatura, preço, ano, quilometragem, combustível, chamada para contacto e percursos separados para novos, usados, microcarros e serviços.",
    "stock.eyebrow": "Escolhas da semana",
    "stock.title": "Viaturas em destaque",
    "stock.all": "Todas",
    "stock.prev": "Ver viaturas anteriores",
    "stock.next": "Ver mais viaturas",
    "stock.featured": "Destaque",
    "stock.newSingular": "Novo",
    "stock.usedSingular": "Usado",
    "vehicle.year": "Ano",
    "vehicle.fuel": "Comb.",
    "ligier.eyebrow": "Mobilidade compacta",
    "ligier.title": "Uma vitrine própria para Ligier e microcarros.",
    "ligier.text": "O site renovado destaca gamas, versões e vantagens de condução urbana, criando uma área comercial mais clara para clientes que procuram alternativas compactas e económicas.",
    "ligier.cta": "Pedir disponibilidade",
    "services.eyebrow": "Acompanhamento completo",
    "services.title": "Serviços pensados para converter visitas em contactos.",
    "services.s1Title": "Seleção assistida",
    "services.s1Text": "Ajuda o cliente a escolher por orçamento, tipo de utilização, estado e disponibilidade.",
    "services.s2Title": "Retoma",
    "services.s2Text": "Espaço para avaliação e proposta de retoma, reduzindo fricção antes da visita ao stand.",
    "services.s3Title": "Preparação e garantia",
    "services.s3Text": "Mensagens claras sobre inspeção, entrega e documentação para aumentar confiança.",
    "services.s4Title": "Pós-venda",
    "services.s4Text": "Contacto visível para manutenção, apoio e acompanhamento após compra.",
    "finance.eyebrow": "Financiamento",
    "finance.title": "Simulação simples, sem interromper a descoberta da viatura.",
    "finance.text": "O novo layout prepara o caminho para leads de financiamento com preço, entrada inicial, prazo e pedido de contacto. Nesta proposta, a área aparece como bloco comercial pronto a ligar ao formulário real.",
    "finance.vehicle": "Viatura",
    "finance.downPayment": "Entrada inicial",
    "finance.term": "Prazo",
    "finance.submit": "Pedir simulação",
    "contact.eyebrow": "Contactos",
    "contact.title": "Pronto para visita, chamada ou pedido de informação.",
    "contact.map": "Abrir mapa",
    "footer.text": "Proposta visual de renovação. Conteúdo baseado no site atual jiglesias.com."
  },
  en: {
    title: "JIglesias | Website redesign",
    htmlLang: "en",
    "nav.stock": "Stock",
    "nav.services": "Services",
    "nav.finance": "Finance",
    "nav.contacts": "Contact",
    "hero.eyebrow": "Car dealership in São Domingos de Rana",
    "hero.lead": "A faster, more elegant experience focused on qualified enquiries, with new, used and Ligier microcars ready to discover.",
    "hero.primary": "View vehicles",
    "hero.secondary": "Talk to the team",
    "search.type": "Type",
    "search.all": "All",
    "search.cars": "Cars",
    "search.motorhomes": "Motorhomes",
    "search.condition": "Condition",
    "search.newUsed": "New and used",
    "search.budget": "Budget",
    "search.anyPrice": "Any price",
    "search.until15": "Up to EUR 15,000",
    "search.from15to25": "EUR 15,000 to 25,000",
    "search.more25": "More than EUR 25,000",
    "search.submit": "Search",
    "trust.new": "New",
    "trust.newText": "Ligier, Microcar and ready-to-deliver selection",
    "trust.used": "Used",
    "trust.usedText": "Validated stock with essential details visible",
    "trust.finance": "Finance",
    "trust.financeText": "Simulation and sales support",
    "trust.contact": "Direct contact",
    "trust.contactText": "Phone, email and showroom visit",
    "intro.eyebrow": "Redesign proposal",
    "intro.title": "From a traditional catalogue to a more confident buying experience.",
    "intro.text": "The new approach prioritises what a customer needs to decide: strong vehicle imagery, price, year, mileage, fuel, contact calls and separate paths for new, used, microcars and services.",
    "stock.eyebrow": "Weekly picks",
    "stock.title": "Featured vehicles",
    "stock.all": "All",
    "stock.prev": "View previous vehicles",
    "stock.next": "View more vehicles",
    "stock.featured": "Featured",
    "stock.newSingular": "New",
    "stock.usedSingular": "Used",
    "vehicle.year": "Year",
    "vehicle.fuel": "Fuel",
    "ligier.eyebrow": "Compact mobility",
    "ligier.title": "A dedicated showcase for Ligier and microcars.",
    "ligier.text": "The redesigned site highlights ranges, versions and urban-driving advantages, creating a clearer commercial area for customers looking for compact and economical alternatives.",
    "ligier.cta": "Request availability",
    "services.eyebrow": "Complete support",
    "services.title": "Services designed to turn visits into enquiries.",
    "services.s1Title": "Assisted selection",
    "services.s1Text": "Helps customers choose by budget, use case, condition and availability.",
    "services.s2Title": "Trade-in",
    "services.s2Text": "Space for appraisal and trade-in proposal, reducing friction before the showroom visit.",
    "services.s3Title": "Preparation and warranty",
    "services.s3Text": "Clear messages about inspection, delivery and documentation to increase trust.",
    "services.s4Title": "After-sales",
    "services.s4Text": "Visible contact for maintenance, support and follow-up after purchase.",
    "finance.eyebrow": "Finance",
    "finance.title": "Simple simulation without interrupting vehicle discovery.",
    "finance.text": "The new layout prepares the path for finance leads with price, initial payment, term and contact request. In this proposal, the area appears as a commercial block ready to connect to the real form.",
    "finance.vehicle": "Vehicle",
    "finance.downPayment": "Initial payment",
    "finance.term": "Term",
    "finance.submit": "Request simulation",
    "contact.eyebrow": "Contact",
    "contact.title": "Ready for a visit, call or information request.",
    "contact.map": "Open map",
    "footer.text": "Visual redesign proposal. Content based on the current jiglesias.com website."
  },
  es: {
    title: "JIglesias | Renovación del sitio",
    htmlLang: "es",
    "nav.stock": "Stock",
    "nav.services": "Servicios",
    "nav.finance": "Financiación",
    "nav.contacts": "Contactos",
    "hero.eyebrow": "Concesionario en São Domingos de Rana",
    "hero.lead": "Una experiencia más rápida, elegante y orientada a contactos cualificados, con stock nuevo, usado y microcoches Ligier listos para descubrir.",
    "hero.primary": "Ver vehículos",
    "hero.secondary": "Hablar con el equipo",
    "search.type": "Tipo",
    "search.all": "Todos",
    "search.cars": "Automóviles",
    "search.motorhomes": "Autocaravanas",
    "search.condition": "Estado",
    "search.newUsed": "Nuevos y usados",
    "search.budget": "Presupuesto",
    "search.anyPrice": "Cualquier precio",
    "search.until15": "Hasta 15.000 EUR",
    "search.from15to25": "15.000 a 25.000 EUR",
    "search.more25": "Más de 25.000 EUR",
    "search.submit": "Buscar",
    "trust.new": "Nuevos",
    "trust.newText": "Ligier, Microcar y selección lista para entrega",
    "trust.used": "Usados",
    "trust.usedText": "Stock validado con datos esenciales visibles",
    "trust.finance": "Financiación",
    "trust.financeText": "Simulación y acompañamiento comercial",
    "trust.contact": "Contacto directo",
    "trust.contactText": "Teléfono, email y visita al stand",
    "intro.eyebrow": "Propuesta de renovación",
    "intro.title": "Del catálogo tradicional a una experiencia de compra más segura.",
    "intro.text": "El nuevo enfoque prioriza lo que el cliente necesita para decidir: imagen fuerte del vehículo, precio, año, kilometraje, combustible, llamadas de contacto y recorridos separados para nuevos, usados, microcoches y servicios.",
    "stock.eyebrow": "Selección de la semana",
    "stock.title": "Vehículos destacados",
    "stock.all": "Todos",
    "stock.prev": "Ver vehículos anteriores",
    "stock.next": "Ver más vehículos",
    "stock.featured": "Destacado",
    "stock.newSingular": "Nuevo",
    "stock.usedSingular": "Usado",
    "vehicle.year": "Año",
    "vehicle.fuel": "Comb.",
    "ligier.eyebrow": "Movilidad compacta",
    "ligier.title": "Una vitrina propia para Ligier y microcoches.",
    "ligier.text": "El sitio renovado destaca gamas, versiones y ventajas de conducción urbana, creando un área comercial más clara para clientes que buscan alternativas compactas y económicas.",
    "ligier.cta": "Consultar disponibilidad",
    "services.eyebrow": "Acompañamiento completo",
    "services.title": "Servicios pensados para convertir visitas en contactos.",
    "services.s1Title": "Selección asistida",
    "services.s1Text": "Ayuda al cliente a elegir por presupuesto, tipo de uso, estado y disponibilidad.",
    "services.s2Title": "Entrega de usado",
    "services.s2Text": "Espacio para valoración y propuesta de entrega, reduciendo fricción antes de visitar el stand.",
    "services.s3Title": "Preparación y garantía",
    "services.s3Text": "Mensajes claros sobre inspección, entrega y documentación para aumentar la confianza.",
    "services.s4Title": "Postventa",
    "services.s4Text": "Contacto visible para mantenimiento, soporte y seguimiento después de la compra.",
    "finance.eyebrow": "Financiación",
    "finance.title": "Simulación sencilla sin interrumpir el descubrimiento del vehículo.",
    "finance.text": "El nuevo diseño prepara el camino para contactos de financiación con precio, entrada inicial, plazo y solicitud de contacto. En esta propuesta, el área aparece como un bloque comercial listo para conectarse al formulario real.",
    "finance.vehicle": "Vehículo",
    "finance.downPayment": "Entrada inicial",
    "finance.term": "Plazo",
    "finance.submit": "Pedir simulación",
    "contact.eyebrow": "Contactos",
    "contact.title": "Listo para visita, llamada o solicitud de información.",
    "contact.map": "Abrir mapa",
    "footer.text": "Propuesta visual de renovación. Contenido basado en el sitio actual jiglesias.com."
  },
  fr: {
    title: "JIglesias | Refonte du site",
    htmlLang: "fr",
    "nav.stock": "Stock",
    "nav.services": "Services",
    "nav.finance": "Financement",
    "nav.contacts": "Contacts",
    "hero.eyebrow": "Concession automobile à São Domingos de Rana",
    "hero.lead": "Une expérience plus rapide, élégante et orientée vers des contacts qualifiés, avec des véhicules neufs, d’occasion et des microvoitures Ligier à découvrir.",
    "hero.primary": "Voir les véhicules",
    "hero.secondary": "Parler à l’équipe",
    "search.type": "Type",
    "search.all": "Tous",
    "search.cars": "Automobiles",
    "search.motorhomes": "Camping-cars",
    "search.condition": "État",
    "search.newUsed": "Neufs et d’occasion",
    "search.budget": "Budget",
    "search.anyPrice": "Tous les prix",
    "search.until15": "Jusqu’à 15.000 EUR",
    "search.from15to25": "15.000 à 25.000 EUR",
    "search.more25": "Plus de 25.000 EUR",
    "search.submit": "Rechercher",
    "trust.new": "Neufs",
    "trust.newText": "Ligier, Microcar et sélection prête à livrer",
    "trust.used": "Occasions",
    "trust.usedText": "Stock validé avec les informations essentielles visibles",
    "trust.finance": "Financement",
    "trust.financeText": "Simulation et accompagnement commercial",
    "trust.contact": "Contact direct",
    "trust.contactText": "Téléphone, email et visite au showroom",
    "intro.eyebrow": "Proposition de refonte",
    "intro.title": "Du catalogue traditionnel à une expérience d’achat plus rassurante.",
    "intro.text": "La nouvelle approche met en avant ce dont le client a besoin pour décider : image forte du véhicule, prix, année, kilométrage, carburant, appels au contact et parcours séparés pour neufs, occasions, microvoitures et services.",
    "stock.eyebrow": "Sélection de la semaine",
    "stock.title": "Véhicules en vedette",
    "stock.all": "Tous",
    "stock.prev": "Voir les véhicules précédents",
    "stock.next": "Voir plus de véhicules",
    "stock.featured": "Vedette",
    "stock.newSingular": "Neuf",
    "stock.usedSingular": "Occasion",
    "vehicle.year": "Année",
    "vehicle.fuel": "Carb.",
    "ligier.eyebrow": "Mobilité compacte",
    "ligier.title": "Une vitrine dédiée à Ligier et aux microvoitures.",
    "ligier.text": "Le site rénové met en avant les gammes, versions et avantages de la conduite urbaine, créant un espace commercial plus clair pour les clients à la recherche d’alternatives compactes et économiques.",
    "ligier.cta": "Demander la disponibilité",
    "services.eyebrow": "Accompagnement complet",
    "services.title": "Des services pensés pour convertir les visites en contacts.",
    "services.s1Title": "Sélection assistée",
    "services.s1Text": "Aide le client à choisir selon le budget, l’usage, l’état et la disponibilité.",
    "services.s2Title": "Reprise",
    "services.s2Text": "Espace pour l’évaluation et la proposition de reprise, réduisant les frictions avant la visite.",
    "services.s3Title": "Préparation et garantie",
    "services.s3Text": "Messages clairs sur l’inspection, la livraison et la documentation pour renforcer la confiance.",
    "services.s4Title": "Après-vente",
    "services.s4Text": "Contact visible pour l’entretien, l’assistance et le suivi après l’achat.",
    "finance.eyebrow": "Financement",
    "finance.title": "Simulation simple sans interrompre la découverte du véhicule.",
    "finance.text": "La nouvelle mise en page prépare le parcours des demandes de financement avec prix, apport initial, durée et demande de contact. Dans cette proposition, la zone apparaît comme un bloc commercial prêt à être connecté au vrai formulaire.",
    "finance.vehicle": "Véhicule",
    "finance.downPayment": "Apport initial",
    "finance.term": "Durée",
    "finance.submit": "Demander une simulation",
    "contact.eyebrow": "Contacts",
    "contact.title": "Prêt pour une visite, un appel ou une demande d’information.",
    "contact.map": "Ouvrir la carte",
    "footer.text": "Proposition visuelle de refonte. Contenu basé sur le site actuel jiglesias.com."
  }
};

function setLanguage(language) {
  const dictionary = translations[language] || translations.pt;
  document.documentElement.lang = dictionary.htmlLang;
  document.title = dictionary.title;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value) element.setAttribute("aria-label", value);
  });
  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });
  window.localStorage.setItem("jiglesias-language", language);
  updateCarouselButtons();
}

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
languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
setLanguage(window.localStorage.getItem("jiglesias-language") || "pt");
updateCarouselButtons();
