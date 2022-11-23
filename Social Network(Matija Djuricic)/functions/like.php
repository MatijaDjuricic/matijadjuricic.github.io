<?php
include "init.php";
$post_id = clean($_GET['post_id']);
$query = "SELECT likes FROM posts WHERE id=$post_id";
$result = query($query);
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $likes = $row['likes'];
    $likes += 1;
}
$sql = "UPDATE posts SET likes=$likes WHERE id=$post_id";
confirm(query($sql));
echo $likes;