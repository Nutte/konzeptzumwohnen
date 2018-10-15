<?php

/*
Template Name: Uber uns
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
	<a href="/uber-uns" class="active"><i class="fas fa-angle-right"></i>Über uns</a>
        <a href="/kontakt"><i class="fas fa-angle-right"></i>Anfrage</a>
	<a class="phone" href="tel:+4922116839880">+49 221 16839880</a>
    </div>
</header>
<div id="inner-top-block" class="uber" style="background: url(<?php bloginfo('template_directory')?>/img/uber_bg.png) no-repeat 50% 50%; background-size: cover;">
    <div class="inner-top-dark"></div>
    <div class="inner-top-angle"></div>

    <div class="inner-title"><span>Über uns</span></div>
</div>

<div class="inner-content">
    <div class="uber-logo"><img src="<?php bloginfo('template_directory')?>/img/uber_logo.png" alt="" width="262"></div>

    <div class="uber-icons">
        <div class="uber-icon">
            <img src="<?php bloginfo('template_directory')?>/img/uber_icon1.png" alt="" width="100"><br>
            <span>Junges, dynamisches,<br>energiegeladenes<br>Team</span>
        </div>
        <div class="uber-icon">
            <img src="<?php bloginfo('template_directory')?>/img/uber_icon2.png" alt="" width="100"><br>
            <span>10 Jahre Erfahrung in der<br> Immobilienbranche</span>
        </div>
        <div class="uber-icon">
            <img src="<?php bloginfo('template_directory')?>/img/uber_icon3.png" alt="" width="100"><br>
            <span>5 Jahre <br/>Unternehmensgeschichte</span>
        </div>
        <div class="uber-icon">
            <!--<img src="<?php bloginfo('template_directory')?>/img/uber_icon4.png" alt="" width="100"><br>
            <span>Ziel: Wachstumschampion</span>-->
        </div>
        <div class="uber-icon">
            <img src="<?php bloginfo('template_directory')?>/img/uber_icon5.png" alt="" width="100"><br>
            <span>Kreativ, chancenergreifend, offen<br> für Neues</span>
        </div>
    </div>
</div>
    <!--<div style="display: none;">
        <?php echo do_shortcode('[metaslider id="82"]'); ?>
    </div>

    <div id="inner-gallery" class="skew">
        <div class="container">
            <div class="inner-gallery-items">
                <div class="inner-gallery-items-line">
                </div>
            </div>
            <div class="gallery-items-prev disable"></div>
            <div class="gallery-items-next"></div>
        </div>
    </div>-->
<div style="margin-top: -140px;">
<div style="display: none;">
        <?php echo do_shortcode('[metaslider id="66"]'); ?>
    </div>

	<div id="home-team-items">
        <div class="items"></div>
        <div id="team-prev"></div>
        <div id="team-next"></div>
    </div>
    <div id="team-name" class="uber-page" style="top: auto;">
    </div>
</div>
<div class="inner-content uber-page" style="margin-top: 140px; min-height: auto;">
    <?php  the_post(); ?>
<div class="new-inner-content">
<ul>
<li>	Über 1300 Wohneinheiten</li>	
<li>	 Immobilienvermögen über 100.000.000 €</li>
<li>	Zusammenarbeit mit über 250 Bausparkassen</li>
</ul>
</div>
    <?php  the_content(); ?>

</div>
<div id="mobile-menu">
    <div id="close-menu"></div>
    <div id="mobile-menu-items">
        <a href="/"><i class="fas fa-angle-right"></i> Home</a>
        <a href="/uber-uns" class="active"><i class="fas fa-angle-right"></i> Uber uns</a>
        <a href="/konzept-zum-ziel"><i class="fas fa-angle-right"></i> Immobilien-Sofortkredit</a>
        <a href="/konzept-zum-wohnen"><i class="fas fa-angle-right"></i> Konzept zum wohnen</a>
        <a href="/karriere"><i class="fas fa-angle-right"></i> Karriere</a>
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

