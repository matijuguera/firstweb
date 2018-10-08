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

    function buildPost(title, date, paragraph){
        return {
            title: title,
            date: date,
            paragraph: paragraph
        }
    }

    $('.showMore').click(function(){
        var post = buildPost("Article Title", "Date Time", "Nunc eget diam magna. Integer eu egestas arcu. Donec efficitur, enim et pulvinar feugiat, mauris \
        lacus mollis nibh, viverra commodo orci eros vitae leo. Vestibulum enim nulla, iaculis eu metus \
        in, pharetra commodo elit. Phasellus quis placerat turpis. Curabitur aliquet luctus posuere. \
        Mauris eleifend scelerisque magna nec tempus. Sed rhoncus, odio at gravida hendrerit, mauris \
        libero aliquet tellus, in feugiat nisi turpis ac ex. Integer orci augue, mollis eget justo sed, \
        dapibus posuere quam. Donec nisi elit, finibus sed magna ac, gravida laoreet erat. Praesent \
        convallis elementum eleifend. \
        \
        Fusce pretium volutpat nisi, non dapibus eros tincidunt semper. Pellentesque urna velit, \
        tincidunt at accumsan non, viverra id leo. Curabitur non elit rutrum, tristique augue et, \
        accumsan metus. Praesent ac porta ligula. Nullam commodo id metus in commodo. Aenean quis risus \
        ornare, aliquet orci id, volutpat purus. Vestibulum a urna id dolor laoreet lobortis sed sit \
        amet nisi. Vivamus ornare turpis sit amet ex aliquam vestibulum. Duis auctor eros ac sapien \
        volutpat, sit amet commodo tortor ornare. Donec sapien lorem, tristique quis interdum in, \
        pretium vel risus. Fusce et volutpat magna. Quisque a ornare felis. Donec blandit auctor \
        tincidunt. Pellentesque aliquam quam urna, tincidunt condimentum dui accumsan egestas. \
        Vestibulum eget lacus eleifend, imperdiet tortor vel, rhoncus diam. Praesent mollis, mauris id \
        interdum rutrum, leo nisl imperdiet lacus, quis dignissim mi lectus sit amet nibh.");

        var h2 = document.createElement("h2");
        h2.innerHTML = post.title;
        h2.style.marginTop = "50px";
        var button = document.createElement("button");
        button.className += "commentary"
        button.innerHTML = "Commentary"
        button.style.marginTop = "50px";
        var clearFix = document.createElement("div");
        clearFix.className += "clearFix"
        var date = document.createElement("span");
        date.innerHTML = post.date;
        var p = document.createElement("p");
        p.innerHTML = post.paragraph;
        var article = document.createElement("article");

        article.appendChild(h2);
        article.appendChild(button);
        article.appendChild(clearFix);
        article.appendChild(date);
        article.appendChild(p);

        this.before(article);
    })
    
  });