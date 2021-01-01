$(function() {
    $.ajax({
        type: 'GET',
        url: 'test.html',
        dataType: 'html',
        success: function(data) {
            console.log($(data).find('#sample').text());
        }
    });
});