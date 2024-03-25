var statistics = []


function populateDropdown() {
    const dropdown = document.getElementById('hospitalDropdown');

    // Create a default "Select" option
    let defaultOption = document.createElement('option');
    defaultOption.textContent = "Select a Hospital*";
    defaultOption.value = "";
    let hospitals = [];
    dropdown.appendChild(defaultOption);
    // fetch hospital data
    fetch('http://localhost:3006/frontend/getHospitalData')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // debug
        // console.log("hospitals data", data);
        // Assuming the response contains an array named 'hospitals'
        hospitals = data;
        // Now you can work with the 'hospitals' array

        // sort hospitals by hospital name
        hospitals.sort(function(hospital1, hospital2){
            let hospital1Name = hospital1.hospital_name.toUpperCase();
            let hospital2Name = hospital2.hospital_name.toUpperCase();

            if (hospital1Name < hospital2Name) {
                return -1;
            }
            if (hospital1Name > hospital2Name) {
                return 1;
            }
            return 0;
        })
        // debug
        // console.log("hospitals", hospitals);
        hospitals.forEach((hospital) => {
            let option = document.createElement('option');
            option.textContent = hospital.hospital_name;
            option.value = hospital.id;
            dropdown.appendChild(option);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

    // debug

    // Populate dropdown with hospitals
}

function logSelectedOption() {
    const dropdown = document.getElementById('hospitalDropdown');
    dropdown.addEventListener('change', function() {
        // Find the selected hospital object
        const selectedHospital = hospitals.find(hospital => hospital.id == this.value);
        // Log the selected hospital or a message if default option is selected
        console.log(selectedHospital ? selectedHospital : "No hospital selected");
    });
}

// Populate the dropdown on page load
populateDropdown();
// Attach the event listener to log the selected option
logSelectedOption();

// Added code to handle form submission and make the post request
document.querySelector('.custom-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const hospitalId = document.getElementById('hospitalDropdown').value;
    const date = document.querySelector('.date-picker input[type="date"]').value;

    const date1 = new Date(date)
    const year = date1.getFullYear();
    const month = String(date1.getMonth() + 1).padStart(2, "0");
    const day = String(date1.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    // Convert the date to the required format, if necessary
    const dateToSend = new Date(date).toDateString();

    // Prepare the body of the post request
    const body = {
        hospitalId: parseInt(hospitalId), // Ensure it's an integer
        date: dateToSend
    };

    // Make the post request
    fetch('http://localhost:3006/frontend/getStats', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => {
        console.log("data", data);
        // console.log('Success:', data);
        statistics = data.statistics;
        // console.log("statistics", statistics);
        populateTable();
        // Handle success - you might want to display the statistics on the page
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error
    });
});

// statistics table

// Function to populate table rows with data
function populateTable() {
    // document.querySelector("#statisticsTable").style.display = "";
    var tableBody = document.getElementById('tableBody');
    var html = '';

    statistics.forEach(function(statistic) {
        html += '<tr>';
        html += '<td>' + statistic.hospital_name + '</td>';
        html += '<td>' + statistic.client_id + '</td>';
        html += '<td>' + statistic.patient_fname + '</td>';
        html += '<td>' + statistic.patient_lname + '</td>';
        html += '<td>' + statistic.patient_id + '</td>';
        html += '<td>' + statistic.encounter_id + '</td>';
        html += '<td>' + statistic.baseurl + '</td>';
        html += '<td>' + statistic.serverurl + '</td>';
        html += '<td>' + statistic.userid + '</td>';
        html += '<td>' + statistic.dob + '</td>';
        html += '<td>' + statistic.date + '</td>';
        html += '<td>' + statistic.timestamp + '</td>';
        html += '</tr>';
    });

    tableBody.innerHTML = html;
}

// Call the function to populate the table
