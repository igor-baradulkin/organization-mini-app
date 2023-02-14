$('.show-departments').on('click', function(){
    $('.info-block').remove()

    // 
    $.ajax({
        url: 'vendor/selectAllDepartments.php',
        type: 'POST',
        dataType: 'json',
        success (data) {
            let styles = `
                <style type="text/css">
                .info-table {
                    width: 80%;
                    margin-bottom: 20px;
                    border: 1px solid #dddddd;
                    border-collapse: collapse; 
                }
                .info-table th {
                    font-weight: bold;
                    padding: 5px;
                    background: #efefef;
                    border: 1px solid #dddddd;
                }
                .info-table td {
                    border: 1px solid #dddddd;
                    padding: 5px;
                }
                </style>`

            let table = $("<div class='info-block'></div>")
                        .append(`<table class='info-table'>
                                    <thead>
                                        <tr>
                                            <th>Название департамента</th>
                                            <th>Управляющий департамент</th>
                                        </tr>
                                    </thead>
                                <table>`).append(styles)
            
            $('.right').append(table)

            let tableBody = $("<tbody></tbody>")
    
            Object.values(data).forEach(element => {
                let row = `<tr>
                            <td>${element.ChildDep}</td>
                            <td>${(element.ParentDep === element.ChildDep) ? '' : element.ParentDep}</td>
                           </tr>`

                tableBody.append(row)           
            })

            $('.info-table').append(tableBody)
        }
    });   
})