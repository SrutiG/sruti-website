$(document).ready(function () {
    $("button").on("click", function() {
        var par = "<p>Hello!</p>";
        $(this).closest("ul").append(par);
    });
});