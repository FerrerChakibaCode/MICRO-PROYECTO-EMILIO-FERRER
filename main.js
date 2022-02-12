const carousel = document.querySelector(".carousel-imgs")
const images = document.querySelectorAll(".carousel-imgs img");

const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

let counter = 0;
const size = 1777;

nextButton.addEventListener('click', function(event){
    counter++;
    if (counter > images.length - 1) {
        counter = 0
    }
    carousel.style.transform = 'translateX(' + counter *(-size) + 'px)';
})

prevButton.addEventListener('click', function(event){
    counter--;
    if (counter < 0) {
        counter = images.length - 1;
        carousel.style.transform = 'translateX(' + counter *(-size) + 'px)';
    } else {
        carousel.style.transform = 'translateX(' + counter * -size + 'px)'; 
    }

})
 
// Skills

const skillsArray = [
    {name: "HTML", skillsPercentage: "90%", projectsMade: 5},
    {name: "CSS", skillsPercentage: "30%", projectsMade: 5},
    {name: "JAVASCRIPT", skillsPercentage: "25%", projectsMade: 2},
    {name: "PYTHON", skillsPercentage: "60%", projectsMade: 1},
    {name: "JAVA", skillsPercentage: "40%", projectsMade: 3}
];

const htmlButton = document.getElementById("html-button");
htmlButton.addEventListener('click', ()=>{
    document.getElementById('skill-expanded').innerHTML = `
    <div id="skill-expanded">
        <h3>SKILL: ${skillsArray[0].name}</h3>
        <h4>Percentage: ${skillsArray[0].skillsPercentage}</h4>
        <h4>Projects made: ${skillsArray[0].projectsMade}</h4>
    </div>`;

})

const cssButton = document.getElementById("css-button");
cssButton.addEventListener('click', ()=>{
    document.getElementById('skill-expanded').innerHTML = `
    <div id="skill-expanded">
        <h3>SKILL: ${skillsArray[1].name}</h3>
        <h4>Percentage: ${skillsArray[1].skillsPercentage}</h4>
        <h4>Projects made: ${skillsArray[1].projectsMade}</h4>
    </div>`;

})

const javascriptButton = document.getElementById("javascript-button");
javascriptButton.addEventListener('click', ()=>{
    document.getElementById('skill-expanded').innerHTML = `
    <div id="skill-expanded">
        <h3>SKILL: ${skillsArray[2].name}</h3>
        <h4>Percentage: ${skillsArray[2].skillsPercentage}</h4>
        <h4>Projects made: ${skillsArray[2].projectsMade}</h4>
    </div>`;

})

const pythonButton = document.getElementById("python-button");
pythonButton.addEventListener('click', ()=>{
    document.getElementById('skill-expanded').innerHTML = `
    <div id="skill-expanded">
        <h3>SKILL: ${skillsArray[3].name}</h3>
        <h4>Percentage: ${skillsArray[3].skillsPercentage}</h4>
        <h4>Projects made: ${skillsArray[3].projectsMade}</h4>
    </div>`;

})

const javaButton = document.getElementById("java-button");
javaButton.addEventListener('click', ()=>{
    document.getElementById('skill-expanded').innerHTML = `
    <div id="skill-expanded">
        <h3>SKILL: ${skillsArray[4].name}</h3>
        <h4>Percentage: ${skillsArray[4].skillsPercentage}</h4>
        <h4>Projects made: ${skillsArray[4].projectsMade}</h4>
    </div>`;

})

// Contact me form

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener('click', ()=>{
    const viewerName = document.getElementById("form-name").value;
    const viewerEmail = document.getElementById("form-email").value;
    const viewerMessage = document.getElementById("form-message").value;
    if (validateData(viewerName, viewerEmail, viewerMessage)) {
        alert('Su solicitud ha sido enviada')
        console.log(viewerName + '\n' + viewerEmail + '\n' + viewerMessage);
} else {
    alert('Por favor, ingrese bien sus datos');
}
    
});

const viewerName = document.getElementById("form-name").value;
const viewerEmail = document.getElementById("form-email").value;
const viewerMessage = document.getElementById("form-message").value;

function validateData(name, email, message) {
    if (!name || !email || !message) {
        return false
    } else if (!(/[a-zA-Z]/).test(name)) {
        return false
    } else if (!atInEmail(email) || !dotInEmail(email)) {
        return false
    }
    else {
        return true
    }
    
}

function dotInEmail(email) {
    for (i = 0; i<email.length; i++){
        if (email[i] === "."){
            return true
        }
    }
}

function atInEmail(email) {
    for (i = 0; i < email.length; i++){
        if (email[i] === "@"){
            return true
        }
    }
}