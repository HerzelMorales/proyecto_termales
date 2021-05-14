<?php include "helpers/header.php";

    require "dbconn.php";
    date_default_timezone_set("America/Puerto_Rico");

    $date = new DateTime();
?>

<br>

<div id="checkmarkDiv" name="checkmarkDiv" class="center">
    <svg xmlns="http://www.w3.org/2000/svg" id="confirmCheckmark" width="160" height="160" fill="green" class="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
    </svg>
</div>

<div id="submitConfirmText" class="center">
    <h1>¡Sometido Exitosamente!</h1>
</div>

<br>

<?php include "helpers/footer.php"; ?>