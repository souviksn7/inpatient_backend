// set previous usrl
function onloadThisPage() {
  // Get the element by its ID
  var element = document.getElementById("homePage_a");

  // Change the opacity to 1(100%)
  element.style.opacity = "1";
  localStorage.setItem("previousUrl", window.location.pathname);

  var numHospitalReg;

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

      var dayDetails = {
        dayName: "",
        hitCount: Number,
      };

      var lastWeek = [];

      for (let i = 0; i < 7; i++) {
        lastWeek.push({ dayDetails: dayDetails });
      }

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
      // loop over data came from backend

      for (let i = 0; i < data.length; i++) {
        const dateObj = new Date(data[i].date);
        const weekdayNumber = dateObj.getDay();
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

        if (todayNumber === weekdayNumber) {
          console.log("Today", weekday, todayWeekday);

          lastWeek[6].dayDetails = {
            dayName: "Today",
            hitCount: data[i].total_count,
          };
        } else {
          const index = (weekdayNumber + (6 - todayNumber) + 7) % 7;
          lastWeek[index].dayDetails = {
            dayName: weekday,
            hitCount: Number(data[i].total_count),
          };
        }
      }
      for (let i = 0; i < lastWeek.length; i++) {
        if (lastWeek[i].dayDetails.dayName === "") {
          const weekdayNumber = (todayNumber - (6 - i) + 7) % 7;
          const weekday = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ][weekdayNumber];
          lastWeek[i].dayDetails = { dayName: weekday, hitCount: 0 };
        }
      }
      console.log("lastWeek ", lastWeek);

      // handle chart starts ------------------------------------------------------------------------------

      // handle hitChart------------------------

      const ctxHits = document.getElementById("hitChart");

      new Chart(ctxHits, {
        type: "line",
        data: {
          labels: [
            lastWeek[0].dayDetails.dayName,
            lastWeek[1].dayDetails.dayName,
            lastWeek[2].dayDetails.dayName,
            lastWeek[3].dayDetails.dayName,
            lastWeek[4].dayDetails.dayName,
            lastWeek[5].dayDetails.dayName,
            lastWeek[6].dayDetails.dayName,
          ],
          datasets: [
            {
              label: "Number of total hits each day last week",
              data: [
                lastWeek[0].dayDetails.hitCount,
                lastWeek[1].dayDetails.hitCount,
                lastWeek[2].dayDetails.hitCount,
                lastWeek[3].dayDetails.hitCount,
                lastWeek[4].dayDetails.hitCount,
                lastWeek[5].dayDetails.hitCount,
                lastWeek[6].dayDetails.hitCount,
              ],
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
    })
    .catch((error) => {
      // Handle errors
      console.error("There was a problem with the fetch operation:", error);
    });

  // handle get number of hospital registration per day

  fetch("http://localhost:3006/frontend/hospitalRegPerDay")
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
      console.log("hospital registraion ", data);

      var dayDetails = {
        dayName: "",
        hospitalCount: Number,
      };

      var lastWeek = [];

      for (let i = 0; i < 7; i++) {
        lastWeek.push({ dayDetails: dayDetails });
      }

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

      // loop over data came from backend
      for (let i = 0; i < data.length; i++) {
        const dateObj = new Date(data[i].date);
        const weekdayNumber = dateObj.getDay();
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
        // console.log(weekdayNumber, weekday, dateObj, data[i].total_count);

        if (todayNumber === weekdayNumber) {
          console.log("Today", weekday, todayWeekday);

          lastWeek[6].dayDetails = {
            dayName: "Today",
            hospitalCount: data[i].hospitals_count,
          };
        } else {
          const index = (weekdayNumber + (6 - todayNumber) + 7) % 7;
          lastWeek[index].dayDetails = {
            dayName: weekday,
            hospitalCount: Number(data[i].hospitals_count),
          };
        }
      }
      for (let i = 0; i < lastWeek.length; i++) {
        if (lastWeek[i].dayDetails.dayName === "") {
          const weekdayNumber = (todayNumber - (6 - i) + 7) % 7;
          const weekday = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ][weekdayNumber];
          lastWeek[i].dayDetails = { dayName: weekday, hitCount: 0 };
        }
      }
      console.log("lastWeek ", lastWeek);

      // handle hospitalRegistrationChart------------------------

      const ctxHospitalRegistration = document.getElementById(
        "hospitalRegistrationChart"
      );

      new Chart(ctxHospitalRegistration, {
        type: "bar",
        data: {
          labels: [
            lastWeek[0].dayDetails.dayName,
            lastWeek[1].dayDetails.dayName,
            lastWeek[2].dayDetails.dayName,
            lastWeek[3].dayDetails.dayName,
            lastWeek[4].dayDetails.dayName,
            lastWeek[5].dayDetails.dayName,
            lastWeek[6].dayDetails.dayName,
          ],
          datasets: [
            {
              label: "Number of hospital registration each day last week",
              data: [
                lastWeek[0].dayDetails.dayName,
                lastWeek[1].dayDetails.hospitalCount,
                lastWeek[2].dayDetails.hospitalCount,
                lastWeek[3].dayDetails.hospitalCount,
                lastWeek[4].dayDetails.hospitalCount,
                lastWeek[5].dayDetails.hospitalCount,
                lastWeek[6].dayDetails.hospitalCount,
              ],
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
    })
    .catch((error) => {
      // Handle errors
      console.error("There was a problem with the fetch operation:", error);
    });
}
onloadThisPage();

document.getElementById("hopital-stat-button")




