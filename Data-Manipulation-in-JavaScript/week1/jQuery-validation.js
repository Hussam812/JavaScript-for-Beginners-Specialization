$('#myform').submit( function(e){
    var name = $("name").val();
    var email = $("email").val();
    var url =$("url").val();
    var comment = $("comments").val();

    $("#myform span").html("").css("color", "red");
    counter = 0;
    
    const reName = /^[a-zA-Z]+(([\'\][a-zA-Z])?[a-zA-Z]*)*$/;
    const reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    if(!reName.test(name)){
        $("name-err").html("Please enter a valid name").css("color", "red");
        counter++;
    }
    if(!reEmail.test(email)){
        $("email-err").html("Please enter a valid email").css("color", "red");
        counter++;
    }
    if(counter > 0){e.preventDefault();}
})
