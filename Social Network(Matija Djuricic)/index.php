<?php
include "inc/header.php";
?>
<?php
if (isset($_SESSION['email'])) : ?>
    <?php create_posts(); ?>
    <br>
    <form method="POST">
        <textarea name="post_content" cols="50" rows="10" placeholder="Post content..."></textarea>
        <input type="submit" value="submit" name="submit">
    </form>
<div>
    <?php display_message(); ?>
</div>
<hr>
<div class="posts">
<?php fetch_all_posts(); ?>
</div>
<?php else : ?>
    <div class="homepage">
        <h1>Welocome to Matija Djuricic(Social Network)</h1>
        <p>Social network intended for DEVELOPERS</p>
        <h2>Click <a href="login.php">here</a> to Login!</h2>
        <img src="css/img/home_page.jpg">
    </div>
<?php endif; ?>
<?php
include "inc/footer.php";
?>