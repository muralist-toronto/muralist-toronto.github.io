$(function() {
    "use strict";

    $(".signupBtn").click(function() {
        let daEmail = $(".signupInput").val();
        if(validateEmail(daEmail)) {
            $.get('https://us-central1-art-auction-2ef27.cloudfunctions.net/newEmailSub?email=' + daEmail,function(data, status) {
                console.log(data)
                $(".signupInput").val('');
                alert("Great! You'll be the first to know when we launch!")
            });
        } else {
            alert("Not a valid email.");
        }
    })

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

});
