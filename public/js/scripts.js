// Author: Ian de Almeida <ian.freelance@outlook.com>

// Scripts

$(function() {

    // Trigger 300px from top of page
    var scrollTopTriggerPos = 500,
        $header             = $('header');


    /**
     * Smooth scrolls to top of page when Back To Top 
     * Button clicked 
     */
    $('.back-to-top').click(function(event) {

        event.preventDefault();
    
        $("html, body").animate({ scrollTop: "0px" }, 1000);
    
    });


    /**
     * Minimized the header at scrollTopTriggerPos
     */
     $(window).scroll(function() {

        var $this       = $(this),
            scrollTop   = $this.scrollTop(); 


        if (scrollTop >= scrollTopTriggerPos) {
            $header.addClass('minimize');
        } else {
            $header.removeClass('minimize');
        }

    });
});
