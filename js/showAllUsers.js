$('.show-users').on('click', function(){
    $('.info-block').remove()

    $.ajax({
        url: 'vendor/selectAllUsers.php',
        dataType: 'json',
        type: 'POST',
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
                                            <th>Фамилия</th>
                                            <th>Имя</th>
                                            <th>Отчество</th>
                                            <th>Отдел</th>
                                            <th>Должность</th>
                                            <th>Электронная почта</th>
                                            <th>Телефон</th>
                                            <th>Мобильный телефон</th>
                                            <th>Логин</th>
                                            <th>Пароль</th>
                                        </tr>
                                    </thead>
                                <table>`).append(styles)
            
            $('.right').append(table)

            let tableBody = $("<tbody></tbody>")
    
            Object.values(data).forEach(element => {
                let row = `<tr>
                            <td>${element.LastName}</td>
                            <td>${element.Name}</td>
                            <td>${element.SecondName}</td>
                            <td>${element.DepartmentName}</td>
                            <td>${element.WorkPosition}</td>
                            <td>${element.Email}</td>
                            <td>${element.Phone}</td>
                            <td>${element.MobilePhone}</td>
                            <td>${element.Login}</td>
                            <td>${element.Password}</td>
                           </tr>`

                tableBody.append(row)           
            })

            $('.info-table').append(tableBody)
        }
    });   
})