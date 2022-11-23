<?php
$con = mysqli_connect('localhost', 'root', '', 'social network');
function escape($string) {
    global $con;
    return mysqli_real_escape_string($con, $string);
}
function query($query) {
    global $con;
    return mysqli_query($con, $query);
}
function confirm($result) {
    global $con;
    if(!$result) {
        die("QUERY FAILED ".mysqli_error($con));
    }
}