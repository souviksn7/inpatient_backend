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

// // Populate the dropdown on page load
// populateDropdown();
// // Attach the event listener to log the selected option
// logSelectedOption();

// handle form submit

document.addEventListener('DOMContentLoaded', function() {
    populateDropdown();
    logSelectedOption();
    setupFormSubmit();
});

function setupFormSubmit() {
    const form = document.querySelector('.custom-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const hospitalDropdown = document.getElementById('hospitalDropdown');
        const maxHitLimitInput = document.getElementById('maxHitLimit');

        const selectedHospitalId = hospitalDropdown.value;
        const maxHitLimit = maxHitLimitInput.value;

        if (!selectedHospitalId) {
            console.log("Please select a hospital");
            return; // Exit the function if no hospital is selected
        }

        const requestData = {
            hospitalId: parseInt(selectedHospitalId, 10),
            max_limit: parseInt(maxHitLimit, 10)
        };
        console.log("requestData", requestData);
        sendPostRequest(requestData);
    });
}

function sendPostRequest(data) {
    fetch('http://localhost:3006/frontend/addLicense', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('License registration successful!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred during license registration.');
    });
}

