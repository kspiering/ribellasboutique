<?php

$hasError = false;

echo "<pre>POST";
print_r($_POST);
echo "</pre>";

// if() {
//     echo "Vorname existiert";
// }
?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/contact.css">
    <title>Login</title>
</head>
<body>

    <section class="titles">
        <h1>Login to your account</h1>
    </section>
    <section class="registrierung">
        <form action="../php/anmelden.php" method="GET">
            <label for="email-adress">Email Address*</label>
            <input type="email" id="email-address"  name="email" placeholder="E-mail">
            <br>
            <label for="password">Password*</label>
            <input type="password" id="password" name="password" placeholder="Password">
            <div class="buttons">
                <button id="submit">Login</button>
            </div>
            <p>Don't have an account? <a href="register.html">Register</a></p> <a href="#">Forgot Password</a>
        </form>
    </section>
</body>
</html>