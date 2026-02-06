const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalDetails = document.getElementById("modal-details");
const modalGallery = document.getElementById("modal-gallery");
const toast = document.getElementById("toast");
const contactForm = document.getElementById("contact-form");

const projectData = [
  {
    title: "Prestij Konutları",
    description:
      "Prestij Konutları, geniş yeşil alanları ve akıllı ev teknolojileriyle üst segment yaşam sunar.",
    details: [
      { label: "Konum", value: "İstanbul" },
      { label: "Alan", value: "24.000 m²" },
      { label: "Teslim Tarihi", value: "2023" }
    ]
  },
  {
    title: "Merkez Ofis Plaza",
    description:
      "Merkez Ofis Plaza, kurumsal kiracılar için premium ofis katları ve ortak alanlar barındırır.",
    details: [
      { label: "Konum", value: "Ankara" },
      { label: "Alan", value: "18.500 m²" },
      { label: "Teslim Tarihi", value: "2024" }
    ]
  },
  {
    title: "Vadi Villaları",
    description:
      "Vadi Villaları, özel peyzaj ve güvenlik konseptiyle sakinlerine ayrıcalıklı bir yaşam alanı sunar.",
    details: [
      { label: "Konum", value: "İzmir" },
      { label: "Alan", value: "12.000 m²" },
      { label: "Teslim Tarihi", value: "2022" }
    ]
  },
  {
    title: "İnnovasyon Kampüsü",
    description:
      "İnnovasyon Kampüsü, teknoloji firmalarına sürdürülebilir ve esnek çalışma alanları sağlar.",
    details: [
      { label: "Konum", value: "Bursa" },
      { label: "Alan", value: "30.000 m²" },
      { label: "Teslim Tarihi", value: "2025" }
    ]
  },
  {
    title: "Marina Rezidans",
    description:
      "Marina Rezidans, deniz manzaralı daireleri ve premium sosyal tesisleriyle öne çıkar.",
    details: [
      { label: "Konum", value: "Antalya" },
      { label: "Alan", value: "15.500 m²" },
      { label: "Teslim Tarihi", value: "2023" }
    ]
  },
  {
    title: "Endüstriyel Lojistik Merkezi",
    description:
      "Endüstriyel Lojistik Merkezi, yüksek kapasiteli depo ve akıllı operasyon altyapısı sunar.",
    details: [
      { label: "Konum", value: "Kocaeli" },
      { label: "Alan", value: "40.000 m²" },
      { label: "Teslim Tarihi", value: "2024" }
    ]
  }
];

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.15 }
);

const revealElements = document.querySelectorAll(".reveal");
revealElements.forEach(element => observer.observe(element));

const setActiveLink = () => {
  let currentSection = sections[0].id;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) {
      currentSection = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${currentSection}`);
  });
};

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => {
      btn.classList.remove("is-active");
      btn.setAttribute("aria-selected", "false");
    });
    button.classList.add("is-active");
    button.setAttribute("aria-selected", "true");
    const filter = button.dataset.filter;
    projectCards.forEach(card => {
      const status = card.dataset.status;
      const shouldShow = filter === "all" || filter === status;
      card.style.display = shouldShow ? "flex" : "none";
    });
  });
});

const openModal = projectIndex => {
  const project = projectData[projectIndex];
  if (!project) return;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalDetails.innerHTML = "";
  modalGallery.innerHTML = "";

  project.details.forEach(detail => {
    const row = document.createElement("div");
    row.className = "modal-detail";
    row.innerHTML = `<span>${detail.label}</span><span>${detail.value}</span>`;
    modalDetails.appendChild(row);
  });

  for (let i = 1; i <= 3; i += 1) {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.textContent = `Görsel ${i}`;
    modalGallery.appendChild(item);
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

projectCards.forEach((card, index) => {
  const button = card.querySelector(".project-link");
  button.addEventListener("click", () => openModal(index));
});

modal.addEventListener("click", event => {
  if (event.target.dataset.close === "true") {
    closeModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

contactForm.addEventListener("submit", event => {
  event.preventDefault();
  toast.classList.add("is-visible");
  contactForm.reset();
  setTimeout(() => toast.classList.remove("is-visible"), 3000);
});

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.style.scrollBehavior = "smooth";
}
