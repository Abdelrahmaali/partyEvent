
$(window).ready(function () {



    // loading & scroll section starts

    let { top: aboutsection } = $("#empty").offset();
    console.log(aboutsection);

    $(window).scroll(function () {
        let windowoffset = $(window).scrollTop();

        if (windowoffset >= (aboutsection-400)) {
            $("#side").css({ color: ` rgba(1, 1, 1)` })
           
            
        } else {
            $("#side").css({ color: " rgb(255, 255, 255)" })
           
        }

    })



    $("#loading .lds-ripple").fadeOut(1000,function(){
        $("#loading").fadeOut(1000,function(){
            $("body").css({ overflow: "auto" });
        })
    })



    //   loading & scroll section ends 







    /*section 1 starts*/
    let inwidth = $(".sidebar_content").innerWidth();
    $("#sidebar").animate({ left: -inwidth }, 600);


    $("#side").click(function () {

        if ($("#sidebar").css("left") == "0px") {
            $("#sidebar").animate({ left: -inwidth }, 600);
        } else {
            $("#sidebar").animate({ left: "0px" }, 600);
        }

    });


    $(".diff").click(function () {
        $("#sidebar").animate({ left: -inwidth }, 600);
    });
    /* section 1 ends */






    /*section 2 starts */
    function insertClassdiff(info,name2) {
        $(`.${info}`).hide();
        $(`.${name2}`).click(function () {
            $(`.${info}`).slideToggle(400);
        });

    }

    



    function insertClass(info,name2,hidd) {
        $(`.${info}`).hide();
        $(`.${name2}`).click(function () {
            $(`.${hidd}`).slideUp(400);
            $(`.${info}`).slideToggle(400);
        });

    }

    insertClassdiff(`singer_info`,`singer1`);
    insertClass(`singer_info2`,`singer2`,`singer_info`,`singer_info3`);
    insertClass(`singer_info3`,`singer3`,`singer_info2`,`singer_info4`);
    insertClass(`singer_info4`,`singer4`,`singer_info3`);



   
    /*section 2 ends  */






    // section 3 starts

    let myfunc = setInterval(function() {
        }, 1000);





        function countdown() {
            var now = new Date();
            var eventDate = new Date(2023, 4, 3);
        
            var currentTiime = now.getTime();
            var eventTime = eventDate.getTime();
        
            var remTime = eventTime - currentTiime;
        
            var s = Math.floor(remTime / 1000);
            var m = Math.floor(s / 60);
            var h = Math.floor(m / 60);
            var d = Math.floor(h / 24) - 30;
        
            h %= 24;
            m %= 60;
            s %= 60;
        
            h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;
            s = (s < 10) ? "0" + s : s;
        
            document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";
            document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";
        
            document.getElementById("hours").innerHTML = "<h3>" + h + " h" + "</h3>";
            document.getElementById("minutes").innerHTML = "<h3>" + m + " m" + "</h3>";
            document.getElementById("seconds").innerHTML = "<h3>" + s + " s" + "</h3>";
        
            setTimeout(countdown, 1000);
        }
        
        countdown();
        


    // section 3 ends 




    // last section starts
    $(function () {
        var max = 100;
        $("textarea").keyup(function () {
            var length = $(this).val().length;
            var character = max - length;
            console.log(character)
            if (character <= 0) {
                $("#char").text("your available character finished");
            } else {
                $("#char").text(character);
            }
        });
    });
    // last section ends

})
