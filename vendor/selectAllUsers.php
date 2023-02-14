<?php
    include_once  'Database/connect.php';

    if($conn){
        $sql = "SELECT users.LastName, users.Name, users.SecondName, departments.DepartmentName, users.WorkPosition, users.Email, users.MobilePhone, users.Phone, users.Login, users.Password  
                FROM users 
                INNER JOIN departments 
                ON users.UserId=departments.DepartentId";
        
        $rez = $conn->query($sql);
        
        $index = 1;
        $response = [];
        while($row = $rez->fetch()){
            $response["row" . $index] = $row;
            $index++;
        }

        echo json_encode($response, JSON_UNESCAPED_UNICODE);  
    }