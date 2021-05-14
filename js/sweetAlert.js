$("#enviar").click(function () {
    const name = $("#formName").val();
    const lastName = $("#lastName").val();
    const country = $("#country").val();
    const email = $("#emailAddress").val();
    const comments = $("#textArea").val();

    if (areFieldsInvalid({ name: name, lastName: lastName, country: country, email: email, comments: comments })) {
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
});

function areFieldsInvalid(fields) {
    console.log("areFieldsInvalid: " + (fields.name == "" || fields.lastName == "" || fields.country == "" || fields.email == "" || fields.comments == ""))
    return fields.name == "" || fields.lastName == "" || fields.country == "" || fields.email == "" || fields.comments == ""
}
