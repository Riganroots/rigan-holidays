const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const filterButtons = document.querySelectorAll(".filter-btn");
const packageCards = document.querySelectorAll(".package-card");
const tripForm = document.getElementById("tripForm");
const currentYear = document.getElementById("currentYear");

const whatsAppNumber = "9779800000000";

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach(function (item) {
      item.classList.remove("active");
    });
    button.classList.add("active");

    packageCards.forEach(function (card) {
      const categories = card.dataset.categories.split(" ");
      const shouldShow = selectedFilter === "all" || categories.includes(selectedFilter);
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

if (tripForm) {
  tripForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(tripForm);
    const inquiryLines = [
      "Hello Rigan Holidays, I would like to plan an international trip.",
      "",
      "Full Name: " + (formData.get("fullName") || ""),
      "Phone / WhatsApp: " + (formData.get("phone") || ""),
      "Email: " + (formData.get("email") || ""),
      "Destination Country: " + (formData.get("destinationCountry") || ""),
      "Number of Travelers: " + (formData.get("travelers") || ""),
      "Travel Date: " + (formData.get("travelDate") || ""),
      "Budget Range: " + (formData.get("budgetRange") || ""),
      "Trip Type: " + (formData.get("tripType") || ""),
      "Message: " + (formData.get("message") || ""),
      "",
      "Please share package details and the next steps."
    ];

    const whatsAppUrl = "https://wa.me/" + whatsAppNumber + "?text=" + encodeURIComponent(inquiryLines.join("\n"));
    window.open(whatsAppUrl, "_blank", "noopener,noreferrer");
  });
}
