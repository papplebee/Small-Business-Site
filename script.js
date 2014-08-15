    jQuery(document).ready(function() {    
        
        $('div#menu-button').on('click', function() {
                //toggle the menu on click
                $(this).find('ul').slideToggle(100);
                
            });



        $('.bxslider').bxSlider();
        
    });