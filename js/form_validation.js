let forms = document.querySelectorAll(".needs-validation");

Array.prototype.slice.call(forms).forEach(function(form) {
    form.addEventListener("submit", function(event) {
        if (!form.checkValidity() ) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add("was-validated");
    }, false);
});

function topFunction() {
    var body = $("html, body");
    body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
    console.log("Animation has finished");
    });
}