$("#enviar").click(function () {
    const name = $("#formName").val();
    const lastName = $("#lastName").val();
    const country = $("#country").val();
    const email = $("#emailAddress").val();
    const comments = $("#textArea").val();

    if (areFieldsInvalid({ name: name, lastName: lastName, country: country, email: email, comments: comments })) {
        Swal.fire({
            title: "Fields empty/invalid!",
            text: "Please, check all the fields!",
            icon: "warning",
            button: "Retry",
        });
    } else {
        Swal.fire({
            title: "Thank you!",
            text: "In fact, the form was not sent because we need a PHP code or something to actually work",
            icon: "success",
            timer: 6000,
        });

        $('#followForm').on('submit', function (event, force) {
            if (!force) {
                event.preventDefault();
                setTimeout(function () {
                    $('#followForm').trigger('submit', true);
                }, 6500);
            }
        });
    }
});

function areFieldsInvalid(fields) {
    return fields.name == "" || fields.lastName == "" || fields.country == "" || fields.email == "" || fields.comments == ""
}

