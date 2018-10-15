$( document ).ready(function() {
 $('.partners-owl').owlCarousel({
    loop:true,
    nav:false,
    items:3,
    mouseDrag:true,
    TouchDrag:true,
    autoplay:true,
    autoplayTimeout: 5000,
    autoplayHoverPause:false,
    smartSpeed:1000,
    margin:30,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:1
        }
    }
});
 $('.owl-behind').owlCarousel({
    loop:true,
    nav:true,
    items:3,
    mouseDrag:true,
    TouchDrag:true,
    autoplay:true,
    autoplayTimeout: 13000,
    autoplayHoverPause:false,
    smartSpeed:1000,
    margin:30,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

});


var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|Android)/i) != null;
var map = document.getElementById('map');
var areas = new Array();
var fields = new Array();
var polygon;
if(isMobile){
    eventpress = 'touchstart';
    eventunpress = 'touchend'
    eventmove = 'touchmove'
} else {
    eventpress = 'mousedown';
    eventunpress = 'mouseup'
    eventmove = 'mousemove'
}


$(function(){
 $('.logos-owl').owlCarousel({
    loop:false,
    nav:true,
	navText: ['',''],
    items:1,
    mouseDrag:true,
    TouchDrag:true,
    autoplay:false,
    autoplayTimeout: 5000,
    autoplayHoverPause:false,
    smartSpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

    $(".top-dot").on("click", function () {
        $(".top-dot").removeClass('active');
        $(this).addClass('active');
        $("#top-block").addClass('second');
        if ($(this).index() == 0){
            $("#top-block").removeClass('second');
     $("#top-block").removeClass('third');
       
        }

        if ($(this).index() == 1){
            $("#top-block").removeClass('third');
        }

        if ($(this).index() == 2){
            $("#top-block").addClass('third');
        }

    });

    $("#burger").on("click", function () {
        $("#mobile-menu").addClass("active");
    });
    $("#close-menu").on("click", function () {
        $("#mobile-menu").removeClass("active");
    });
    
    $(".scheme-item").on("click, mouseover", function () {
        var ind = $(this).index();
	if (!$(".scheme-text-item").eq(ind).is(':visible')) {
		$('.scheme-text-item-default').fadeOut(300);
       	 	$(".scheme-text-item").fadeOut(300);
        	$(".scheme-text-item").eq(ind).delay(300).fadeIn(300);
	}
    });

	$(".fakten-item").on("click", function () {
        var ind = $(this).index();
	if (!$(".fakten-text-item").eq(ind).is(':visible')) {
		$('.fakten-text-item-default').fadeOut(300);
       	 	$(".fakten-text-item").fadeOut(300);
        	$(".fakten-text-item").eq(ind).delay(300).fadeIn(300);
	}
    });

$(".inner-icon").on("click", function () {
        var ind = $(this).index();
	if (!$(".inner-text-item").eq(ind).is(':visible')) {
		$('.inner-text-item-default').fadeOut(300);
       	 	$(".inner-text-item").fadeOut(300);
        	$(".inner-text-item").eq(ind).delay(300).fadeIn(300);
	}
    });

$(".inner-scheme, .second-block-scheme-img").on("click", function (e) {
if (e.target.className == 'inner-scheme' || e.target.className == 'inner-scheme zum-vohnen' || e.target.className == 'second-block-scheme-img') {
	if (!$(".scheme-text-item-default").is(':visible')) {
		$(".scheme-text-item").fadeOut(300);
		$(".scheme-text-item-default").delay(300).fadeIn(300);
	}
}
    });

    if ($("#inner-gallery").length > 0){
        var gal_ch = 0;
        $(".gallery-items-next").on("click", function () {
            if (!$(this).hasClass('disable')){
                $(".gallery-items-prev").removeClass('disable');
                gal_ch++;
                if ($(window).width() > 500){
                    if (gal_ch >= $(".inner-gallery-item").length-3){
                        $(this).addClass('disable');
                    }
                }else{
                    if (gal_ch >= $(".inner-gallery-item").length-1){
                        $(this).addClass('disable');
                    }
                }
                $(".inner-gallery-items-line").css({"left": -gal_ch*$(".inner-gallery-item").width()*1.04});
            }
        });
        $(".gallery-items-prev").on("click", function () {
            if (!$(this).hasClass('disable')){
                $(".gallery-items-next").removeClass('disable');
                gal_ch--;
                if (gal_ch < 1){
                    $(this).addClass('disable');
                }
                $(".inner-gallery-items-line").css({"left": -gal_ch*$(".inner-gallery-item").width()*1.04});
            }
        });
    }

    var thanks_iter = 0;
    var thanks_active = false;
    var thanks_interval = setInterval(function () {
        thanks_iter++;
        if (thanks_iter == 6){
            thanks_iter = 0;
            thanks_ch++;
            if (thanks_ch == $(".thanks-item").length){
                thanks_ch = 0;
            }
            $(".thanks-nav span").html("<span>0"+(thanks_ch+1)+"</span> | 0"+$(".thanks-item").length);
            $(".thanks-item").removeClass("active");
            $(".thanks-item").eq(thanks_ch).addClass("active");
        }
    }, 1000)

    $(window).on('scroll', function(){
        if ($(window).width() > 500){
            if ($(window).scrollTop() == 0){
                $('header').removeClass('scroll');
            }else{
                $('header').addClass('scroll');
            }
        }
        if ($(window).scrollTop() > 500){
            $(".second-block-scheme").addClass('active');
        }
    });

    $(window).resize(function(){
        if ($(window).width() > 1920){
            $("#top-block").addClass("vertical");
        }else{
            $("#top-block").removeClass("vertical");
        }
    });
    $(window).resize();

    $('.show-full-content span').on('click', function () {
        $('.content075').addClass('show');
    });

    $("#graph-title-pages a").on("click", function () {
        $("#graph-title-pages a").removeClass("active");
        $(this).addClass("active");
        $(".graph-image").removeClass("active");
        $(".graph-image").eq($(this).index()).addClass("active");
        return false;
    });

    $(".thanks-nav span").html("<span>01</span> | 0"+$(".thanks-item").length);
    var thanks_ch = 0;
    $(".thanks-nav-next").on("click", function () {
        thanks_ch++;
        if (thanks_ch == $(".thanks-item").length){
            thanks_ch = 0;
        }
        $(".thanks-nav span").html("<span>0"+(thanks_ch+1)+"</span> | 0"+$(".thanks-item").length);
        $(".thanks-item").removeClass("active");
        $(".thanks-item").eq(thanks_ch).addClass("active");
        clearInterval(thanks_interval);

    });
    $(".thanks-nav-prev").on("click", function () {
        thanks_ch--;
        if (thanks_ch == -1){
            thanks_ch = $(".thanks-item").length-1;
        }
        $(".thanks-nav span").html("<span>0"+(thanks_ch+1)+"</span> | 0"+$(".thanks-item").length);
        $(".thanks-item").removeClass("active");
        $(".thanks-item").eq(thanks_ch).addClass("active");

        clearInterval(thanks_interval);
    });
    if ($("#map").length > 0){
        initMap();
    }


    if ($("#metaslider_66").length > 0){
        var team_length = $("#metaslider_66 li").length;
        $("#home-team-items .items").append('<div class="home-team-item right right-right"><img src="'+$("#metaslider_66 li").eq(team_length-3).find("img").attr("src")+'" alt=""></div>');
        $("#home-team-items .items").append('<div class="home-team-item left left-left"><img src="'+$("#metaslider_66 li").eq(team_length-2).find("img").attr("src")+'" alt=""></div>');
        $("#home-team-items .items").append('<div class="home-team-item left"><img src="'+$("#metaslider_66 li").eq(team_length-1).find("img").attr("src")+'" alt=""></div>');

        $("#team-name").append('<div class="team-name">'+$("#metaslider_66 li").eq(team_length-3).find("img").attr("title")+'<i>'+$("#metaslider_66 li").eq(3).find(".caption").html()+'</i></div>');
        $("#team-name").append('<div class="team-name">'+$("#metaslider_66 li").eq(team_length-2).find("img").attr("title")+'<i>'+$("#metaslider_66 li").eq(2).find(".caption").html()+'</i></div>');
        $("#team-name").append('<div class="team-name">'+$("#metaslider_66 li").eq(team_length-1).find("img").attr("title")+'<i>'+$("#metaslider_66 li").eq(1).find(".caption").html()+'</i></div>');

        var cls = "";
        var cls_a = "active";
        for (i=0; i<team_length; i++){
            var str = '<div class="home-team-item '+cls+'"><img src="'+$("#metaslider_66 li").eq(i).find("img").attr("src")+'" alt=""></div>'
            $("#home-team-items .items").append(str);
            var str1 = '<div class="team-name '+cls_a+'">'+$("#metaslider_66 li").eq(i).find("img").attr("title")+'<i>'+$("#metaslider_66 li").eq(i).find(".caption").html()+'</i></div>'
            $("#team-name").append(str1);
            cls_a="";
            if (i==0){
                cls = "right";
            }else{
                cls = "right right-right";
            }
        }
        $("#home-team-items .items").append('<div class="home-team-item right right-right"><img src="'+$("#metaslider_66 li").eq(0).find("img").attr("src")+'" alt=""></div>');
        $("#home-team-items .items").append('<div class="home-team-item right right-right"><img src="'+$("#metaslider_66 li").eq(1).find("img").attr("src")+'" alt=""></div>');

        $("#team-name").append('<div class="team-name">'+$("#metaslider_66 li").eq(0).find("img").attr("title")+'<i>'+$("#metaslider_66 li").eq(0).find(".caption").html()+'</i></div>');
        $("#team-name").append('<div class="team-name">'+$("#metaslider_66 li").eq(1).find("img").attr("title")+'<i>'+$("#metaslider_66 li").eq(1).find(".caption").html()+'</i></div>');

    }
    var team_ch = 3;
    $("#team-next").on("click", function () {
        team_ch++;
        if (team_ch == $('.home-team-item').length-2){
            team_ch = 2;
            $(".home-team-item").addClass('notransition');
            $(".home-team-item").removeClass('left left-left right right-right');
            $(".home-team-item:lt("+team_ch+")").addClass('left');
            $(".home-team-item:lt("+(team_ch-1)+")").addClass('left-left');
            $(".home-team-item:gt("+team_ch+")").addClass('right');
            $(".home-team-item:gt("+(team_ch+1)+")").addClass('right-right');
            setTimeout(function () {
                $(".home-team-item").removeClass('notransition');
                team_ch = 3;
                setTimeout(function () {
                    $(".home-team-item").removeClass('left left-left right right-right');
                    $(".home-team-item:lt("+team_ch+")").addClass('left');
                    $(".home-team-item:lt("+(team_ch-1)+")").addClass('left-left');
                    $(".home-team-item:gt("+team_ch+")").addClass('right');
                    $(".home-team-item:gt("+(team_ch+1)+")").addClass('right-right');
                    $(".team-name").removeClass('active');
                    $(".team-name").eq(team_ch).addClass('active');
                },30)
            },30)
        }else{
            $(".home-team-item").removeClass('left left-left right right-right');
            $(".home-team-item:lt("+team_ch+")").addClass('left');
            $(".home-team-item:lt("+(team_ch-1)+")").addClass('left-left');
            $(".home-team-item:gt("+team_ch+")").addClass('right');
            $(".home-team-item:gt("+(team_ch+1)+")").addClass('right-right');
            $(".team-name").removeClass('active');
            $(".team-name").eq(team_ch).addClass('active');
        }


    });
    $("#team-prev").on("click", function () {
        team_ch--;
        if (team_ch == 2){
            team_ch = $('.home-team-item').length-2;
            $(".home-team-item").addClass('notransition');
            $(".home-team-item").removeClass('left left-left right right-right');
            $(".home-team-item:lt("+team_ch+")").addClass('left');
            $(".home-team-item:lt("+(team_ch-1)+")").addClass('left-left');
            $(".home-team-item:gt("+team_ch+")").addClass('right');
            $(".home-team-item:gt("+(team_ch+1)+")").addClass('right-right');
            setTimeout(function () {
                $(".home-team-item").removeClass('notransition');
                team_ch = $('.home-team-item').length-3;
                setTimeout(function () {
                    $(".home-team-item").removeClass('left left-left right right-right');
                    $(".home-team-item:lt("+team_ch+")").addClass('left');
                    $(".home-team-item:lt("+(team_ch-1)+")").addClass('left-left');
                    $(".home-team-item:gt("+team_ch+")").addClass('right');
                    $(".home-team-item:gt("+(team_ch+1)+")").addClass('right-right');
                    $(".team-name").removeClass('active');
                    $(".team-name").eq(team_ch).addClass('active');
                },30)
            },30)
        }else{
            $(".home-team-item").removeClass('left left-left right right-right');
            $(".home-team-item:lt("+team_ch+")").addClass('left');
            $(".home-team-item:lt("+(team_ch-1)+")").addClass('left-left');
            $(".home-team-item:gt("+team_ch+")").addClass('right');
            $(".home-team-item:gt("+(team_ch+1)+")").addClass('right-right');
            $(".team-name").removeClass('active');
            $(".team-name").eq(team_ch).addClass('active');
        }

    });


    if ($("#metaslider_79").length > 0){
        var cls_a = "active";
        for (i=0; i<$("#metaslider_79").find('li').length; i++){
            var str = '<div class="thanks-item '+cls_a+'"><div class="thanks-item-photo"></div><div class="thanks-quote"></div><div class="thanks-text"> <span>'+$("#metaslider_79").find('li').eq(i).find('img').attr('title')+'</span>'+$("#metaslider_79").find('li').eq(i).find('.caption').html()+'<small>'+$("#metaslider_79").find('li').eq(i).find('img').attr('alt')+'</small></div></div>';
            $(".thanks-items").append(str);
            cls_a="";
        }

    }

    if ($("#metaslider_82").length > 0){
        for (i=0; i<$("#metaslider_82").find('li').length; i++){
            var str = '<div class="inner-gallery-item"><div class="inner-gallery-item-img" style="background: url('+$("#metaslider_82").find('li').eq(i).find('img').attr('src')+') no-repeat 50% 50%; background-size: cover;"></div></div>';
            $(".inner-gallery-items-line").append(str);
        }

    }

    if (isMobile){
        var press_ok = false;
        var old_x = 0;
        var new_x = 0;
        $(document).on("touchstart", $("#top-block"), function(e){
            press_ok = true;
            old_x = e.originalEvent.touches[0].pageX;
            new_x = e.originalEvent.touches[0].pageX;
        });
        $(document).on("touchmove", $("#top-block"), function(e){
            if (press_ok){
                new_x = e.originalEvent.touches[0].pageX;
            }
        });
        $(document).on("touchend", $("#top-block"), function(e){
            if (press_ok){
                press_ok = false;
                if (Math.abs(old_x - new_x) > 100){
                    if (old_x < new_x){
                        $(".top-dot").eq(0).click();
                    } else {
                        $(".top-dot").eq(1).click();
                    }
                }
                old_x = 0;
                new_x = 0;
            }
        });


        if ($("#home-team-items").length > 0){
            slider("#home-team-items", "#team-prev", "#team-next");
        }
        if ($("#inner-gallery").length > 0){
            slider("#inner-gallery", ".gallery-items-prev", ".gallery-items-next");
        }

    }






});

function slider(container, prev, next){
    var sl_ch = 0;
    var press_ok = false;
    var old_x = 0;
    var new_x = 0;
    $(document).on("touchstart", container, function(e){
        press_ok = true;
        old_x = e.originalEvent.touches[0].pageX;
        new_x = e.originalEvent.touches[0].pageX;
    });
    $(document).on("touchmove", container, function(e){
        if (press_ok){
            new_x = e.originalEvent.touches[0].pageX;
        }
    });
    $(document).on("touchend", container, function(e){
        if (press_ok){
            press_ok = false;
            if (Math.abs(old_x - new_x) > 100){
                if (old_x < new_x){
                    $(prev).click();
                } else {
                    $(next).click();
                }
            }
            old_x = 0;
            new_x = 0;
        }
    });
}



function initMap() {

    var styles = [
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#d3d3d3"
                }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "color": "#808080"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#b3b3b3"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "weight": 1.8
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#d7d7d7"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ebebeb"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#a7a7a7"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#efefef"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#696969"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#737373"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#d6d6d6"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {},
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#dadada"
                }
            ]
        }
    ]
    //59.9200945,30.2916773
    var myLatLng = new google.maps.LatLng(
        50.970563, 7.006931
    );
    var markerLatLng = new google.maps.LatLng(
        50.970563, 7.006931
    );
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        scrollwheel: false,
        center: myLatLng,
        disableDefaultUI: true
    });

    var image = 'img/marker.png';

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(50.970563, 7.006931),
        map: map,
        clickable: true,
        icon: image
    });


    map.setOptions({styles: styles});

}

$(function(){
	$('.home-team-item ').on('click', function() {
		if ($(this).hasClass('left')) {
			$('#team-prev').click();
		}
		if ($(this).hasClass('right')) {
			$('#team-next').click();
		}
	});
});


