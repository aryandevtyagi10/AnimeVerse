document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  
  if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
          event.preventDefault();
          
          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;
          
          if (username === "admin" && password === "pass") {
              alert("Login successful!");
              window.location.href = "index.html";
          } else {
              alert("Invalid username or password");
          }
      });
  }

  // Ensure the login button redirects to login.html
  document.addEventListener("click", function (event) {
      const loginButton = event.target.closest("#login-button");
      if (loginButton) {
          window.location.href = "login.html";
      }
  });
});
