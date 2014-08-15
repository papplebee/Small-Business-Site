    jQuery(document).ready(function() {    
        
        $('div#menu-button').on('click', function() {
                var menu = $(this).find('ul')
                //toggle the menu on click
                menu.slideToggle(100);
                //slide up the menu on mouse leave
                $(this).on('mouseleave', function() {
                	menu.slideUp(100);
                });
            });



        $('.bxslider').bxSlider();
        
    });