

const templateLinks = document.querySelectorAll('.select-template-link');
const resumeEditor = document.getElementById('resume-editor');
const generatedResume = document.getElementById('generated-resume');
const resumeForm = document.getElementById('resume-form');
const downloadButton = document.getElementById('download-resume');
const previewResume = document.getElementById('preview-resume');


let userData = {
    name: '',
    email: '',
    phone: '',

    
};


templateLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        document.getElementById('template-selection').style.display = 'none';
        resumeEditor.style.display = 'block';
    });
});


resumeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    userData.name = document.getElementById('name').value;
    userData.email = document.getElementById('email').value;
    
    
   
    const selectedTemplate = document.querySelector('input[name="template"]:checked').value;
    const generatedResumeContent = generateResume(selectedTemplate, userData);
 
    previewResume.innerHTML = generatedResumeContent;
       
    generatedResume.style.display = 'block';
});

downloadButton.addEventListener('click', () => {
   
});




function generateResume(template, userData) {
    console.log('Template selected:', template);
    console.log('User data:', userData);
    
    let resumeContent = '';

          
}


