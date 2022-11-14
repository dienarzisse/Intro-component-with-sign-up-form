$(document).ready(function() {
    $(".claim").click(function(){
        let firstName = $("#first-name").val();
        let lastName = $("#last-name").val();
        let email = $("#email").val();
        let password =$("#password").val();
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(firstName.length === 0)
            $(".invalid-first-name").css("display","block");
        else
            $(".invalid-first-name").css("display","none");

        

        if(lastName.length === 0)
            $(".invalid-last-name").css("display","block");
        else
            $(".invalid-last-name").css("display","none");

        if(password.length === 0)
            $(".invalid-password").css("display","block");
        else
            $(".invalid-password").css("display","none");

        if(!email.match(regex))
            $(".invalid-email").css("display","block");
        else
            $(".invalid-email").css("display","none");
        

    });
});