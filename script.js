const nav = document.querySelector(".main-nav");
const menuToggle = document.querySelector("[data-menu-toggle]");
const filterButtons = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll(".vehicle-card");
const vehicleViewport = document.querySelector("[data-vehicle-viewport]");
const carouselPrev = document.querySelector("[data-carousel-prev]");
const carouselNext = document.querySelector("[data-carousel-next]");
const languageButtons = document.querySelectorAll("[data-lang]");
const askButtons = document.querySelectorAll("[data-ask-ai]");
const shareButtons = document.querySelectorAll("[data-share-scope]");
const aiDrawer = document.querySelector("[data-ai-drawer]");
const aiTitle = document.querySelector("[data-ai-title]");
const aiResponse = document.querySelector("[data-ai-response]");
const aiInput = document.querySelector("[data-ai-input]");
const aiSend = document.querySelector("[data-ai-send]");
const shareDrawer = document.querySelector("[data-share-drawer]");
const shareTitle = document.querySelector("[data-share-title]");
const shareLinks = document.querySelector("[data-share-links]");
const shareFeedback = document.querySelector("[data-share-feedback]");
const copyShare = document.querySelector("[data-copy-share]");
let currentLanguage = "pt";
let activeAskButton = null;
let activeShare = null;

const translations = {
  pt: {
    title: "JIglesias | Renovação de site",
    htmlLang: "pt-PT",
    "nav.stock": "Stock",
    "nav.services": "Serviços",
    "nav.finance": "Financiamento",
    "nav.contacts": "Contactos",
    "hero.eyebrow": "Stand automóvel em São Domingos de Rana, Cascais, Portugal",
    "hero.lead": "Uma experiência mais rápida, elegante e orientada para contactos qualificados, com stock novo, usado e microcarros Ligier prontos a descobrir.",
    "cinema.vitalStock": "Stock curado",
    "cinema.vitalLigier": "Ligier e microcarros",
    "cinema.vitalFinance": "Financiamento guiado",
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
    "footer.text": "Proposta visual de renovação. Conteúdo baseado no site atual jiglesias.com.",
    "ai.askPage": "Perguntar à IA",
    "ai.askVehicle": "Perguntar à IA",
    "ai.eyebrow": "Assistente inteligente",
    "ai.questionLabel": "Pergunta",
    "ai.placeholder": "Ex.: Este veículo é indicado para cidade?",
    "ai.send": "Enviar pergunta",
    "ai.pageTitle": "Perguntar à IA sobre a JIglesias",
    "ai.vehicleTitle": "Perguntar à IA sobre {title}",
    "ai.pageIntro": "Posso ajudar a escolher entre novos, usados, microcarros, financiamento e visita ao stand.",
    "ai.vehicleIntro": "Resumo rápido: {title}, preço {price}, dados essenciais visíveis no card.",
    "ai.suggestion": "Sugestão: confirme disponibilidade, condições de financiamento e possibilidade de retoma antes da visita.",
    "ai.answer": "Boa pergunta. Para esta proposta, o assistente recomenda comparar orçamento, utilização diária, quilometragem e disponibilidade. O próximo passo ideal é pedir contacto à equipa JIglesias.",
    "share.page": "Partilhar",
    "share.vehicle": "Partilhar",
    "share.eyebrow": "Partilha rápida",
    "share.pageTitle": "Partilhar JIglesias",
    "share.vehicleTitle": "Partilhar {title}",
    "share.copy": "Copiar link",
    "share.copied": "Link copiado.",
    "share.textPage": "Conhece a proposta renovada da JIglesias.",
    "share.textVehicle": "Veja esta viatura na JIglesias: {title}."
  },
  en: {
    title: "JIglesias | Website redesign",
    htmlLang: "en",
    "nav.stock": "Stock",
    "nav.services": "Services",
    "nav.finance": "Finance",
    "nav.contacts": "Contact",
    "hero.eyebrow": "Car dealership in São Domingos de Rana, Cascais, Portugal",
    "hero.lead": "A faster, more elegant experience focused on qualified enquiries, with new, used and Ligier microcars ready to discover.",
    "cinema.vitalStock": "Curated stock",
    "cinema.vitalLigier": "Ligier and microcars",
    "cinema.vitalFinance": "Guided finance",
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
    "footer.text": "Visual redesign proposal. Content based on the current jiglesias.com website.",
    "ai.askPage": "Ask AI",
    "ai.askVehicle": "Ask AI",
    "ai.eyebrow": "Smart assistant",
    "ai.questionLabel": "Question",
    "ai.placeholder": "E.g. Is this vehicle suitable for city use?",
    "ai.send": "Send question",
    "ai.pageTitle": "Ask AI about JIglesias",
    "ai.vehicleTitle": "Ask AI about {title}",
    "ai.pageIntro": "I can help choose between new, used, microcars, finance and a showroom visit.",
    "ai.vehicleIntro": "Quick summary: {title}, price {price}, key details visible on the card.",
    "ai.suggestion": "Suggestion: confirm availability, finance conditions and trade-in options before visiting.",
    "ai.answer": "Good question. For this proposal, the assistant recommends comparing budget, daily use, mileage and availability. The ideal next step is to request contact from the JIglesias team.",
    "share.page": "Share",
    "share.vehicle": "Share",
    "share.eyebrow": "Quick share",
    "share.pageTitle": "Share JIglesias",
    "share.vehicleTitle": "Share {title}",
    "share.copy": "Copy link",
    "share.copied": "Link copied.",
    "share.textPage": "Discover the redesigned JIglesias proposal.",
    "share.textVehicle": "See this vehicle at JIglesias: {title}."
  },
  es: {
    title: "JIglesias | Renovación del sitio",
    htmlLang: "es",
    "nav.stock": "Stock",
    "nav.services": "Servicios",
    "nav.finance": "Financiación",
    "nav.contacts": "Contactos",
    "hero.eyebrow": "Concesionario en São Domingos de Rana, Cascais, Portugal",
    "hero.lead": "Una experiencia más rápida, elegante y orientada a contactos cualificados, con stock nuevo, usado y microcoches Ligier listos para descubrir.",
    "cinema.vitalStock": "Stock curado",
    "cinema.vitalLigier": "Ligier y microcoches",
    "cinema.vitalFinance": "Financiación guiada",
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
    "footer.text": "Propuesta visual de renovación. Contenido basado en el sitio actual jiglesias.com.",
    "ai.askPage": "Preguntar a la IA",
    "ai.askVehicle": "Preguntar a la IA",
    "ai.eyebrow": "Asistente inteligente",
    "ai.questionLabel": "Pregunta",
    "ai.placeholder": "Ej.: ¿Este vehículo es adecuado para ciudad?",
    "ai.send": "Enviar pregunta",
    "ai.pageTitle": "Preguntar a la IA sobre JIglesias",
    "ai.vehicleTitle": "Preguntar a la IA sobre {title}",
    "ai.pageIntro": "Puedo ayudar a elegir entre nuevos, usados, microcoches, financiación y visita al stand.",
    "ai.vehicleIntro": "Resumen rápido: {title}, precio {price}, datos esenciales visibles en la tarjeta.",
    "ai.suggestion": "Sugerencia: confirme disponibilidad, condiciones de financiación y opciones de entrega antes de la visita.",
    "ai.answer": "Buena pregunta. Para esta propuesta, el asistente recomienda comparar presupuesto, uso diario, kilometraje y disponibilidad. El siguiente paso ideal es pedir contacto al equipo JIglesias.",
    "share.page": "Compartir",
    "share.vehicle": "Compartir",
    "share.eyebrow": "Compartir rápido",
    "share.pageTitle": "Compartir JIglesias",
    "share.vehicleTitle": "Compartir {title}",
    "share.copy": "Copiar enlace",
    "share.copied": "Enlace copiado.",
    "share.textPage": "Conoce la propuesta renovada de JIglesias.",
    "share.textVehicle": "Vea este vehículo en JIglesias: {title}."
  },
  fr: {
    title: "JIglesias | Refonte du site",
    htmlLang: "fr",
    "nav.stock": "Stock",
    "nav.services": "Services",
    "nav.finance": "Financement",
    "nav.contacts": "Contacts",
    "hero.eyebrow": "Concession automobile à São Domingos de Rana, Cascais, Portugal",
    "hero.lead": "Une expérience plus rapide, élégante et orientée vers des contacts qualifiés, avec des véhicules neufs, d’occasion et des microvoitures Ligier à découvrir.",
    "cinema.vitalStock": "Stock sélectionné",
    "cinema.vitalLigier": "Ligier et microvoitures",
    "cinema.vitalFinance": "Financement guidé",
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
    "footer.text": "Proposition visuelle de refonte. Contenu basé sur le site actuel jiglesias.com.",
    "ai.askPage": "Demander à l’IA",
    "ai.askVehicle": "Demander à l’IA",
    "ai.eyebrow": "Assistant intelligent",
    "ai.questionLabel": "Question",
    "ai.placeholder": "Ex. : ce véhicule est-il adapté à la ville ?",
    "ai.send": "Envoyer la question",
    "ai.pageTitle": "Demander à l’IA sur JIglesias",
    "ai.vehicleTitle": "Demander à l’IA sur {title}",
    "ai.pageIntro": "Je peux aider à choisir entre neuf, occasion, microvoitures, financement et visite au showroom.",
    "ai.vehicleIntro": "Résumé rapide : {title}, prix {price}, informations essentielles visibles sur la carte.",
    "ai.suggestion": "Suggestion : confirmez la disponibilité, les conditions de financement et les options de reprise avant la visite.",
    "ai.answer": "Bonne question. Pour cette proposition, l’assistant recommande de comparer le budget, l’usage quotidien, le kilométrage et la disponibilité. La prochaine étape idéale est de demander un contact à l’équipe JIglesias.",
    "share.page": "Partager",
    "share.vehicle": "Partager",
    "share.eyebrow": "Partage rapide",
    "share.pageTitle": "Partager JIglesias",
    "share.vehicleTitle": "Partager {title}",
    "share.copy": "Copier le lien",
    "share.copied": "Lien copié.",
    "share.textPage": "Découvrez la proposition rénovée de JIglesias.",
    "share.textVehicle": "Voir ce véhicule chez JIglesias : {title}."
  }
};

