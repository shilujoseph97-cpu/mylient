
document.addEventListener("DOMContentLoaded", function () {

  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page");

  function showPage(pageName) {
    pages.forEach(page => {
      page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageName);

    if (selectedPage) {
      selectedPage.classList.add("active");
    }

    navLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.dataset.page === pageName
      );
    });

    window.scrollTo(0, 0);
  }

  navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      showPage(this.dataset.page);
    });
  });

});
