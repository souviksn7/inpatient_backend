const form = document.querySelector(".custom-form");

function populateDropdown() {
  const dropdown = document.getElementById("hospitalDropdown");

  // Create a default "Select" option
  let defaultOption = document.createElement("option");
  defaultOption.textContent = "Select a Hospital*";
  defaultOption.value = "";
  let hospitals = [];
  dropdown.appendChild(defaultOption);
  // fetch hospital data
  fetch("http://localhost:3006/frontend/getHospitalData")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // debug
      // console.log("hospitals data", data);
      // Assuming the response contains an array named 'hospitals'
      hospitals = data;
      // Now you can work with the 'hospitals' array

      // sort hospitals by hospital name
      hospitals.sort(function (hospital1, hospital2) {
        let hospital1Name = hospital1.hospital_name.toUpperCase();
        let hospital2Name = hospital2.hospital_name.toUpperCase();

        if (hospital1Name < hospital2Name) {
          return -1;
        }
        if (hospital1Name > hospital2Name) {
          return 1;
        }
        return 0;
      });

      // debug
      // console.log("hospitals", hospitals);
      hospitals.forEach((hospital) => {
        // debug
        let option = document.createElement("option");
        option.textContent = hospital.hospital_name;
        option.value = hospital.id;
        dropdown.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });

  // debug

  // Populate dropdown with hospitals
}

function logSelectedOption() {
  const dropdown = document.getElementById("hospitalDropdown");
  dropdown.addEventListener("change", function () {
    // Find the selected hospital object
    const selectedHospital = hospitals.find(
      (hospital) => hospital.id == this.value
    );
    // Log the selected hospital or a message if default option is selected

    console.log(selectedHospital ? selectedHospital : "No hospital selected");
  });
}

// // Populate the dropdown on page load
// populateDropdown();
// // Attach the event listener to log the selected option
// logSelectedOption();

// handle form submit

document.addEventListener("DOMContentLoaded", function () {
  populateDropdown();
  logSelectedOption();
  setupFormSubmit();
  console.log(localStorage.getItem("loggedInEmail")); // Outputs: exampleUser
  console.log(localStorage.getItem("password")); // Outputs: examplePassword
});

function setupFormSubmit() {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const hospitalDropdown = document.getElementById("hospitalDropdown");
    const maxHitLimitInput = document.getElementById("maxHitLimit");

    const selectedHospitalId = hospitalDropdown.value;
    const maxHitLimit = maxHitLimitInput.value;

    if (!selectedHospitalId) {
      console.log("Please select a hospital");
      return; // Exit the function if no hospital is selected
    }

    const requestData = {
      hospitalId: parseInt(selectedHospitalId, 10),
      max_limit: parseInt(maxHitLimit, 10),
    };
    console.log("requestData", requestData);
    sendPostRequest(requestData);
  });
}

function sendPostRequest(data) {
  console.log("in sendPostRequest data", data);
  fetch("http://localhost:3006/frontend/addLisence", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("data: ", data);
      if (data.error != null) {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: data.error,
          showConfirmButton: false, // Remove the confirm button
          timer: 2000, // Automatically close after 1.5 seconds
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: data.message,
          showConfirmButton: false, // Remove the confirm button
          timer: 2000, // Automatically close after 1.5 seconds
        });
        form.reset();
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred during license registration.");
    });
}
