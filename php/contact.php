<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form sent using PHP</title>
</head>
<body style="background-color: #f8f8f8">>

    <?php    
        $name = $_POST['name'];
        $lastName = $_POST['lastName'];
        $country = $_POST['country'];
        $mailFrom = $_POST['email'];
        $comments = $_POST['comments'];
        $emailSubject = "You have an email from Web Design Capstone";
        $mailTo = 'juancgalue@icloud.com';
        $headers = "From: ".$mailFrom;
        $txt = "You have received an e-mail from ".$name." ".$lastName.".\n\n".$comments;

        mail($mailTo, $emailSubject, $txt, $headers);
        echo "Thank you very much for your time in writting your comments about my first webpage."
    ?>
    <h1><a href="../index.html">Back to the homepage</a></h1>
</body>
</html>
