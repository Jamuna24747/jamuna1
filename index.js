//const hamburger =document.getElementById ('hamburger');
//const navlinks = document.getDocumentById('navlinks');
//hamburger.addEventListener('click',() => {
   // navlinks.classlist.toggle('active');
//}); 
const text =" Hi,I'm Mrss.JR ";
const typedText = document.getElementById('typed-text');
let index = 0;

function type(){
    if(index < text.length){
        typedText.textContent +=text.charAt(index);
        index++;
        setTimeout(type,150);
    }
}
type();

//const cursor = document.querySelector('.cursor');

//document.addEventListener('mousemove', (e) => {
   // cursor.style.left = e.clientX + 'px';
  //  cursor.style.top = e.clientY+ 'px';
//});

const services = [
    {
        image: "./images/view1.jpg",
        title: " Morning Animated Navbar",
        description: "\"Good morning Everyone.The morning sunrise paints the sky with hues of gold and pink.\"",
    },
    {
        image: "./images/view2.jpg",
        title: " Animated Navbar",
        description:"\"Hello! It's a peaceful moment that brings hope and a fresh start to the day.\"",
    },
  {
        image: "./images/view3.jpg",
        title: "Landing Page",
        description: "\"A clean and simple landing page using HTML,CSS and basic JS.\"",
    },  
]
const container1 = document.getElementById("service-container");

services.forEach(service =>{
    const card1 = document.createElement("div");
    card1.className = "service-card";
    card1.innerHTML=`

    <img src="${service.image}" alt="${service.title}"\>
    <h4>${service.title}</h4>
    <p>${service.description}</p>
    `;
    container1.appendChild(card1);
});

//project
const projects = [
    {
        image: "images/fig1.webp",
        title: "Animated Navbar",
        description: "\"An animated bar is a graphical element that visually represents changing data or progress over time through motion.\"",
    },
    {
        image:"images/fig3.webp",
        title: "HTML",
        description:"\"HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the web. \"",
    },
  {
        image:"images/fig2.webp",
        title: " CSS",
        description: "\"CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML.\"",
    },  
]
const container = document.getElementById("project-container");

projects.forEach(project =>{
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML=`

    <img src="${project.image}" alt="${project.title}"\>
    <h4>${project.title}</h4>
    <p>${project.description}</p>
    `;
    container.appendChild(card);
});

//openion
const openions=[
    {
        image:"images/t6.jpg",
        title: "Elon Musk",
        description: "\"Great work very creative and professional.\"",
    },
    {
        image:"images/t7.jpg",
        title: "Mark Zuckerberg",
        description:"\"Love the design and animations . Highly recommended.\"",
    },
  {
        image:"images/t9.jpg",
        title: "Steve Jobs",
        description: "\"Clean the code and responsivelayout. Impressive\"",
    },  
]
const container2 = document.getElementById("openion-container");

openions.forEach(openion =>{
    const card2 = document.createElement("div");
    card2.className = "openion-card";
    card2.innerHTML=`

    <img src="${openion.image}" alt="${openion.title}"\>
    <h4>${openion.title}</h4>
    <p>${openion.description}</p>
    `;
    container2.appendChild(card2);
});
