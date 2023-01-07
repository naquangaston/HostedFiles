<?php
if (isset($_POST['name'])) {
    $name=$_POST["name"];
    $email=$_POST["email"];
    $password=$_POST["password"];

    $val = mysql_query('select 1 from `MyGuests` LIMIT 1');
        if($val !== FALSE)
        {
            //DO SOMETHING! IT EXISTS!
        }
        else{
            $sql = "CREATE TABLE MyGuests (
                id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(30) NOT NULL,
                email VARCHAR(30) NOT NULL,
                password VARCHAR(200),
                icon VARCHAT(9999),
                reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
                )";
                if ($conn->query($sql) === TRUE) {
                    echo "Table MyGuests created successfully";
                  } else {
                    echo "Error creating table: " . $conn->error;
                  }
        }
        $sql = "INSERT INTO MyGuests (name, email, password)
        VALUES ('.$name.', '.$email.', '.$password.')";
        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        } 
        header("Loction:index.html?logins=1");  
}
?>