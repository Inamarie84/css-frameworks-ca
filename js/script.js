document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#menu-btn");
  const menu = document.querySelector("#mobile-menu");

  // Toggle mobile menu
  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }

  // Utility function to toggle forms
  function toggleForms(showFormId, hideFormId) {
    const showForm = document.getElementById(showFormId);
    const hideForm = document.getElementById(hideFormId);
    if (showForm && hideForm) {
      showForm.classList.remove("hidden");
      hideForm.classList.add("hidden");
    }
  }

  // Show registration form
  const showRegisterBtn = document.getElementById("show-register");
  if (showRegisterBtn) {
    showRegisterBtn.addEventListener("click", () => {
      toggleForms("register-form", "login-form");
    });
  }

  // Show login form
  const showLoginBtn = document.getElementById("show-login");
  if (showLoginBtn) {
    showLoginBtn.addEventListener("click", () => {
      toggleForms("login-form", "register-form");
    });
  }

  // Handle login form submission
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "/profile"; // Redirect to profile page
    });
  }

  // Handle registration form submission
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const password = document.getElementById("register-password")?.value;
      const confirmPassword =
        document.getElementById("confirm-password")?.value;

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      window.location.href = "/profile"; // Redirect to profile page
    });
  }
});
