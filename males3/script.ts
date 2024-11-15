//get refrences to form area

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

//handle form submistion
form.addEventListener('submit' ,(event: Event)=>{
    event.preventDefault(); // prevent page reload

    // collect input value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experince') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // generate the resume daynmicaly
    const resumehtml = `
    <h2><b>Resume</b></h2>
    <h3>Personal information</h3>
    <p><b>name:</b>${name}</p>
    <p><b>name:</b>${email}</p>
    <p><b>name:</b>${phone}</P>
    
    <h3>education</h3>
    <p>${education}</p>

    <h3>experince</h3>
    <p>${experience}</p>

    <h3>skill</h3>
    <p>${skills}</p>
    `;

    // Display
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumehtml;
    }else{
        console.error('the resume element is no show')
    }
    
    
});