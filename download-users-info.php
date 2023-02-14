<?php
    require 'vendor/Database/connect.php';
    require 'vendor/Libs/vendor/autoload.php';

    if($conn){

        $sql = "SELECT users.LastName, users.Name, users.SecondName, departments.DepartmentName, users.WorkPosition, users.Email, users.MobilePhone, users.Phone, users.Login, users.Password  
                FROM users 
                INNER JOIN departments 
                ON users.UserId=departments.DepartentId";
        
        $rez = $conn->query($sql);


        $phpWord = new \PhpOffice\PhpWord\PhpWord();
        $section = $phpWord->addSection(array('orientation' => 'landscape'));
        $header = ['size' => 16, 'bold' => true];

        $cols = 10;
        $section->addText('Сотрудники', $header);

        $table = $section->addTable([
            'borderSize' => 6,
            'borderColor' => '000000',
            'afterSpacing' => 0,
            'Spacing'=> 0,
            'cellMargin'=> 0
        ]);

        $table->addRow();
        $table->addCell(1750)->addText("Фамилия");
        $table->addCell(1750)->addText("Имя");
        $table->addCell(1750)->addText("Отчество");
        $table->addCell(1750)->addText("Отдел");
        $table->addCell(1750)->addText("Должность");
        $table->addCell(1750)->addText("Электронная почта");
        $table->addCell(1750)->addText("Телефон");
        $table->addCell(1750)->addText("Мобильный телефон");
        $table->addCell(1750)->addText("Логин");
        $table->addCell(1750)->addText("Пароль");

        while($row = $rez->fetch()) {
            $table->addRow();
            for ($c = 0; $c < $cols; ++$c) {
                $table->addCell(1750)->addText($row[$c]);
            }
        }

        header("Content-Description: File Transfer");
        header('Content-Disposition: attachment; filename="Сотрудники.docx"');
        header('Content-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document');
        header('Content-Transfer-Encoding: binary');
        header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
        header('Expires: 0');

        $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'Word2007');
        $objWriter->save("php://output");
    }