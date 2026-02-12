var hamburger = document.getElementById("hamburger")
//console.log(hamburger)

hamburger.addEventListener("click", function(){
    var hamburgerUl = document.getElementById("hamburger-ul")
    var menulines = document.querySelectorAll("menu-lines")

   hamburgerUl.classList.toggle("hidden") 
   hamburger.classList.toggle("bg-gray-200") 

})