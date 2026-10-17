const menuButton = document.querySelector(".header__menu");
const navigation = document.querySelector(".header__nav");
const servicesTrigger = document.querySelector(".services-trigger");
const servicesMenu = document.querySelector(".services-menu");
const talentViewport = document.querySelector(".talent__viewport");
const talentCards = document.querySelectorAll(".talent-card");
const useCaseTabs = document.querySelectorAll(".use-tab");
const scrollBehavior = window.matchMedia("(prefers-reduced-motion: reduce)")
  .matches
  ? "auto"
  : "smooth";

menuButton?.addEventListener("click", () => {
  const isOpen = navigation?.classList.toggle("is-open") ?? false;
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

const closeServicesMenu = () => {
  if (!servicesMenu || !servicesTrigger) return;
  servicesMenu.hidden = true;
  servicesTrigger.setAttribute("aria-expanded", "false");
};

servicesTrigger?.addEventListener("click", () => {
  if (!servicesMenu) return;
  const isOpen = !servicesMenu.hidden;
  servicesMenu.hidden = isOpen;
  servicesTrigger.setAttribute("aria-expanded", String(!isOpen));
});

navigation?.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    closeServicesMenu();
    navigation.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".services-control")) closeServicesMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && servicesMenu && !servicesMenu.hidden) {
    closeServicesMenu();
    servicesTrigger?.focus();
  }
});

document.querySelector(".talent-prev")?.addEventListener("click", () => {
  talentViewport?.scrollBy({ left: -286, behavior: scrollBehavior });
});

document.querySelector(".talent-next")?.addEventListener("click", () => {
  talentViewport?.scrollBy({ left: 286, behavior: scrollBehavior });
});

document.querySelector("#talent-list")?.addEventListener("click", (event) => {
  const card = event.target.closest(".talent-card");
  if (!card || !talentCards.length) return;
  card.scrollIntoView({
    behavior: scrollBehavior,
    block: "nearest",
    inline: "center",
  });
});

const useCasePanel = document.querySelector('[role="tabpanel"]');

useCaseTabs.forEach((tab, index) => {
  tab.id ||= `use-case-tab-${index + 1}`;

  tab.addEventListener("click", () => {
    useCaseTabs.forEach((item) => {
      const isSelected = item === tab;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-selected", String(isSelected));
    });
    useCasePanel?.setAttribute("aria-labelledby", tab.id);
  });

  tab.addEventListener("keydown", (event) => {
    const currentIndex = Array.from(useCaseTabs).indexOf(tab);
    let nextIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % useCaseTabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + useCaseTabs.length) % useCaseTabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = useCaseTabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    useCaseTabs[nextIndex].focus();
    useCaseTabs[nextIndex].click();
  });
});

const activeUseCaseTab = document.querySelector(
  '.use-tab[aria-selected="true"]',
);
if (activeUseCaseTab) {
  activeUseCaseTab.id ||= `use-case-tab-${Array.from(useCaseTabs).indexOf(activeUseCaseTab) + 1}`;
  useCasePanel?.setAttribute("aria-labelledby", activeUseCaseTab.id);
}

document.querySelector(".proposal-button")?.addEventListener("click", () => {
  document.dispatchEvent(new CustomEvent("proposal:request"));
});
