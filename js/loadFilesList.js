$('.load-files-list').on('click', function(){
    $('.info-block').remove()

    $.ajax({
        url: 'vendor/selectLoadFiles.php',
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
                                            <th>Имя файла на сервере</th>
                                            <th>Время загрузки</th>
                                        </tr>
                                    </thead>
                                <table>`).append(styles)
            
            $('.right').append(table)

            let tableBody = $("<tbody></tbody>")
    
            Object.values(data).forEach(element => {
                let row = `<tr>
                            <td><a href="files/upload/${element.FileName}" download="">${element.FileName}</a></td>
                            <td>${element.LoadDate}</td>
                           </tr>`

                tableBody.append(row)           
            })

            $('.info-table').append(tableBody)
        }
    });   
})