function setLanguage(language) {
  currentLanguage = language;
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
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = dictionary[element.dataset.i18nPlaceholder];
    if (value) element.setAttribute("placeholder", value);
  });
  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });
  window.localStorage.setItem("jiglesias-language", language);
  if (activeAskButton && aiDrawer && !aiDrawer.hidden) {
    renderAskAI(getVehicleData(activeAskButton));
  }
  updateCarouselButtons();
}

function t(key, replacements = {}) {
  const dictionary = translations[currentLanguage] || translations.pt;
  return (dictionary[key] || translations.pt[key] || key).replace(/\{(\w+)\}/g, (_, name) => replacements[name] || "");
}

function getVehicleData(button) {
  const card = button.closest(".vehicle-card");
  if (!card) {
    return {
      type: "site",
      title: "JIglesias",
      price: "",
      url: `${window.location.origin}${window.location.pathname}`,
      text: t("share.textPage")
    };
  }
  const title = card.querySelector("h3")?.textContent.trim() || "JIglesias";
  const price = card.querySelector(".price")?.textContent.trim() || "";
  const details = [...card.querySelectorAll("dl div")].map((item) => item.textContent.trim()).join(" · ");
  return {
    type: "vehicle",
    title,
    price,
    details,
    url: `${window.location.origin}${window.location.pathname}#stock`,
    text: t("share.textVehicle", { title })
  };
}

