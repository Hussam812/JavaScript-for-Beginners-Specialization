if ( isset($_POST['comments']))
{
    $name = $_POST["name"];
    $email = $_POST["email"];
    $url = $_POST["url"];
    $comments = $_POST["comments"];
    $submit = $_POST["send"];

    echo "<p>Name: $name</p>";
    echo "<p>email: $email</p>";
    echo "<p>URL: $url</p>";
    echo "<p>comments: $comments</p>";
    echo "<p>$submit</p>";


}