$("#enviar").click(function() {
    let name = $("#formName").val();
    let lastName = $("#lastName").val();
    let country = $("#country").val();
    let email = $("#emailAddress").val();
    let comments = $("#textArea").val();

    if (name == "" || lastName == "" || country == "" || email == "" || comments == "") {
        swal({
            title: "Fields empty/invalid!",
            text: "Please, check all the fields!",
            icon: "warning",
            button: "Retry",
        });
    } else {
        swal({
            title: "Thank you!",
            text: "You just sent the form",
            icon: "success",
            button: "Great!",
        });
    }
} ); 
