function setPreviousPage() {
  // Get the element by its ID
  var element = document.getElementById("addConfig_a");

  // Change the opacity to 1(100%)
  element.style.opacity = "1";
  localStorage.setItem("previousUrl", window.location.pathname);
}
setPreviousPage();

// Selecting the form element
const form = document.querySelector(".custom-form");

// handle select hospital starts

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
  
  // Populate the dropdown on page load
  populateDropdown();
  // Attach the event listener to log the selected option
  logSelectedOption();

// handle select hospital ends 


// Adding event listener for form submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const hospitalId = document.getElementById("hospitalDropdown").value;

  const medContextIndexValue = document.getElementById("medContextIndex").value;
  const filterLocationCodingIndexValue = document.getElementById(
    "filterLocationCodingIndex"
  ).value;
  const filterLocationIdIndexValue = document.getElementById(
    "filterLocationIdIndex"
  ).value;
  const preFilterEncounterCsnIndexValue = document.getElementById(
    "preFilterEncounterCsnIndex"
  ).value;
  const preFilterEncounterTypeIndexValue = document.getElementById(
    "preFilterEncounterTypeIndex"
  ).value;
  const preFilterEncounterClassIndexValue = document.getElementById(
    "preFilterEncounterClassIndex"
  ).value;

  const configDetails = {
    hospitalId: hospitalId,
    medContextIndex: medContextIndexValue,
    filterLocationCodingIndex: filterLocationCodingIndexValue,
    filterLocationIdIndex: filterLocationIdIndexValue,
    preFilterEncounterCsnIndex: preFilterEncounterCsnIndexValue,
    preFilterEncounterTypeIndex: preFilterEncounterTypeIndexValue,
    preFilterEncounterClassIndex: preFilterEncounterClassIndexValue,
  };

  console.log(configDetails);

  // Making the POST request
  fetch("http://localhost:3006/frontend/addConfig", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(configDetails),
  })
    .then((response) => {
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Added Config!",
          showConfirmButton: false, // Remove the confirm button
          timer: 2000, // Automatically close after 1.5 seconds
        });
        form.reset();
        console.log("Added Config!");
        // You can perform further actions here after the request is successful
      } else {
        console.error("Error in adding config:", response.statusText);
      }
    })
    .catch((error) => {
      console.error("Error in adding config:", error);
    });
});
