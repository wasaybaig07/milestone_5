let form = document.getElementById('resume-form') as HTMLFormElement;
let resumeeDisplayEvent = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

form.addEventListener('submit',(event:Event) =>{
    event.preventDefault();
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name</b><span contenteditable="true">${name}</span></p>
    <p><b>Name</b><span contenteditable="true">${email}</span></p>
    <p><b>Name</b><span contenteditable="true">${phone}</span></p>
    
    <h3>Education</h3>
    <p contenteditable="true">${education}</p>
    
    <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>
    
    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
    `;

    const resumeData ={
        name,email,phone,education,experience,skills
    };
    localStorage.setItem(username,JSON.stringify(resumeData))

    let generateResume;
    if(generateResume){
        generateResume.innerHTML = resumeHTML;
    } else{
        console.error("Your form data is missing!")
    }
})

