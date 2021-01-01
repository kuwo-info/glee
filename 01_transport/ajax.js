var head = document.getElementsByTagName('head')
var script = document.createElement('script')
//ここで任意のjQueryを読み込ませる
script.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
script.setAttribute('type', 'text/javascript')
script.addEventListener('load', function() {

	// ここにjQueryの記述をする
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

})
document.head.appendChild(script)
