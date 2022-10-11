// WEB 303 Assignment 3
// Angela Myers
// 0796187

function getTeamJSON() {
    $.getJSON("team.json").done(function(data) {
        $.each(data.team, function(_index, value) {
            let teamName = $("<h2></h2>").text(value.name);
            let teamPosition = $("<h5></h5>").text(value.position);
            let teamBio = $("<p></p>").text(value.bio);

            $("div#team").append(teamName);
            $("div#team").append(teamPosition);
            $("div#team").append(teamBio);

        });
    });
}

function getTeamAJAX() {
    $.ajax({
        url: 'team.json',
        dataType: 'JSON'
    },

        $.each(data.team, function(_index, value) {
            let teamName = $("<h2></h2>").text(value.name);
            let teamPosition = $("<h5></h5>").text(value.position);
            let teamBio = $("<p></p>").text(value.bio);
    }));
}