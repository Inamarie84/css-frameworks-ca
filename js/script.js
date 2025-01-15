// const btn = document.querySelector("#menu-btn");
// const menu = document.querySelector("#mobile-menu");

// btn.addEventListener("click", () => {
//   menu.classList.toggle("hidden");
// });

// Show the Registration Form when 'Sign Up' is clicked
document.getElementById("show-register").addEventListener("click", function () {
  document.getElementById("login-form").classList.add("hidden");
  document.getElementById("register-form").classList.remove("hidden");
});

// Show the Login Form when 'Log In' is clicked
document.getElementById("show-login").addEventListener("click", function () {
  document.getElementById("register-form").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
});

// Handle form submission with JS (for both login and registration)
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  // For now, just redirect to the profile page
  window.location.href = "/profile"; // Redirect to profile page after login
});

document
  .getElementById("register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Validate passwords
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Redirect to the profile page after successful registration
    window.location.href = "/profile"; // Redirect to profile page after registration
  });
