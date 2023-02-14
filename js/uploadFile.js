$('.upload-file').on('click', function(){
    $('.info-block').remove()

    let fileUploadForm = $("<div class='info-block'></div>")
                            .append(`<form>
                                        Файлы:<br />
                                        <input id="userfile1" type="file"/><br/>
                                        <input id="userfile2" type="file"/><br/>
                                        <input class="upload" type="button" value="Отправить" />
                                     </form>`)

    $('.right').append(fileUploadForm)

    $('.upload').on('click', function(){
        let file1 = $("#userfile1")[0].files[0];
        let file2 = $("#userfile2")[0].files[0];    

        let formData = new FormData();

        formData.append('file1', file1);
        formData.append('file2', file2);

        $.ajax({
            url: 'vendor/insertFilesInfoInDB.php',
            dataType: 'text',
            cache: false,
            contentType: false,
            processData: false,
            data: formData,     
            type: 'post',
            success (data) {
                console.log(data)
            }                  
        })
    })
})

