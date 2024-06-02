 <?php

    if(!isset($_SESSION)) {
        session_start();
        header("LOCATION: index.php");
    }

    if(isset($_SESSION["id"])) {
        die("Voce não está logado. <p><a href=\"log-in.php\">Entrar</a></p>");
    }

?> 