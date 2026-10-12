
/* Ecotech website interactions */

// Replace with your real business number.
// Format: country code + mobile number, digits only.
const ECOTECH_PHONE = "910000000000";

const message =
  "Hi Ecotech, I'm interested in uPVC doors and windows. Please share product details and a quote.";

const whatsappURL =
  `https://wa.me/${ECOTECH_PHONE}?text=${encodeURIComponent(message)}`;

// WhatsApp buttons
const whatsappLink = document.getElementById("whatsappLink");
const floatingWhatsapp = document.getElementById("floatingWhatsapp");

if (whatsappLink) {
  whatsappLink.href = whatsappURL;
}

if (floatingWhatsapp) {
  floatingWhatsapp.href = whatsappURL;
  floatingWhatsapp.target = "_blank";
  floatingWhatsapp.rel = "noopener";
}

// Call button
const callLink = document.getElementById("callLink");

if (callLink) {
  callLink.href = `tel:+${ECOTECH_PHONE}`;
}

// Current year in footer
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.textContent = isOpen ? "✕" : "☰";
  });

  // Close the menu after clicking a navigation link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "☰";
    });
  });
}

// Scroll reveal animations
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  revealItems.forEach((item) => {
    observer.observe(item);
  });
} else {
  // Fallback for older browsers
  revealItems.forEach((item) => {
    item.classList.add("visible");
  });
}
