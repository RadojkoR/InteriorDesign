

// APP OBJECT
const app = {};

// CONSTRUCTS INIT METHOD
app.init = () => {

};

// HAMBURGER MENU 

// MAKE ICON HAM. MENU
app.hamburgerEl = document.querySelector(".hamburgerMenu");
app.hamburgerEl.innerHTML = `<i class="fa-solid fa-bars"></i>`;
console.log(app.hamburgerEl);

// CREATE AN EVENT LISTENER FOR WHEN USER CLICK ON THE ICON
app.iconEl = document.querySelector(".hamburgerMenu i");

app.hamburgerEl.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target.tagName);
    if(event.target.tagName === 'I') {
        app.updateIcon(event.target); 

    }
    
});

// WHEN USER CLICK ON MENU
app.updateIcon = (icon) => {
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-x");
    icon.parentElement.previousElementSibling.classList.toggle("showLogo");
    icon.parentElement.nextElementSibling.classList.toggle("showFlexNav");
}

// IMPORT LOGO in ham menu
// app.hamMenuLogo = document.querySelector(".flexNav");
// app.hamMenuLogo.innerHTML = `<li><a href="./index.html">Interior D</a></li>`














app.init();