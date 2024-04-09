// function loginSubmit() {
//     // Redirect to Hospital Registraion page
//     window.location.href = "./pages/hospital_registration.html";
// }
// function signupSubmit() {
//     // Redirect to Hospital Registraion page
//     window.location.href = "./pages/hospital_registration.html";
// }

// const { event } = require("jquery");

document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent form submission to avoid page reload
    event.preventDefault();

    // Get the form fields using FormData
    var formData = new FormData(this);
    
    // Access the form fields using dot notation
    var email = formData.get('email');
    var password = formData.get('password');

    // debug
    console.log('Email:', email);
    console.log('Password:', password);

    if(email != "" && password != ""){
        window.location.href = "./pages/hospital_registration.html";
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    // Prevent form submission to avoid page reload
    event.preventDefault();

    // Get the form fields using FormData
    var formData = new FormData(this);
    
    // Access the form fields using dot notation
    var name = formData.get('name');
    var email = formData.get('email');
    var password = formData.get('password');

    // Now you can use these values for further processing, such as sending them to a server for authentication
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    if(name != "" && email != "" && password != ""){
        window.location.href = "./pages/hospital_registration.html";
    }
    // Here you can add your signup logic, such as making an AJAX request to a server to create a new user
    // Example:
    /*
    fetch('signup.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Handle response from the server
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    */
});

