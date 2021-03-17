<?php
if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $visitor_phone = $_POST['phone'];
    $message = $_POST['message'];

    $email_from = $visitor_email;
    $email_subject = "Nouveau message provenant du site Notitia!";
    $email_body = "Nom de l'utilisateur: $name.\n".
                    "Email de l'utilisateur: $visitor_email.\n".
                        "Numéro de téléphone de l'utilisateur: $visitor_phone.\n".
                            "Message de l'utilisateur: $message.\n";
    $to = "naoufel.maazouzi@live.fr, wambersie.ines@hotmail.com, tiffainewillemin@gmail.com, anadarochafreire@gmail.com" ;
    $headers = "From: $email_from \r\n";
    $headers .= "Repondre à: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);
    header("Location: https://notitia.000webhostapp.com/", sleep(3));
}

?>