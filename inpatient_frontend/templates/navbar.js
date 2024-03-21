const navbarTemplate = `
<nav class="navbar navbar-expand-lg navColor">
    <a class="navbar-brand" href="#" style="font-size: 35px; padding-left: 10px; padding-right: 25px"><b>Tile Health</b></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" style="padding-right: 30px; font-size: 18px" href="/inpatient_frontend/pages/hospital_registration.html"><b> Hospital Registraion <span class="sr-only">(current)</span> </b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style="padding-right: 30px; font-size: 18px" href="/inpatient_frontend/pages/license_registration.html"><b>License Registration</b></a>
        </li>
        <li class="nav-item">
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