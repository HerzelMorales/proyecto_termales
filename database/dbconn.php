<?php
define('DB_SERVER', 'mysqlcluster23.registeredsite.com');
define('DB_USERNAME', 'ecosmenieves');
define('DB_PASSWORD', 'Tick3ts9965');
define('DB_NAME', 'db_csr');

 /*$host = "mysqlcluster23.registeredsite.com";
 $user = "ecosmenieves";
 $pass = "Tick3ts9965";
 $db = "db_csr";*/

$conn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Check connection
if($conn === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}


// if($conn != null){
//   echo "Connected";
// }
// else{
//   echo "Error";
// }
 ?>