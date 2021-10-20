$(() => {
    const questionInput = $("#quesionTxt");
    $("#ask").submit(() => {
            $.get({
                url: '/8ball'
            }).done((res) => {
                questionInput.text = res;
            }).fail(() => {
                window.alert('request error');
            })
        }
    );
});