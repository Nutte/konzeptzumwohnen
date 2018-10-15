<?php

/*
Template Name: Karriere
*/

?>

<?php get_header();?>
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
        <a href="/kontakt"><i class="fas fa-angle-right"></i>Anfrage</a>
	<a class="phone" href="tel:+4922116839880">+49 221 16839880</a>
    </div>
</header>

<div id="inner-top-block" class="karriere" style="background: url(<?php bloginfo('template_directory')?>/img/career_bg_new.png) no-repeat 50% 25%; background-size: cover;">
    <div class="inner-top-dark"></div>
    <div class="inner-top-angle"></div>

    <div class="inner-title"><span>KARRIERE</span></div>
</div>

<div class="inner-content">
    <div class="content075">
        <div class="inner-content-title"><?php echo get_post_meta($post->ID, 'karriere_text_title', true); ?></div>
        <b><?php  the_post(); ?>
            <?php  the_content(); ?></b><br>
        <img src="<?php bloginfo('template_directory')?>/img/career_img.png" class="desctop-only" alt="">
        <img src="<?php bloginfo('template_directory')?>/img/career_img_m.png" width="100%" class="mobile-only" alt="">
        <h3><?php echo get_post_meta($post->ID, 'karriere_more_title', true); ?></h3>
        <p><img src="<?php bloginfo('template_directory')?>/img/bul.png" width="9" alt="" style="padding-right: 3px;vertical-align: middle"> Munich<br><br></p>

        <?php echo get_post_meta($post->ID, 'karriere_more_text', true); ?>
        <div class="show-full-content">
            <span>Mehr Info</span>
        </div>
    </div>

    	<div id="career-form">
			<h3>BITTE BEACHTEN SIE</h3>
        Fügen Sie Ihre Bewerbungsunterlagen (z.B. Anschreiben und Lebenslauf) als Dateianhang hinzu. Sie können bis zu 3 Dateien senden. Erlaubte Dateiformate sind zip-Archive, PDF-, Text- und Bilddateien.<br><br><br>
		<?php echo do_shortcode( '[contact-form-7 id="144" title="cf7 karriere"]' ); ?>
	</div>
        
	<form action="#" id="career-form">
     <!--  <input type="text" placeholder="Name">
       	<input type="text" placeholder="E-mail">
        <textarea name="" id="" cols="30" rows="10" placeholder="Ihre Anfrage"></textarea>
        <div class="upload-block">
            <a href="#"><img src="<?php bloginfo('template_directory')?>/img/uplaod_icon.png" width="18" alt="" style="padding-right: 10px; vertical-align: middle">Dateien durchsuchen</a><br>
            Maximale Dateigröße: 5.00 MB
        </div>
		<a href="#"><img src="<?php bloginfo('template_directory')?>/img/uplaod_icon.png" width="18" alt="" style="padding-right: 10px; vertical-align: middle">Dateien durchsuchen</a><br>
            Maximale Dateigröße: 5.00 MB
        <div id="send-btn"><span>ABsenden</span></div> -->

		
    </form>
	
</div>
<div id="mobile-menu">
    <div id="close-menu"></div>
    <div id="mobile-menu-items">
        <a href="/"><i class="fas fa-angle-right"></i> Home</a>
        <a href="/uber-uns"><i class="fas fa-angle-right"></i> Uber uns</a>
        <a href="/konzept-zum-ziel"><i class="fas fa-angle-right"></i> Immobilien-Sofortkredit</a>
        <a href="/konzept-zum-wohnen"><i class="fas fa-angle-right"></i> Konzept zum wohnen</a>
        <a href="/karriere" class="active"><i class="fas fa-angle-right"></i> Karriere</a>
        <a href="/kontakt"><i class="fas fa-angle-right"></i> Kontakt</a>
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

