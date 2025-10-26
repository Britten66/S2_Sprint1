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

// Wait for DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
  const commentForm = document.getElementById('comment-form');
  
  if (commentForm) {
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      const author = document.getElementById('comment-author').value;
      const commentText = document.getElementById('comment-text').value;
      
      if (!author || !commentText) {
        alert('Please fill in both name and comment fields');
        return;
      }

      // Create new comment element
      const commentsDisplay = document.getElementById('comments-display');
      const newCommentDiv = document.createElement('div');
      newCommentDiv.classList.add('test'); // Using the same styling as testimonials
      
      // Create the comment HTML structure
      newCommentDiv.innerHTML = `
        <blockquote>
          <p>"${commentText}"</p>
          <p id="name">- ${author}</p>
        </blockquote>
      `;
      
      // Add the new comment to the display area
      commentsDisplay.appendChild(newCommentDiv);

      // Clear the form
      commentForm.reset();
    });
  }
});

