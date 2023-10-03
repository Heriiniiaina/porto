const navbar = document.querySelector(".navbar")
const hamburger = document.querySelector(".hamburger")
const navlink = document.querySelectorAll(".navlink")
hamburger.addEventListener("click",()=>{
    navbar.classList.toggle("active")
    hamburger.classList.toggle("active")
})
navlink.forEach((nav)=>{
    nav.addEventListener("click",()=>{
        navbar.classList.remove("active")
        hamburger.classList.remove("active")
    })
})
const jeSuis= "Je suis"
const nom = "Heriniaina"
const span1 = document.querySelector(".IAm")
function affiche(){
    for(let i =0;i<jeSuis.length;i++){
        span1.innerHTML += jeSuis[i]
    }
   
}


