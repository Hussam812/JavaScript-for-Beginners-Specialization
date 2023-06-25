(function(){
    'use strict';
    function hideSumbmenus(){
        const submenu = document.querySelectorAll("ul li ul");
        for (let i = 0; i < submenu.length;i++){
            m.className = "hide-menu";
        }
    }
    hideSumbmenus();
       
    const menulinks = document.querySelectorAll(".menulink");
    for (let i=0; i < menulinks.length; i++){
        menulinks[i].addEventListener("click", function(evt){
            evt.preventDefault();
            const thismenu = this.parentNode.querySelector("ul");
            //thismenu.className = "show-menu";
            if (thismenu.classList.contains("hide-menu")){
                hideSumbmenus();

                thismenu.className = "show-menu";

            }else{
                thismenu.className = "hide-menu";
            }

        });

    }
}());