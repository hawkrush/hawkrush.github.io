jQuery(document).ready(function(){
    var jsFolder = "https://amazingcarousel.com/wp-content/uploads/amazingcarousel/1/carouselengine/";
    if ( typeof html5Lightbox === "undefined" )
    {
        html5Lightbox = jQuery(".html5lightbox").html5lightbox({
            jsfolder:jsFolder,
            barheight:64,
            showtitle:true,
            showdescription:false,
            shownavigation:false,
            thumbwidth:80,
            thumbheight:60,
            thumbtopmargin:12,
            thumbbottommargin:8,
            titlebottomcss:'{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}',
            descriptionbottomcss:'{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}'
        });
    }
    jQuery("#amazingcarousel-1").amazingcarousel({
        jsfolder:jsFolder,
        width:240,
        height:180,
        arrowhideonmouseleave:1000,
        itembottomshadowimagetop:100,
        donotcrop:false,
        navheight:24,
        random:false,
        showhoveroverlay:true,
        height:180,
        arrowheight:32,
        itembackgroundimagewidth:100,
        skin:"Stylish",
        responsive:true,
        bottomshadowimage:"bottomshadow-110-100-5.png",
        navstyle:"bullets",
        enabletouchswipe:false,
        backgroundimagetop:-40,
        arrowstyle:"always",
        bottomshadowimagetop:100,
        transitionduration:1000,
        lightboxshowtitle:true,
        hoveroverlayimage:"hoveroverlay-64-64-4.png",
        itembottomshadowimage:"itembottomshadow-100-100-5.png",
        lightboxshowdescription:false,
        width:240,
        showitembottomshadow:false,
        showhoveroverlayalways:false,
        navimage:"bullet-24-24-0.png",
        lightboxtitlebottomcss:"{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",
        lightboxshownavigation:false,
        showitembackgroundimage:false,
        itembackgroundimage:"",
        backgroundimagewidth:110,
        playvideoimagepos:"center",
        circular:true,
        arrowimage:"arrows-32-32-0.png",
        scrollitems:1,
        showbottomshadow:true,
        lightboxdescriptionbottomcss:"{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",
        supportiframe:false,
        transitioneasing:"easeOutExpo",
        itembackgroundimagetop:0,
        showbackgroundimage:false,
        lightboxbarheight:64,
        showplayvideo:true,
        spacing:8,
        lightboxthumbwidth:80,
        scrollmode:"page",
        navdirection:"horizontal",
        itembottomshadowimagewidth:100,
        backgroundimage:"",
        lightboxthumbtopmargin:12,
        arrowwidth:32,
        transparent:false,
        navmode:"page",
        lightboxthumbbottommargin:8,
        interval:3000,
        lightboxthumbheight:60,
        navspacing:4,
        pauseonmouseover:true,
        imagefillcolor:"FFFFFF",
        playvideoimage:"playvideo-64-64-0.png",
        visibleitems:3,
        navswitchonmouseover:false,
        direction:"horizontal",
        usescreenquery:false,
        bottomshadowimagewidth:110,
        screenquery:{
	mobile: {
		screenwidth: 600,
		visibleitems: 1
	}
},
        navwidth:24,
        loop:0,
        autoplay:false
    });
});