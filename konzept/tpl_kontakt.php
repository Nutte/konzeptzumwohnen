<?php

/*
Template Name: Kontakt
*/

?>

<?php get_header();?>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6ZKhBXDChVXf9ZY0bK_YXnZNAWDb_nQ4&callback=initMap" async defer></script>
<header>
    <div id="burger"></div>
    <a href="/" id="logo"></a>
    <div class="top-left-links">
        <a href="/"><i class="fas fa-angle-right"></i>Home</a>
        <div class="multi-menu">
            <a href="#"><i class="fas fa-angle-right"></i>Leistungen</a>
            <div class="submenu">
                <a href="/konzept-zum-ziel">Immobilien-Sofortkredit</a><br>
                <a href="/konzept-zum-wohnen">Konzept zum wohnen</a>
            </div>
        </div>
<!--<a href="/konzept-zum-ziel">Immobilien-Sofortkredit</a>
                <a href="/konzept-zum-wohnen">Konzept zum wohnen</a>-->
    </div>
    <div class="top-right-links">
        <!--<a href="/karriere"><i class="fas fa-angle-right"></i>Karriere</a>-->
	<a href="/uber-uns"><i class="fas fa-angle-right"></i>Über uns</a>
        <a href="/kontakt" class="active"><i class="fas fa-angle-right"></i>Anfrage</a>
	<a class="phone" href="tel:+4922116839880">+49 221 16839880</a>
    </div>
</header>

<div id="inner-top-block" class="kontakt" style="background: url(<?php bloginfo('template_directory')?>/img/contacts_bg.png) no-repeat 50% 50%; background-size: cover;">
    <div class="inner-top-dark"></div>
    <div class="inner-top-angle"></div>

    <div class="inner-title"><span>KONTAKT</span></div>
</div>

<div class="inner-content" style="min-height: 430px">
    <div class="inner-content-title">Kontaktieren Sie uns</div>
    <div class="contact-items">
        <div class="contact-items-links">
            <a href="callto:<?php echo get_post_meta($post->ID, 'kontakt_phone', true); ?>"><?php echo get_post_meta($post->ID, 'kontakt_phone', true); ?></a>
            <a href="mailto:<?php echo get_post_meta($post->ID, 'kontakt_email', true); ?>"><?php echo get_post_meta($post->ID, 'kontakt_email', true); ?></a>
            <a href="#"><?php echo get_post_meta($post->ID, 'kontakt_address', true); ?></a>
        </div>
    </div>
	

   <!-- <form action="#"--> <div id="contact-form">
        <div class="inner-content-title">Wir rufen Sie zurück </div>
	<?php echo do_shortcode( '[contact-form-7 id="145" title="cf7 kontakt"]' ); ?>
	 </div>
     <!--  <input type="text" placeholder="Ihr Name">
        <input type="text" placeholder="Ihre Telefonnummer">
        <textarea name="" id="" cols="30" rows="10" placeholder="Ihre Anfrage"></textarea>
        <div id="send-btn"><span>senden</span></div>
    </form> -->
</div>

<!--<div id="map"></div>-->
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10049.933666434785!2d7.007122!3d50.9702546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdfd0a3384a50f0e3!2sKONZEPT+zum+Ziel+Immobilienfinanzierungen+GmbH!5e0!3m2!1sde!2sde!4v1538143170571" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
<div id="mobile-menu">
    <div id="close-menu"></div>
    <div id="mobile-menu-items">
        <a href="/"><i class="fas fa-angle-right"></i> Home</a>
        <a href="/uber-uns"><i class="fas fa-angle-right"></i> Uber uns</a>
        <a href="/konzept-zum-ziel"><i class="fas fa-angle-right"></i> Immobilien-Sofortkredit</a>
        <a href="/konzept-zum-wohnen"><i class="fas fa-angle-right"></i> Konzept zum wohnen</a>
        <a href="/karriere"><i class="fas fa-angle-right"></i> Karriere</a>
        <a href="/kontakt" class="active"><i class="fas fa-angle-right"></i> Kontakt</a>
    </div>
    <div id="mobile-menu-footer">
        Impressum & Datenschutz<br>
        +49 221 16839880<br>
        E.klein@konzeptzumziel.de
    </div>
    <div id="mobile-menu-social">
        <a href="https://www.facebook.com/KONZEPTzumZIEL/" class="soc fb" target="_blank"></a>
            <a href="https://www.instagram.com/konzeptzumwohnen/" class="soc ig" target="_blank"></a>
    </div>
</div>

<?php get_footer(); ?>

