<footer>

    <div class="container">
        <div class="footer-links">
            <span>Informationen</span>
            <a href="/">Home</a><br>
            <a href="/uber-uns">Uber uns</a><br>
            <a href="/karriere">Karriere</a><br>
            <a href="/kontakt">Kontakt</a>
        </div>
        <div class="footer-links">
            <span>Leistungen</span>
            <a href="/konzept-zum-ziel">Immobilien-Sofortkredit</a><br>
            <a href="/konzept-zum-wohnen">Konzept zum Wohnen</a>
        </div>
        <div class="footer-links">
            <span>Nachrichten abonnieren</span>
            Hinterlassen Sie Ihre E-Mail, um unsere Neuigkeiten zu erhalten

			<div id="footer-subscribe">
				<?php es_subbox($namefield = "YES", $desc = "", $group = "Public"); ?>
                
            </div>
			<!-- <form id="footer-subscribe">
                <input type="text" placeholder="Deine Email">
                <div id="subscribe-btn"><span>Jetzt abonnieren</span></div>
            </form> -->
        </div>
        <div class="partner-logos">
            <div class="partner-logo"><img src="<?php bloginfo('template_directory')?>/img/partner1.png" alt="" width="126"></div>
            <div class="partner-logo"><img src="<?php bloginfo('template_directory')?>/img/partner2.png" alt="" width="110"></div>
            <div class="partner-logo"><img src="<?php bloginfo('template_directory')?>/img/partner3.png" alt="" width="83"></div>
            <div class="partner-logo"><img src="<?php bloginfo('template_directory')?>/img/partner4.png" alt="" width="164"></div>
            <div class="partner-logo"><img src="<?php bloginfo('template_directory')?>/img/partner5.png" alt="" width="156"></div>
        </div>
  

        <div class="partner-logos partners-owl owl-carousel">
<div class='item'>
            <div class="partner-logo"><img src="<?php bloginfo('template_directory')?>/img/partner1.png" alt="" width="126"></div>
</div>
<div class='item'>
        
            <div class="partner-logo"><img src="<?php bloginfo('template_directory')?>/img/partner2.png" alt="" width="110"></div>
</div>
<div class='item'>
        
            <div class="partner-logo"><img src="<?php bloginfo('template_directory')?>/img/partner3001.png" alt="" width="83"></div>
</div>
           <div class='item'>
        
 <div class="partner-logo"><img src="<?php bloginfo('template_directory')?>/img/partner4.png" alt="" width="164"></div>
</div>
<div class='item'>
        
            <div class="partner-logo"><img src="<?php bloginfo('template_directory')?>/img/partner5.png" alt="" width="156"></div>
</div>   
    </div>
</div>
</div>
    <div id="footer-footer">
        <div class="container">
            <div class="footer-footer-info">
                Impressum & Datenschutz <a href="tel:+4922116839880">+49 221 16839880</a> 
		<br/>
		<a style="margin: 0;" href="/karriere">Karriere</a>
            </div>
            © 2018 <span>Zum Ziel</span> - All rights reserved.
            <a href="https://www.facebook.com/KONZEPTzumZIEL/" class="soc fb" target="_blank"></a>
            <a href="https://www.instagram.com/konzeptzumwohnen/" class="soc ig" target="_blank"></a>
        </div>
    </div>

</footer>

</div>

<script>
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
</script>
</body>
</html>











