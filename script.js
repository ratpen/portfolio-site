// =========================
// Open & Close Sections
// =========================
function openSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.classList.add("active");
    document.body.style.overflow = "hidden"; // lock scroll
  }
}

function closeSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.classList.remove("active");
    document.body.style.overflow = ""; // unlock scroll
  }
}

// =========================
// Retro Cursor
// =========================
const cursor = document.querySelector(".cursor");

if (cursor) {
  document.addEventListener("mousemove", e => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";

    // Trail effect
    const trail = document.createElement("div");
    trail.classList.add("trail");
    document.body.appendChild(trail);
    trail.style.left = e.pageX + "px";
    trail.style.top = e.pageY + "px";
    setTimeout(() => trail.remove(), 400);
  });

  document.addEventListener("click", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(2)";
    setTimeout(() => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
    }, 150);
  });
}

// =========================
// Contact Form
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      try {
       const formData = new FormData(form);

const response = await fetch("https://script.google.com/macros/s/AKfycbwEs1sP0zsh0dWorQebxQFAgB7aNphw7xqH3zInG1NokLOyJseayUaK94J82H1TdsW6sg/exec", {
  method: "POST",
  body: formData
});


        const resultText = await response.text(); // FormEasy may return plain text
        console.log("Result:", resultText);

        alert("Message sent successfully!");
        form.reset();
      } catch (err) {
        console.error("Fetch error:", err);
        alert("There was an error sending your message.");
      }
    });
  }
});

