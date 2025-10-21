// highlight helper or handler

function highlightActiveNav() {
  //here the current page will be targeted
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  //finding all links in header to pick which is actice and which is not

  document.querySelectorAll("header a.nav-link").forEach((link) => {
    const linkPage = link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
      link.classList.add("active"); // this will highlight the selected link
      link.setAttribute("aria-current", "page");
      //for accessibiliy
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
}
