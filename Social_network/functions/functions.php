<?php
function set_message($message) {
    if (!empty($message)) {
        $_SESSION['message'] = $message;
    } else {
        $message = "";
    }
}
function display_message() {
    if (isset($_SESSION['message'])) {
        echo $_SESSION['message'];
        unset($_SESSION['message']);
    }
}
function clean($string) {
    return htmlentities($string);
}
function redirect($location) {
    header("location: {$location}");
    exit();
}
function email_exists($email) {
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $query = "SELECT id FROM users WHERE email = '$email'";
    $result = query($query);
    if ($result->num_rows > 0) {
        return true;
    } else {
        return false;
    }
}
function user_exists($user) {
    $user = filter_var($user, FILTER_SANITIZE_STRING);
    $query = "SELECT id FROM users WHERE username = '$user'";
    $result = query($query);
    if ($result->num_rows > 0) {
        return true;
    } else {
        return false;
    }
}
function validate_user_registration() {
    $errors = [];
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $first_name = clean($_POST['first_name']);
        $last_name = clean($_POST['last_name']);
        $username = clean($_POST['username']);
        $email = clean($_POST['email']);
        $password = clean($_POST['password']);
        $confirm_password = clean($_POST['confirm_password']); 
        if (strlen($first_name) < 3) {
            $errors[] = "Your First Name cannot be less then 3 characters!";
        }
        if (strlen($last_name) < 3) {
            $errors[] = "Your Last Name cannot be less then 3 characters!";
        }
        if (strlen($username) < 3) {
            $errors[] = "Your Username cannot be less then 3 characters!";
        }
        if (strlen($first_name) > 20) {
            $errors[] = "Your Username cannot be greater then 3 characters!";
        }
        if (email_exists($email)) {
            $errors[] = "Sorry that Email is already taken";
        }
        if (user_exists($username)) {
            $errors[] = "Sorry that Username is already taken";
        }
        if (strlen($password) < 8) {
            $errors[] = "Your Password cannot be less then 8 characters!";
        }
        if ($password != $confirm_password) {
            $errors[] = "The Password was not confirmed correctly";
        }
        if (!empty($errors)) {
            foreach ($errors as $error) {
                echo "<div class='alert'>" . $error . "</div>";
            }
        }
        else {
            $first_name = filter_var($first_name, FILTER_SANITIZE_STRING);
            $last_name = filter_var($last_name, FILTER_SANITIZE_STRING);
            $username = filter_var($username, FILTER_SANITIZE_STRING);
            $email = filter_var($email, FILTER_SANITIZE_EMAIL);
            $password = filter_var($password, FILTER_SANITIZE_STRING);
            create_user($first_name, $last_name, $username, $email, $password);
        }
    }
}
function create_user($first_name, $last_name, $username, $email, $password) {
    $first_name = escape($first_name);
    $last_name = escape($last_name);
    $username = escape($username);
    $email = escape($email);
    $password = escape($password);
    $password = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO users(first_name, last_name, username, profile_image, email, password)";
    $sql .= "VALUES('$first_name', '$last_name', '$username', 'uploads/default.jpg', '$email', '$password')";
    confirm(query($sql));
    set_message("You have been successfully registered! Please Log in");
    redirect("login.php");
}
function validate_user_login() {
    $errors = [];
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $email = clean($_POST['email']);
        $password = clean($_POST['password']);
        if (empty($email)) {
            $errors[] = "Email field cannot be empty";
        }
        if (empty($password)) {
            $errors[] = "Password field cannot be empty";
        }
        if (empty($errors)) {
            if (user_login($email, $password)) {
                redirect('index.php');
            } else {
                $errors[] = "Your email or password is incorrect. please try again";
            }
        }
        if (!empty($errors)) {
            foreach ($errors as $error) {
                echo '<div class="alert">' . $error . '</div>';
            }
        }
    }
}
function user_login($email, $password) {
    $password = filter_var($password, FILTER_SANITIZE_STRING);
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $query = "SELECT * FROM users WHERE email='$email'";
    $result = query($query);
    if ($result->num_rows == 1) {
        $data = $result->fetch_assoc();
        if (password_verify($password, $data['password'])) {
            $_SESSION['email'] = $email;
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
function get_user($id = NULL) {
    if ($id != NULL) {
    $query = "SELECT * FROM users WHERE id=" .$id;
    $result = query($query);
        if ($result->num_rows > 0) {
            return $result->fetch_assoc();
        } else {
            return "User not found";
        }
    } else {
        $query = "SELECT * FROM users WHERE email='" . $_SESSION['email']. "'";
        $result = query($query);
        if ($result->num_rows > 0) {
            return $result->fetch_assoc();
        } else {
            return "User not found";
        }
    }
}
function user_profile_image_upload() {
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $target_dir = "uploads/";
        $user = get_user();
        $user_id = $user['id'];
        $target_file = $target_dir . $user_id . "." . pathinfo(basename($_FILES['profile_image_file']['name']), PATHINFO_EXTENSION);
        $uploadOk = 1;
        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
        $error = "";
        $check = getimagesize($_FILES['profile_image_file']['tmp_name']);
        if ($check != false) {
            $uploadOk = 1;
        } else {
            $error = "File is not an image";
            $uploadOk = 0;
        }
        if ($_FILES['profile_image_file']['size'] > 5000000) {
            $error = "Sorry, your file is too large";
            $uploadOk = 0;
        }
        if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif") {
            $error = "Sorry, only JPG, JPEG, PNG and GIF files are allowed";
            $uploadOk = 0;
        }
        if ($uploadOk == 0) {
            set_message("Error uploading file", $error);
        } else {
            $sql = "UPDATE users SET profile_image='$target_file' WHERE id=$user_id";
            confirm(query($sql));
            set_message("Profile image uploaded");
            if (!move_uploaded_file($_FILES["profile_image_file"]["tmp_name"], $target_file)) {
                set_message('Erroer uploading file: ', $error);
            }
        }
        redirect("profile.php");
    }
}
function user_restrictions() {
    if (!isset($_SESSION['email'])) {
        redirect("login.php");
    }
}
function login_check_pages() {
    if (isset($_SESSION['email'])) {
        redirect("index.php");
    }
}
function create_posts() {
    $errors = [];
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $post_content = clean($_POST['post_content']);
        if (strlen($post_content) > 200) {
            $errors[] = "Your post content is too long!";
        }
        if (!empty($errors)) {
            foreach ($errors as $error) {
                echo '<div class="alert">' . $error . '</div>';
            }
        } else {
            $post_content = filter_var($post_content, FILTER_SANITIZE_STRING);
            $post_content = escape($post_content);
            $user = get_user();
            $user_id = $user['id'];
            $sql = "INSERT INTO posts(user_id, content, likes)";
            $sql .= "VALUES($user_id, '$post_content', 0)";
            confirm(query($sql));
            set_message('You added a post!');
            redirect("index.php");
        }
    }
}
function fetch_all_posts() {
    $query = "SELECT * FROM posts ORDER BY created_time DESC";
    $result = query($query);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $user = get_user($row['user_id']);
            echo "<div class='post'>
                    <p><img class='profile_img_icon' src='" . $user['profile_image'] . "'><i><b>" . $user['username'] . "</b></i></p>
                    <p>" . $row['content'] . "</p>
                    <p><i>Date: <b>" . $row['created_time'] . "</b><i></p>
                    <div class='likes'>Likes: <b id='likes_" . $row['id'] . "'>" . $row['likes'] . "</b>
                        <button data-post_id='" . $row['id'] . "' onclick='like_post(this)'>LIKE</button>
                    </div>
            </div>";
        }
    }
}