
// Selecting the form element
const form = document.querySelector('.custom-form');

let hospitalDetails = {
    hospitalName: "",
    clientIdProd: "",
    clientIdDev: "",
    hospitalDescription: ""
}

// Adding event listener for form submit
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const hospitalNameValue = document.getElementById('hospitalName').value;
    const clientIdProdValue = document.getElementById('clientIdProd').value;
    const clientIdDevValue = document.getElementById('clientIdDev').value;
    const hospitalDescriptionValue = document.getElementById('hospitalDescription').value;

    const hospitalDetails = {
        clientid_dev: clientIdDevValue,
        clientid_prod: clientIdProdValue,
        hospital_name: hospitalNameValue,
        description: hospitalDescriptionValue
    };

    console.log(hospitalDetails);

    // Making the POST request
    fetch('http://localhost:3006/frontend/addHospital', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(hospitalDetails)
    })
    .then(response => {
        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Hospital registration was successful.',
                showConfirmButton: false, // Remove the confirm button
                timer: 2000 // Automatically close after 1.5 seconds
              });
            form.reset();
            console.log('Hospital added successfully.');
            // You can perform further actions here after the request is successful
        } else {
            console.error('Error adding hospital:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error adding hospital:', error);
    });
});