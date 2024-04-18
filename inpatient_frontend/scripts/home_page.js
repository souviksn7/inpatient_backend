// set previous usrl
function onloadThisPage() {
  // Get the element by its ID
  var element = document.getElementById("homePage_a");

  // Change the opacity to 1(100%)
  element.style.opacity = "1";
  localStorage.setItem("previousUrl", window.location.pathname);
}
onloadThisPage();

var lastWeek = {
    "firstDay": "",
    "secondDay": "",
    "thirdDay": "",
    "fourthDay": "",
    "fifthDay": "",
    "sixthDay": "",
    "today": ""
}



// handle chart starts

const ctxHits = document.getElementById("hitChart");

new Chart(ctxHits, {
    type: "line",
    data: {
      labels: [
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "Monday",
        "Today",
      ],
      datasets: [
        {
          label: "Number of total hits each day last week",
          data: [100, 120, 190, 30, 50, 20, 30],
          borderWidth: 1,
          borderColor: "red", // Primary color (blue)
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  
const ctxHospitalRegistration = document.getElementById(
  "hospitalRegistrationChart"
);

new Chart(ctxHospitalRegistration, {
  type: "bar",
  data: {
    labels: [
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "Monday",
      "Today",
    ],
    datasets: [
      {
        label: "Number of hospital registration each day last week",
        data: [10, 12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// handle charts ends
