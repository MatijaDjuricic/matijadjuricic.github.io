<?php include "inc/header.php"; 
login_check_pages()
?>
<div>
<?php 
    validate_user_registration();
    display_message();
?>
</div>
<form method="POST">
    <input type="text" name="first_name" placeholder="First Name" required>
    <input type="text" name="last_name" placeholder="Last Name" required>
    <input type="text" name="username" placeholder="Username" required>
    <input type="email" name="email" placeholder="Email" required>
    <input type="password" name="password" placeholder="Password" required>
    <input type="password" name="confirm_password" placeholder="Confirm Password" required>
    <input type="submit" name="register-submit" placeholder="Register Now">
</form>
<?php include "inc/footer.php"; ?>