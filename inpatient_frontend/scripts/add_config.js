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

let configDetails = {
  medContextIndex: "",
  filterLocationCodingIndex: "",
  filterLocationIdIndex: "",
  preFilterEncounterCsnIndex: "",
  preFilterEncounterTypeIndex: "",
  preFilterEncounterClassIndex: "",
};

// Adding event listener for form submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

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
