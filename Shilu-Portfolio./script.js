
const links = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

function showPage(pageId) {
  pages.forEach((page) => {
    page.classList.toggle("active", page.id === pageId);
  });

  links.forEach((link) => {
    link.classList.toggle("active", link.dataset.page === pageId);
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showPage(link.dataset.page);
  });
});
