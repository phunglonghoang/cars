$(document).ready(function() {
    $("#gototop").hide()

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100)
            $("#gototop").show("slow")
        else
            $("#gototop").hide("slow")

    })


    function myFunction() {
        document.getElementsByClassName("chi1s").innerHTML = "Xin Chào"
    }


    var zoom = function(elm) {
        elm
            .on('mouseover', function() {
                $(this).children('img').css({ 'transform': 'scale(2.0)' });
            })
            .on('mouseout', function() {
                $(this).children('img').css({ 'transform': 'scale(1)' });
            })
            .on('mousemove', function(e) {
                $(this).children('img').css({ 'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%' });
            })
    }

    $('.anhsp').each(function() {
        $(this)
            .append('<div class="anhsp"></div>')
            .children('img').css({ 'background-image': 'url(' + $(this).data('image') + ')' });
        zoom($(this));
    })
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animate__animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 350)
            $("nav").css({
                "position": "fixed",
                "left": 0,
                "right": 0,
                "top": -26,
                "z-index": 9999999
            })
        else
            $("nav").css({
                "position": "relative",
                "top": 0
            })
    })

    $("ul.tab a").click(function() {
        $("ul.tab a").removeClass("relatip"),
            $(this).addClass("relatip")

    })
    var buttons = document.querySelectorAll(".nut1 button")
    for (var i = 0; i < buttons.length; i++)
        buttons[i].onclick = function() {
            var color = this.getAttribute("rel")
            var img = document.getElementById("mainImg1")
            img.src = `hình/xe grancabrio/mau-xe-maserati-grancabrio-${color}.png`
        }
    var buttons = document.querySelectorAll(".nut2 button")
    for (var i = 0; i < buttons.length; i++)
        buttons[i].onclick = function() {
            var color = this.getAttribute("rel")
            var img = document.getElementById("mainImg2")
            img.src = `hình/mau-xe-maserati-ghibli-${color}.png`
        }
    var buttons = document.querySelectorAll(".nut3 button")
    for (var i = 0; i < buttons.length; i++)
        buttons[i].onclick = function() {
            var color = this.getAttribute("rel")
            var img = document.getElementById("mainImg3")
            img.src = `hình/xe levante/mau-xe-maserati-levante-${color}.png`
        }
    var buttons = document.querySelectorAll(".nut4 button")
    for (var i = 0; i < buttons.length; i++)
        buttons[i].onclick = function() {
            var color = this.getAttribute("rel")
            var img = document.getElementById("mainImg4")
            img.src = `hình/xe Quattroporte/mau-xe-maserati-quattroporte-${color}.png`
        }
    var buttons = document.querySelectorAll(".nut5 button")
    for (var i = 0; i < buttons.length; i++)
        buttons[i].onclick = function() {
            var color = this.getAttribute("rel")
            var img = document.getElementById("mainImg5")
            img.src = `hình/ferari/pista/ferrari-488-pista-spider-${color}.png`
        }
    var buttons = document.querySelectorAll(".nut6 button")
    for (var i = 0; i < buttons.length; i++)
        buttons[i].onclick = function() {
            var color = this.getAttribute("rel")
            var img = document.getElementById("mainImg6")
            img.src = `hình/ferari/pista/ferrari-488-pista-spider-${color}.png`
        }
    var buttons = document.querySelectorAll(".nut7 button")
    for (var i = 0; i < buttons.length; i++)
        buttons[i].onclick = function() {
            var color = this.getAttribute("rel")
            var img = document.getElementById("mainImg7")
            img.src = `hình/ferari/GTB/ferrari-488-gtb-color-${color}.png`
        }
    var buttons = document.querySelectorAll(".nut8 button")
    for (var i = 0; i < buttons.length; i++)
        buttons[i].onclick = function() {
            var color = this.getAttribute("rel")
            var img = document.getElementById("mainImg8")
            img.src = `hình/ferari/f12 berlinetta/${color}.png`
        }

    $(".tsct").hide()
    $(".ts>button").click(function() {

        $(".tsct").show()

    })
    $("button.close").click(function() {
        $(".tsct").hide()
    })
    $("div.table>ul:not(:first-child)").hide()

    $("div.tab a").click(function() {
        $("div.tab a").removeClass("active")
        $(this).addClass("active")

        var tab = $(this).attr("href")
        $("div.table>ul").hide()
        $(tab).show()

    })
})