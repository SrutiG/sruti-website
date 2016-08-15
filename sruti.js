$(document).ready(function() {
    $("button").on("click", function() {
        var par = "<p>Hello!</p>";
        $(".Main").append(par);
    })
    
})



if (confirm("I would like to leave my email address")) {
    var gotEmail = false;
    while (!gotEmail) {
        var email = prompt("Please enter your email address");
        if (email == null) {
            alert("Sorry, I didn't get that!");
            if (confirm("I would still like to leave my email address") == false) {
                gotEmail = true;
            }
        } else {
            gotEmail = true;
        }

    }
    

}