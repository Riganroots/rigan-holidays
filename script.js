function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}

function filterPackages(category, button) {
  const buttons = document.querySelectorAll(".filter-btn");
  const packages = document.querySelectorAll(".package");

  buttons.forEach(function(btn) {
    btn.classList.remove("active");
  });

  button.classList.add("active");

  packages.forEach(function(card) {
    const cardCategory = card.getAttribute("data-category");

    if (category === "all" || cardCategory.includes(category)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("tripForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  const phoneNumber = "9779800000000";

  const message = `
Hello Rigan Holidays,

I want to plan an international trip.

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || "Not provided"}
Destination: ${data.destination}
Travelers: ${data.travelers || "Not provided"}
Travel Date: ${data.date || "Not provided"}
Budget: ${data.budget || "Not provided"}
Trip Type: ${data.type || "Not provided"}
Message: ${data.message || "Not provided"}
  `.trim();

  const whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  window.open(whatsappUrl, "_blank");
});
