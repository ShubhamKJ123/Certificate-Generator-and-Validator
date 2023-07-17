<?php

// Database connection
$conn = new mysqli('localhost', 'root', '', 'data1');

if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
}

if (isset($_POST['userName'], $_POST['collegeName'], $_POST['startDate'], $_POST['endDate'], $_POST['certificateId'])) {
    $userName = $_POST['userName'];
    $collegeName = $_POST['collegeName'];
    $startDate = $_POST['startDate'];
    $endDate = $_POST['endDate'];
    $certificateId = $_POST['certificateId'];

    $query = "INSERT INTO certificates (userName, collegeName, startDate, endDate, certificateId) VALUES ('$userName', '$collegeName', '$startDate', '$endDate', '$certificateId')";

    if (mysqli_query($conn, $query)) {
            
        echo "Registration successful.";

    } else {
        echo "Error: " . mysqli_error($conn);
    }
} else {
    //echo "Error: Missing form data.";
}

$conn->close();


?>
