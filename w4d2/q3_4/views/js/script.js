$(() => {
    const clearMsg = () => $("#msg").text("");
    function successMsg(){
        $("msg").text("product successfully added");
        setTimeout(clearMsg, 3000);
    }

    function failMsg(){
        $("msg").text("error in adding product item");
        setTimeout(clearMsg, 3000);
    }

    $(".submitBtn").click(function(){
        let id = $(this).attr("id");
        

        let data_ = {
            name: $(`#name${id}`).text(),
            price: $(`#price${id}`).text()
        }

        $.post({
            url: '/addToCart',
            data: (JSON.stringify(data_)),
            contentType: "application/json"
        }).done(successMsg)
        .fail(failMsg)
    });
})