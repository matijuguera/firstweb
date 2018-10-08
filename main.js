$(document).ready(function(){
    $('.slider').bxSlider({
        mode: 'fade',
        captions: true,
        pager: false
      });

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

  });