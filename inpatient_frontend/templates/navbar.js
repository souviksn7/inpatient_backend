const navbarTemplate = `
<nav class="navbar navbar-expand-lg navColor">
    <a class="navbar-brand" style="font-size: 35px; padding-left: 10px; padding-right: 25px">
       <b>Tile Health</b>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active" id="hospitalRegistration">
          <a class="nav-link" style="padding-right: 30px; font-size: 18px" href="/inpatient_frontend/pages/hospital_registration.html"><b>Hospital Registration <span class="sr-only">(current)</span></b></a>
        </li>
        <li class="nav-item" id="licenseRegistration">
          <a class="nav-link" style="padding-right: 30px; font-size: 18px" href="/inpatient_frontend/pages/license_registration.html"><b>License Registration</b></a>
        </li>
        <li class="nav-item" id="checkStatistics">
          <a class="nav-link" style="padding-right: 30px; font-size: 18px" href="/inpatient_frontend/pages/check_statistics.html"><b>Check Statistics</b></a>
        </li>
      </ul>
    </div>
  <hr>
</nav>
`
;
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('navbar').innerHTML = navbarTemplate;
});


// Get the current URL path
var path = window.location.pathname;

// Extract the page filename from the path
var page = path.split("/").pop();

// Remove '.html' extension from the filename
page = page.replace('.html', '');

// Highlight the corresponding menu item based on the current page
if (page === 'hospital_registration') {
    document.getElementById('hospitalRegistration').classList.add('active');
} else if (page === 'license_registration') {
    document.getElementById('licenseRegistration').classList.add('active');
} else if (page === 'check_statistics') {
    document.getElementById('checkStatistics').classList.add('active');
}