//get refrences to form area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//handle form submistion
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // collect input value
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experince').value;
    var skills = document.getElementById('skills').value;
    // generate the resume daynmicaly
    var resumehtml = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal information</h3>\n    <p><b>name:</b>".concat(name, "</p>\n    <p><b>name:</b>").concat(email, "</p>\n    <p><b>name:</b>").concat(phone, "</P>\n    \n    <h3>education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>experince</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>skill</h3>\n    <p>").concat(skills, "</p>\n    ");
    // Display
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumehtml;
    }
    else {
        console.error('the resume element is no show');
    }
});