function renderAskAI(data) {
  const isVehicle = data.type === "vehicle";
  aiTitle.textContent = isVehicle ? t("ai.vehicleTitle", data) : t("ai.pageTitle");
  aiResponse.innerHTML = `
    <p><strong>${isVehicle ? t("ai.vehicleIntro", data) : t("ai.pageIntro")}</strong></p>
    ${data.details ? `<p>${data.details}</p>` : ""}
    <p>${t("ai.suggestion")}</p>
  `;
}

function openAskAI(button) {
  activeAskButton = button;
  renderAskAI(getVehicleData(button));
  aiInput.value = "";
  aiDrawer.hidden = false;
  aiInput.focus();
}

function buildShareLinks(data) {
  const url = encodeURIComponent(data.url);
  const text = encodeURIComponent(data.text);
  const subject = encodeURIComponent(data.title);
  return [
    ["WhatsApp", `https://wa.me/?text=${text}%20${url}`],
    ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${url}`],
    ["X", `https://twitter.com/intent/tweet?text=${text}&url=${url}`],
    ["Email", `mailto:?subject=${subject}&body=${text}%0A${url}`]
  ];
}

function openShare(button) {
  activeShare = getVehicleData(button);
  const isVehicle = activeShare.type === "vehicle";
  shareTitle.textContent = isVehicle ? t("share.vehicleTitle", activeShare) : t("share.pageTitle");
  shareFeedback.textContent = "";
  shareLinks.innerHTML = buildShareLinks(activeShare).map(([label, href]) => (
    `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`
  )).join("");
  shareDrawer.hidden = false;
}

async function copyActiveShare() {
  if (!activeShare) return;
  const value = `${activeShare.text} ${activeShare.url}`;
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
  shareFeedback.textContent = t("share.copied");
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
askButtons.forEach((button) => {
  button.addEventListener("click", () => openAskAI(button));
});
shareButtons.forEach((button) => {
  button.addEventListener("click", () => openShare(button));
});
document.querySelector("[data-ai-close]")?.addEventListener("click", () => {
  aiDrawer.hidden = true;
  activeAskButton = null;
});
document.querySelector("[data-share-close]")?.addEventListener("click", () => {
  shareDrawer.hidden = true;
});
aiDrawer?.addEventListener("click", (event) => {
  if (event.target === aiDrawer) {
    aiDrawer.hidden = true;
    activeAskButton = null;
  }
});
shareDrawer?.addEventListener("click", (event) => {
  if (event.target === shareDrawer) shareDrawer.hidden = true;
});
aiSend?.addEventListener("click", () => {
  const question = aiInput.value.trim();
  const questionLine = question ? `<p><strong>${question}</strong></p>` : "";
  aiResponse.insertAdjacentHTML("beforeend", `${questionLine}<p>${t("ai.answer")}</p>`);
  aiInput.value = "";
});
copyShare?.addEventListener("click", copyActiveShare);
setLanguage(window.localStorage.getItem("jiglesias-language") || "pt");
updateCarouselButtons();
