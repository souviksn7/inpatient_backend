// Dummy hospitals array
const hospitals = [
    {
        "id": 1,
        "clientid_dev": "3ed56593-344b-449c-9f72-3fd110418159",
        "clientid_prod": "2b21c320-00ca-4eed-b166-fedfccd1e355",
        "hospital_name": "CHOP",
        "description": null
    },
    {
        "id": 2,
        "clientid_dev": "3ed56593-344b-449c-9f72-3fd1104181",
        "clientid_prod": "2b21c320-00ca-4eed-b166-fedfccd1e55",
        "hospital_name": "CHP",
        "description": "jdfksjhfkjsdhkjf"
    },
    {
        "id": 3,
        "clientid_dev": "3ed56593-344b-449c-9f72-3fd11041",
        "clientid_prod": "2b21c320-00ca-4eed-b166-fedfccd1e5",
        "hospital_name": "CP",
        "description": "jdfksjhfkjsdhkjf"
    }
];

function populateDropdown() {
    const dropdown = document.getElementById('hospitalDropdown');

    // Create a default "Select" option
    let defaultOption = document.createElement('option');
    defaultOption.textContent = "Select a Hospital";
    defaultOption.value = "";
    dropdown.appendChild(defaultOption);

    // Populate dropdown with hospitals
    hospitals.forEach((hospital) => {
        let option = document.createElement('option');
        option.textContent = hospital.hospital_name;
        option.value = hospital.id;
        dropdown.appendChild(option);
    });
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

    // Convert the date to the required format, if necessary
    const dateToSend = new Date(date).toDateString();

    // Prepare the body of the post request
    const body = {
        hospitalId: parseInt(hospitalId), // Ensure it's an integer
        date: dateToSend
    };

    console.log("body ", body);

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
        console.log('Success:', data);
        // Handle success - you might want to display the statistics on the page
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error
    });
});

// statistics table

var statistics = [
    {
        "id": 1,
        "baseurl": "https://fhir.epic.com/interconnect-fhir-oauth/api/",
        "serverurl": "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4",
        "patient_id": "eOPSKZbz6YIgoilQprzPy0Q3",
        "patient_fname": "undefined",
        "patient_lname": "undefined",
        "userid": "TESTINGUSER@EPIC.COM",
        "hospital_name": "CHOP",
        "dob": "9/9/1983",
        "encounter_id": "eVffiE7SavpOc0PtATuBQWg3",
        "date": "2024-03-20",
        "timestamp": "Wed Mar 20 2024 18:18:39 GMT+0530 (India Standard Time)",
        "client_id": 1
    },
    {
        "id": 2,
        "baseurl": "https://fhir.epic.com/interconnect-fhir-oauth/api/",
        "serverurl": "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4",
        "patient_id": "eOPSKZbz6YIgoilQprzPy0Q3",
        "patient_fname": "undefined",
        "patient_lname": "undefined",
        "userid": "TESTINGUSER@EPIC.COM",
        "hospital_name": "CHOP",
        "dob": "9/9/1983",
        "encounter_id": "eVffiE7SavpOc0PtATuBQWg3",
        "date": "2024-03-20",
        "timestamp": "Wed Mar 20 2024 18:23:34 GMT+0530 (India Standard Time)",
        "client_id": 1
    },
    {
        "id": 3,
        "baseurl": "https://fhir.epic.com/interconnect-fhir-oauth/api/",
        "serverurl": "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4",
        "patient_id": "eOPSKZbz6YIgoilQprzPy0Q3",
        "patient_fname": "undefined",
        "patient_lname": "undefined",
        "userid": "TESTINGUSER@EPIC.COM",
        "hospital_name": "CHOP",
        "dob": "9/9/1983",
        "encounter_id": "eVffiE7SavpOc0PtATuBQWg3",
        "date": "2024-03-20",
        "timestamp": "Wed Mar 20 2024 18:30:16 GMT+0530 (India Standard Time)",
        "client_id": 1
    },
    {
        "id": 4,
        "baseurl": "https://fhir.epic.com/interconnect-fhir-oauth/api/",
        "serverurl": "https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4",
        "patient_id": "eOPSKZbz6YIgoilQprzPy0Q3",
        "patient_fname": "undefined",
        "patient_lname": "undefined",
        "userid": "TESTINGUSER@EPIC.COM",
        "hospital_name": "CHOP",
        "dob": "9/9/1983",
        "encounter_id": "eVffiE7SavpOc0PtATuBQWg3",
        "date": "2024-03-20",
        "timestamp": "Wed Mar 20 2024 18:32:12 GMT+0530 (India Standard Time)",
        "client_id": 1
    }
];

// Function to populate table rows with data
function populateTable() {
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
populateTable();