<?php
    try {
        $conn = new PDO("mysql:host=localhost;dbname=organization", "root", "");
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch (PDOException $e) {
        echo json_encode(['database_error' => "Connection failed: " . $e->getMessage()]);
    }
