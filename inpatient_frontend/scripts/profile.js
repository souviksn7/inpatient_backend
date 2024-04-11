// // profile information handle
document.getElementById("name").value = localStorage.getItem("loggedInEmail");
document.getElementById("email").value = localStorage.getItem("loggedInEmail");

// handle logout
function logoutClicked(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // setting email, password as empty string
  localStorage.setItem("loggedInEmail", "");
  localStorage.setItem("password", "");

  Swal.fire({
    icon: "success",
    title: "Success!",
    text: "logged out successfully",
    showConfirmButton: false, // Remove the confirm button
    timer: 2000,
  });

  setTimeout(() => {
    window.location.href = "/inpatient_frontend/index.html";
  }, 2000);
}
