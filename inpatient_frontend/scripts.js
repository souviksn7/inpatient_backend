
  // handle login
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      // Prevent form submission to avoid page reload
      event.preventDefault();

      // Get the form fields using FormData
      var formData = new FormData(this);

      // Access the form fields using dot notation
      var email = formData.get("email");
      var password = formData.get("password");

      // debug
      console.log("Email:", email);
      console.log("Password:", password);

      if (email != "" && password != "") {
        // Construct the user object
        var newUser = {
          email: email,
          password: password,
        };

        // Make an HTTP POST request to the login endpoint
        fetch("http://localhost:3006/frontend/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((response) => {
            // Parse the response body as JSON
            return response.json();
          })
          .then((data) => {
            // Check if the response indicates success
            if (data.error != null) {
              // Print the error message
              Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Login failed: " + data.error,
                showConfirmButton: false, // Remove the confirm button
                timer: 2000,
              });
              console.error("Login failed:", data.error);
            } else {
              // Print the success message
              Swal.fire({
                icon: "success",
                title: "Success!",
                text: data.success,
                showConfirmButton: false, // Remove the confirm button
                timer: 2000,
              });
              // login credentials (global variables)
              localStorage.setItem("loggedInName", data.data.name);
              localStorage.setItem("loggedInEmail", data.data.email);

              // window.loginDetails = { email: "loginEmail", password: "loginPassword" };

              setTimeout(() => {
                window.location.href = "./pages/hospital_registration.html";
              }, 2000);

              console.log("Login successful:", data.success);
              // Redirect to the hospital registration page if signup is successful
              // window.location.href = "./pages/hospital_registration.html";
            }
          })
          .catch((error) => {
            // Handle network error
            console.error("Error:", error);
          });
      } else {
        // Handle form validation error (e.g., show error message to user)
        console.error("Form validation failed: All fields are required");
      }
    });

  // handle signup

  document
    .getElementById("signupForm")
    .addEventListener("submit", function (event) {
      // Prevent form submission to avoid page reload
      event.preventDefault();

      // Get the form fields using FormData
      var formData = new FormData(this);

      // Access the form fields using dot notation
      var name = formData.get("name");
      var email = formData.get("email");
      var password = formData.get("password");

      // Check if form fields are not empty
      if (name !== "" && email !== "" && password !== "") {
        // Construct the user object
        var newUser = {
          name: name,
          email: email,
          password: password,
        };

        // Make an HTTP POST request to the signup endpoint
        fetch("http://localhost:3006/frontend/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((response) => {
            // Parse the response body as JSON
            return response.json();
          })
          .then((data) => {
            // Check if the response indicates success
            if (data.error != null) {
              // Print the error message
              Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Signup failed: " + data.error,
                showConfirmButton: false, // Remove the confirm button
                timer: 2000,
              });
              console.error("Signup failed:", data.error);
            } else {
              // Print the success message
              Swal.fire({
                icon: "success",
                title: "Success!",
                text: data.success,
                showConfirmButton: false, // Remove the confirm button
                timer: 2000,
              });
              
              // login credentials (global variables)
              localStorage.setItem("loggedInName", data.data.name);
              localStorage.setItem("loggedInEmail", data.data.email);

              setTimeout(() => {
                window.location.href = "./pages/hospital_registration.html";
              }, 2000);
              console.log(data.success);
              // Redirect to the hospital registration page if signup is successful
              // window.location.href = "./pages/hospital_registration.html";
            }
          })
          .catch((error) => {
            // Handle network error
            console.error("Error:", error);
          });
      } else {
        // Handle form validation error (e.g., show error message to user)
        console.error("Form validation failed: All fields are required");
      }
    });


  function redirectToProfilePage() {
    // Display loader
    document.querySelector(".loader-container").style.display = "flex";

    // Redirect after 500ms
    setTimeout(function () {
      window.location.href = "/inpatient_frontend/pages/profile.html"; // Replace with the URL of the target page
    }, 500);
  }

  function redirectToHospitalRegistration() {
    // Display loader
    document.querySelector(".loader-container").style.display = "flex";

    // Redirect after 500ms
    setTimeout(function () {
      window.location.href =
        "/inpatient_frontend/pages/hospital_registration.html"; // Replace with the URL of the target page
    }, 500);
  }

  function redirectToCheckStatistics() {
    // Display loader
    document.querySelector(".loader-container").style.display = "flex";

    // Redirect after 500ms
    setTimeout(function () {
      window.location.href = "/inpatient_frontend/pages/check_statistics.html"; // Replace with the URL of the target page
    }, 500);
  }

  function redirectToLicenseRegistration() {
    // Display loader
    document.querySelector(".loader-container").style.display = "flex";

    // Redirect after 500ms
    setTimeout(function () {
      window.location.href =
        "/inpatient_frontend/pages/license_registration.html"; // Replace with the URL of the target page
    }, 500);
  }

