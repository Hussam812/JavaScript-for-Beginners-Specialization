(function(){

    function validateForm(){
        document.getElementById("name-err").innerHTML = "";
        document.getElementById("email-err").innerHTML = "";

        const reName = /^[a-zA-Z]+(([\'\][a-zA-Z])?[a-zA-Z]*)*$/;
        const reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

        let counter = 0;

        if (!reName.test(document.getElementById("name").value)){
            fixForm(document.getElementById("name"), "Please provide a Proper name");
            counter++;
        }

        if (!reEmail.test(document.getElementById("email").value)){
            fixForm(document.getElementById("email"), "Please  type add a valid email address");
            counter++;
        }

        /*
        if (!reURL.test(document.getElementById("url").value)){
            fixForm(document.getElementById("url"), "Please provide a Proper name");
            counter++;
        }
        */
        if (counter > 0){
            return false;
        }else{
            return true;
        }

    };

    function fixForm(field, message){
        const errorMessage = field.id + "-err";
        document.getElementById(errorMessage).innerHTML = message;
        document.getElementById(errorMessage).style.color = "red";
        document.getElementById(field.id).focus();

    };

    document.getElementById("myform").onsubmit = validateForm;

})();