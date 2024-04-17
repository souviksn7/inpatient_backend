function setPreviousPage(){
    localStorage.setItem("previousUrl", window.location.pathname);
}
setPreviousPage();

// profile information handle
document.getElementById("name").value = localStorage.getItem("loggedInName");
document.getElementById("email").value = localStorage.getItem("loggedInEmail");

// handle logout
function logoutClicked(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // setting email, password as empty string
  localStorage.setItem("loggedInName", "");
  localStorage.setItem("loggedInEmail", "");
  localStorage.setItem("loggedInUserPermission", "");
  localStorage.setItem("isLoggedIn", false);

  Swal.fire({
    icon: "success",
    title: "Success!",
    text: "logged out successfully",
    showConfirmButton: false, // Remove the confirm button
    timer: 2000,
  });

  setTimeout(() => {
    // Clear the input fields
    document.getElementById("myForm").reset();
    window.location.href = "/inpatient_frontend/index.html";
  }, 2000);
}
