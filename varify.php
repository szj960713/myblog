<?php
$servername = "localhost";
$username = "szj";
$password = "SZj1221..";
$dbname = "szj";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn -> connect_error){
    die("failed to connect");
}

$act = $_GET["account"];
$psd = $_GET["password"];

$result = mysqli_query($conn, "SELECT password FROM users WHERE account='$act'");

if (mysqli_fetch_assoc($result)["password"] == $psd){
    header("location:mainPage.html");
}

$conn->close();
?>