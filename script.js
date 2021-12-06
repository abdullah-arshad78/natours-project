const navLinks = document.querySelectorAll(".navigation__link");
const popup = document.getElementById("popup");

navLinks.forEach(nav => {
    nav.addEventListener("click",()=>{
        document.getElementById("navi-toggle").checked = false;
    })
  
});

window.addEventListener("click",e => {
   if(e.target==popup){
       window.location.href = `${window.location.origin}/#section-tours`
     
   }else{
       false
   }
}) 




