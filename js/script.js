const updatePricing = () => {
  const checkbox = document.querySelector("#packet-subscription");
  const listItems = document.querySelectorAll(".packets__list-item");

  const packetsPricing = {
    personalFirstLevel: {
      month: 8,
      year: 80,
    },
    regular: {
      month: 20,
      year: 200,
    },
    personalSecondLevel: {
      month: 48,
      year: 500,
    },
  };

  const isYearly = checkbox.checked;

  listItems.forEach((item, index) => {
    // Get the corresponding pricing key
    const pricingKey = Object.keys(packetsPricing)[index];

    if (pricingKey) {
      const priceElement = item.querySelector(".packets__item-price");
      const durationElement = item.querySelector(".packets__item-duration");

      const price = isYearly
        ? packetsPricing[pricingKey].year
        : packetsPricing[pricingKey].month;
      const duration = isYearly ? "/Year" : "/Month";

      // Update the price and duration elements
      priceElement.textContent = `$${price}`;
      durationElement.textContent = duration;
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  // Toggle Mobile Menu
  const mobileMenuToggleBtn = document.querySelector(
    ".navbar__toggle-mobile-menu"
  );
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");

  mobileMenuToggleBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("navbar__mobile-menu-items--active");
  });

  // Handling Active Platform
  const platforms = document.querySelectorAll(".platforms__list-item");

  platforms.forEach((platform) => {
    platform.addEventListener("click", () => {
      if (!platform.classList.contains("platforms__list-item--active")) {
        platforms.forEach((item) =>
          item.classList.remove("platforms__list-item--active")
        );
        platform.classList.add("platforms__list-item--active");
      }
    });
  });

  // Handling Active Packet Card
  const packetCards = document.querySelectorAll(".packets__list-item");

  packetCards.forEach((card) => {
    card.addEventListener("click", () => {
      if (!card.classList.contains("packets__list-item--active")) {
        packetCards.forEach((item) =>
          item.classList.remove("packets__list-item--active")
        );
        card.classList.add("packets__list-item--active");
      }
    });
  });

  // Packet Checkbox Label Styles
  const checkbox = document.querySelector("#packet-subscription");
  const labels = document.querySelectorAll(".packets__checkbox-label");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      labels[0].classList.remove("packets__checkbox-label--active");
      labels[1].classList.add("packets__checkbox-label--active");
    } else {
      labels[1].classList.remove("packets__checkbox-label--active");
      labels[0].classList.add("packets__checkbox-label--active");
    }
  });

  // Updating Cards Pricing Data
  updatePricing();

  // Update pricing whenever the checkbox changes
  checkbox.addEventListener("change", updatePricing);
});

// Change navbar bg color on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
    navbar.classList.remove("navbar--scroll");
  }
});
