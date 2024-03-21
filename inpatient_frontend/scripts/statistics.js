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