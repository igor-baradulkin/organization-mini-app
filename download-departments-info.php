<?php
    require 'vendor/Database/connect.php';
    require 'vendor/Libs/vendor/autoload.php';

    if($conn){

        $sql = "SELECT departments.DepartmentName as ChildDep, parents.DepartmentName as ParentDep 
                FROM departments 
                JOIN departments parents ON departments.ParentDepartmentId = parents.DepartentId";
        
        $rez = $conn->query($sql);

        $phpWord = new \PhpOffice\PhpWord\PhpWord();
        $section = $phpWord->addSection();
        $header = ['size' => 16, 'bold' => true];

        $cols = 2;
        $section->addText('Отделы организации', $header);

        $table = $section->addTable([
            'borderSize' => 6,
            'borderColor' => '000000',
            'afterSpacing' => 0,
            'Spacing'=> 0,
            'cellMargin'=> 0
        ]);

        $table->addRow();
        $table->addCell(1750)->addText("Отдел");
        $table->addCell(1750)->addText("Управляющий отдел");

        while($row = $rez->fetch()) {
            $table->addRow();
            for ($c = 0; $c < $cols; ++$c) {
                $table->addCell(1750)->addText($row[$c]);
            }
        }

        header("Content-Description: File Transfer");
        header('Content-Disposition: attachment; filename="Отделы.docx"');
        header('Content-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document');
        header('Content-Transfer-Encoding: binary');
        header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
        header('Expires: 0');

        $objWriter = \PhpOffice\PhpWord\IOFactory::createWriter($phpWord, 'Word2007');
        $objWriter->save("php://output");
    }