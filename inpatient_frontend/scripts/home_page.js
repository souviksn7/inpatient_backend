// set previous usrl
function onloadThisPage() {
  // Get the element by its ID
  var element = document.getElementById("homePage_a");

  // Change the opacity to 1(100%)
  element.style.opacity = "1";
  localStorage.setItem("previousUrl", window.location.pathname);

  // handle get total number of hospital registered
  fetch("http://localhost:3006/frontend/numHospitalReg")
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Parse the JSON response
      return response.json();
    })
    .then((data) => {
      // Work with the data
      const numHospitalReg = data[0].hospital_count;
      console.log("Total number of hospitals ", numHospitalReg);

      // Set the text content of the span element directly
      const element = document.getElementById("hospital-count");
      element.textContent = numHospitalReg;
    })
    .catch((error) => {
      // Handle errors
      console.error("There was a problem with the fetch operation:", error);
    });

  // handle get number of hits per day
  fetch("http://localhost:3006/frontend/totalHitsPerDay")
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Parse the JSON response
      return response.json();
    })
    .then((data) => {
      // Work with the data
      console.log("hits per day last week ", data);

      // handle today
      const todayDateObj = new Date();
      todayNumber = todayDateObj.getDay();
      const todayWeekday = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ][todayNumber];
        // console.log("todayNumber", todayNumber, todayWeekday);
      // loop over data came from backend
      for (let i = 0; i < data.length; i++) {
        // console.log(data[i].date);
        const dateObj = new Date(data[i].date);
        // console.log(data[i].date, " gap ", dateObj);
        const weekdayNumber = dateObj.getDay();
        // console.log("weekdayNumber ", weekdayNumber);
        // Convert the numerical weekday to a string (e.g., "Friday")
        const weekday = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ][weekdayNumber];
        console.log(weekdayNumber, weekday, dateObj1, data[i].total_count);

        if(todayNumber === weekdayNumber){
            console.log("Today");
            lastWeek[6].dayDetails.dayName = "Today";
            lastWeek[6].dayDetails.hitCount = data[i].total_count;
        }
        else{
            const index = (weekdayNumber + (6-todayNumber) + 7)%7;
            lastWeek[index].dayDetails.dayName = weekday;
            lastWeek[index].dayDetails.hitCount = data[i].total_count;
        }
      }
      console.log("lastWeek ", lastWeek);
    })
    .catch((error) => {
      // Handle errors
      console.error("There was a problem with the fetch operation:", error);
    });
}
onloadThisPage();

var dayDetails = {
  "dayName": "",
  "hitCount": Number,
};

var weekdays = [
];

var lastWeek = [];

for(let i=0;i<7;i++){
    lastWeek.push({"dayDetails": dayDetails})
}

var numHospitalReg;

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
