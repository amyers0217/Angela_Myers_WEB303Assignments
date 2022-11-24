// WEB303 Assignment 9
// Angela Myers
// 0796187
// 2022-11-24

$(document).ready(function() {
    getCharacters();

    $("input").keyup(function () {
        let query = this.value.toLowerCase();    
        $('tbody tr').each(function () {
        let $name = $(this);
        let tname = $name.text();
                if (tname.toLowerCase().indexOf(query) == 0) {
                    $name.removeClass('active');
                } else if(tname.toLowerCase().indexOf(query) != -1) {
                    $name.addClass('active');   
                }
        });
    });
});  


function getCharacters() {
    $.getJSON("strawhats.json").done(function(data) {
        $.each(data.pirates, function(index, value) {
            $('.pirates').append(
                `<tr>
                <td>${value.name}</td>
                <td>${value.piratecrew}</td>
                <td>${value.position}</td>
                <td>${value.age}</td>
                <td>${value.devilfruitpower}</td>
                </tr>`
            );
        });  
    });
}
