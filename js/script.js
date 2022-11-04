$(document).ready(function() {
    
    $(".accordionOP").each(function() {
        $(".accordionOP h1").on('click', function() {
            let id = this.id;
            if(!$(this).is("active")) {
                $(".accordionOP h1").removeClass("active");
                $(".accordionOP div").removeClass("active");
                $(".accordionOP div").slideUp();
    
            }
    
            $("#" + id).addClass("active");
            $(".accordionOP div#" + id).addClass("active");  
            $(".accordionOP div#" + id).slideDown();
        });
    });
     
    $(".tabbedmenu").each(function() {
        $(".tab-button").on('click', function() {      
            if(!$(this).is("active")) {
                $(".tabbed li").removeClass("active");
                $(".tab-button").removeClass("active");
                
                let alias = $(this).index();
                $(this).addClass("active");
                let aliasline = $(".tabbed ul").find("li:eq(" + alias + ")");
                aliasline.addClass("active");
            }
        });
    });
    
});