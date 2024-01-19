const ToggleIcon = (icon, content)=>{
   if (icon.src.includes("/assets/images/icon-plus.svg")){
    icon.src = "/assets/images/icon-minus.svg";
    content.style.display = "block";
   }
   else{
    icon.src = "/assets/images/icon-plus.svg";
    content.style.display = "none";
   }
}
