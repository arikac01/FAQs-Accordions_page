const ToggleIcon = (icon, content)=>{
    //let icon = document.querySelector(".plusicon");
    //let content = document.querySelector('.section-content');

   if (icon.src.includes("/faq-accordion-main/assets/images/icon-plus.svg")){
    icon.src = "/faq-accordion-main/assets/images/icon-minus.svg";
    content.style.display = "block";
   }
   else{
    icon.src = "/faq-accordion-main/assets/images/icon-plus.svg";
    content.style.display = "none";
   }
}
