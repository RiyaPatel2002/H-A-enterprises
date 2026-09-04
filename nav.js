(() => {
  const currentPage = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

  document.querySelectorAll('nav a[href]:not([aria-label])').forEach((link) => {
    const cleanHref = link.getAttribute("href").split("#")[0].split("?")[0];
    const targetPage = (cleanHref.split("/").pop() || "index.html").toLowerCase();

    if (targetPage === currentPage) {
      link.classList.add("nav-active");
      link.setAttribute("aria-current", "page");
    }
  });
})();
