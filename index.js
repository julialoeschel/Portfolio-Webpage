const portfoliotButton = document.querySelector("[data-js='portfolio-button']");
const portfolioPage = document.querySelector("[data-js='portfolio-page']");
const contactButton = document.querySelector("[data-js='contact-button']");
const contactPage = document.querySelector("[data-js='contact-page']");
const cvButton = document.querySelector("[data-js='cv-button']");
const cvPage = document.querySelector("[data-js='cv-page']");
const portfolio1 = document.querySelector("[data-js='portfolio-1']");
const portfolio2 = document.querySelector("[data-js='portfolio-2']");
const portfolio3 = document.querySelector("[data-js='portfolio-3']");
const portfolio4 = document.querySelector("[data-js='portfolio-4']");
const portfolio5 = document.querySelector("[data-js='portfolio-5']");
const portfolio6 = document.querySelector("[data-js='portfolio-6']");
const portfolio1container = document.querySelector(
  "[data-js='portfolio1-container']"
);
const portfolio2container = document.querySelector(
  "[data-js='portfolio2-container']"
);
const portfolio3container = document.querySelector(
  "[data-js='portfolio3-container']"
);
const portfolio4container = document.querySelector(
  "[data-js='portfolio4-container']"
);
const portfolio5container = document.querySelector(
  "[data-js='portfolio5-container']"
);
const portfolio6container = document.querySelector(
  "[data-js='portfolio6-container']"
);

portfoliotButton.addEventListener("click", () => {
  hideAll();
  portfolioPage.classList.remove("hidden");
  portfoliotButton.classList.add("activePage");
  contactButton.classList.remove("activePage");
  cvButton.classList.remove("activePage");
});

contactButton.addEventListener("click", () => {
  hideAll();
  contactPage.classList.remove("hidden");

  portfoliotButton.classList.remove("activePage");
  contactButton.classList.add("activePage");
  cvButton.classList.remove("activePage");
});

cvButton.addEventListener("click", () => {
  hideAll();
  cvPage.classList.remove("hidden");
  portfoliotButton.classList.remove("activePage");
  contactButton.classList.remove("activePage");
  cvButton.classList.add("activePage");
});

portfolio1container.addEventListener("click", () => {
  hideAll();
  portfolio1.classList.remove("hidden");
});

portfolio2container.addEventListener("click", () => {
  hideAll();
  portfolio2.classList.remove("hidden");
});

portfolio3container.addEventListener("click", () => {
  hideAll();
  portfolio3.classList.remove("hidden");
});

portfolio4container.addEventListener("click", () => {
  hideAll();
  portfolio4.classList.remove("hidden");
});

portfolio5container.addEventListener("click", () => {
  hideAll();
  portfolio5.classList.remove("hidden");
});

portfolio6container.addEventListener("click", () => {
  hideAll();
  portfolio6.classList.remove("hidden");
});

function hideAll() {
  portfolioPage.classList.add("hidden");
  contactPage.classList.add("hidden");
  cvPage.classList.add("hidden");
  portfolio1.classList.add("hidden");
  portfolio2.classList.add("hidden");
  portfolio3.classList.add("hidden");
  portfolio4.classList.add("hidden");
  portfolio5.classList.add("hidden");
  portfolio6.classList.add("hidden");
}
