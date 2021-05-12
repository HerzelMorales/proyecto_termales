<?php
define('DB_SERVER', 'mysqlcluster22.registeredsite.com');
define('DB_USERNAME', 'chrisartg');
define('DB_PASSWORD', 'dbAkiTatsuya#2');
define('DB_NAME', 'db_empportal');

/*Local phpmyadmin login info
   host(db server) = 'localhost'
   user = 'root'
   password = 'SQLpw#3581'
   database = 'digitlibfac'*/

/*My database credentials
host(db server) = 'mysqlcluster22.registeredsite.com'
user = 'chrisartg'
password = 'dbAkiTatsuya#2'
database = 'db_empportal'*/

/* Attempt to connect to MySQL database */
$conn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Check connection
if($conn === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>
