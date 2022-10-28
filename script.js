// Assignment 5
// Angela Myers
// 0796187

$(document).ready(function () {
    class ContentItem {
        id;
        name;
        description;
        genre;

        constructor(id, name, description, genre) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.genre = genre;
        }

        updateContentItem(id, name, description, genre) {
            if(id === this.id && (name !== null || description !== null || genre !==null)) {
                this.id = id;
                this.name = name;
                this.description = description;
                this.genre = genre;

                $('content-item' + this.id).innerHTML = "<div class='content-item-wrapper' id='content-item-" + this.id + "'>" +
                                                        "<h2>" + this.name + "</h2>" +
                                                        "<p>" + this.description + "</p>" +
                                                        "<div>" + this.genre + "</div>"
                                                        "</div>";
            }
        }

        toString(id, name, description, genre) {
            return "<div class='content-item-wrapper' id='content-item-" + this.id + "'>" +
                    "<h2>" + this.name + "</h2>" +
                    "<p>" + this.description + "</p>" +
                    "<div>" + this.genre + "</div>" +
                    "</div>";
        }
    }

    let strawhats = [new ContentItem(0, 'Monkey D. Luffy', 'He is the main protagonist of the anime and mangao One Piece and is the founder and captain of the increasingly infamous and powerful Straw Hat Pirates.', 'Captain'),
                     new ContentItem(1, 'Roronoa Zora', 'He is the comdatant of the Straw Hat Pirates, one of their two swordsmen and the second to join the Straw Hat Pirates.', 'Swordsman'),
                     new ContentItem(2, 'Nami', 'She is the navigator of the Straw Hat Pirates and her dream is to make a map of the entire world.', 'Navigator'),
                     new ContentItem(3, 'Usopp', 'He is the fourth member of the crew and the sniper of the Straw Hat Pirates. Despite being a coward, his dream is to become a brave warrior of the sea.', 'Sniper'),
                     new ContentItem(4, 'Vinsmoke Sanji', 'He is the cook of the Straw Hat Pirates and the fifth member to join. His dream is to find the rumored paradise, All Blue, which is where East Blue, West Blue, North Blue, and South Blue meet.', 'Cook'),
                    ];
    
    strawhats.forEach(ContentItem => {
        $("#content-item-list").append(ContentItem.toString());
    });

    $(".content-item-wrapper").css({"border": "1px dashed black",
                                    "width": "75%",
                                    "padding": "10%",
                                    "margin": "0 auto",
                                    "margin-top": "5%", });

});


