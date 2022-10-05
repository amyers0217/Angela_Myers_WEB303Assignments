// WEB303 Assignment 2
// Angela Myers
// 0796187

// Loading the content into the #content div using AJAX
function loadConvert() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "convert.html");

    xhr.onload = function() {
        if (xhr.status === 200) {
            let content = document.getElementById("content1");
        }
    };

    xhr.send();
};

function loadProspect() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "prospect.html");

    xhr.onload = function() {
        if (xhr.status === 200) {
            let content = document.getElementById("content1");
        }
    };

    xhr.send();
};

function loadRetain() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "retain.html");

    xhr.onload = function() {
        if (xhr.status === 200) {
            let content = document.getElementById("content1");
        }
    };

    xhr.send();
};

// onclick functions for each of the pages
$(document).ready(function() {
    $("convert").click(function () {
        $("#content").slideDown(1000, loadConvert());
    });
    
    $("prospect").click(function () {
        $("#content").slideDown(1000, loadProspect());
    });

    $("retain").click(function () {
        $("#content").slideDown(1000, loadRetain());
    });
});