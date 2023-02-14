<?php
    include_once  'Database/connect.php';

    if($conn){
        $sql = "SELECT FileName, LoadDate  
                FROM files";
        
        $rez = $conn->query($sql);
        
        $index = 1;
        $response = [];
        while($row = $rez->fetch()){
            $response["row" . $index] = $row;
            $index++;
        }

        echo json_encode($response, JSON_UNESCAPED_UNICODE);  
    }