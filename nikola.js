$(function(){
    var quoteClass = $('.quote');//get quote class
    var $window = $(window);

    function animation(){
        var windowHeight = $window.height();
        var windowViewPort = $window.scrollTop();
        var windowEndZone = windowHeight + windowViewPort;//computes window current Bottom position from the top of the window

        quoteClass.each(function(){
            var quote = $(this);//gets the current quote class
            var quoteHeight = quote.outerHeight();
            var quotePosition = quote.offset().top;
            var quoteEndZone = quoteHeight + quotePosition;//computes the bottom point of the quoteClass container

            if((quoteEndZone >= windowViewPort) && (quotePosition <= windowEndZone)){
                quote.addClass('slide');
            }else{
                quote.removeClass('slide');
            }
        });
    }
    $window.on('scroll resize',animation);
});