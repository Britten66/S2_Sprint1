/* =========================================
   Sprint 1 | Semester 2 | Oct 19th 2025
   Authors: Justin Seaward, Matt Reid, Christopher Britten
   ========================================= */

// loading shared header section

async function loadShared(section, file) {
  try {
    const res = await fetch(`/assets/shared/${file}`);

    //   error handling here

    if (!res.ok) throw new Error(`${file} not found`);
    const html = await res.text();
    document.querySelector(section).innerHTML = html;
  } catch (err) {
    console.error(`Error Loading ${file}:`, err);
  }
}

// ================================= DOM HERE =================
document.addEventListener("DOMContentLoaded", async () => {
  //this waits until the header laods all the way
  await loadShared("header", "header.html");

  if (typeof highlightActiveNav === "function") {
    highlightActiveNav(); // this will activate existing link
  }
  // loads footer here
  await loadShared("footer", "footer.html");
});

// Testimonial section

