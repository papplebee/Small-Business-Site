    $(document).ready(function () {    
        
        $('#header div#menu-button').hover(
            function () {
                //show its submenu
                $('ul', this).stop().slideDown(100);
            },
            function () {
                //hide its submenu
                $('ul', this).stop().slideUp(100);            
            }
        );


        $('.bxslider').bxSlider();
        
    });