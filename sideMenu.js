document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector("#menu-btn");

  // Create the side menu container
  const sideMenu = document.createElement("div");
  sideMenu.classList.add("side-menu");
  document.body.appendChild(sideMenu);

  // Anime categories
  const categories = ["Action", "Adventure", "Fantasy", "Sci-Fi", "Romance", "Horror", "Comedy", "Drama"];

  categories.forEach(category => {
      const categoryItem = document.createElement("div");
      categoryItem.classList.add("menu-item");
      categoryItem.innerText = category;
      sideMenu.appendChild(categoryItem);
  });

  // Toggle menu on button click
  menuButton.addEventListener("click", function () {
      sideMenu.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
      if (!sideMenu.contains(event.target) && event.target !== menuButton) {
          sideMenu.classList.remove("active");
      }
  });
});
