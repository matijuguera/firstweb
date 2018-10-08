$(document).ready(function(){

    //Slider
    $('.slider').bxSlider({
        mode: 'fade',
        captions: true,
        pager: false
      });


    //Theme Selector
    var theme = $('#theme');
    $("#toRed").click(function(){
        theme.attr("href", "css/red.css");
    })
    $("#toGreen").click(function(){
        theme.attr("href", "css/green.css");
    })
    $("#toBlue").click(function(){
        theme.attr("href", "css/blue.css");
    })

    //Scroll up
    $("#goUp").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    })

  });