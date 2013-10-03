/***********************************************************
 *
 * config.js
 *
 * Global settings 
 *
 * Global Constants are defined as variables named with uppercase letters.
 * Their values must not be changed by the application, even though it's not
 * technically restricted.
 *
 * This file is intentionally left unminified for easy access by the design guy.
 *
 * © S. Lempert 5 / 2013
 *
 ************************************************************/

// define 'namespace' DW
var DW = DW || {};

// paths
DW.TEST_URL = "http://dev2.dasselundwagner.de";
DW.LIVE_URL = "http://www.dasselundwagner.com";

// itunes links
DW.ITUNES_FAZ_IPHONE = "https://itunes.apple.com/de/app/f-a-z/id375948652?mt=8";
DW.ITUNES_FAZ_IPAD = "https://itunes.apple.com/de/app/f-a-z-zeitung/id416982402?mt=8";
DW.PORSCHE = "https://itunes.apple.com/ch/app/porsche-christophorus-magazin/id460906366?mt=8";

// language 
DW.LANGUAGE = "de"; // default
if (location.href.indexOf("/en/") >= 0) {
	DW.LANGUAGE = "en";
}

// size of central always visible content square
DW.SQUARE_SIZE = 640;

// minmal drag distance to cause a page change (px)
DW.DRAG_MIN_DIFF = 15;

// Animation after left or right was clicked
DW.MOVE_LEFT_RIGHT_EASING = "easeOutQuint";
DW.MOVE_LEFT_RIGHT_DURATION = 600;

// Animation after scrollstop, when the view adjusts its horizontal position
DW.SCROLL_STOP_EASING = "easeOutBack";
DW.SCROLL_STOP_DURATION = 0; // shouldn't be to long, because scrolling is locked on (< 500)

// minimal and maximal Srollspeed after clicking a menu item
DW.NAVIGATION_SPEED_MIN = 1000; // speed for shortest distance
DW.NAVIGATION_SPEED_MAX = 3000; // add value for longest distance

// Aspect Ratio of view background images (e.g. on start page)
DW.BACKGROUND_ASPECTRATIO = 1280 / 960;

// Minimal width of first menu level for touch devices, to avoid line breaks
DW.MENU_TOUCH_MINWIDTH = 160;

// Minimal width of second menu level, to avoid line breaks
DW.MENU_LEVEL2_MINWIDTH = 210;

// images which are preloaded for later use (see util)
DW.PRELOAD_IMAGES = [
	"../img/dw/social_twitter_on.png",
	"../img/dw/social_xing_on.png",
	"../img/dw/social_linkedin_on.png",
	"../img/dw/btn_menu_black.gif"
];

// sitemap
DW.MENU = [
	{'level':1 ,'labelDe':'START', 'labelEn':'START', 'view':'home'},
	{'level':1 ,'labelDe':'PROJEKTE', 'labelEn':'PROJECTS', 'view':'projekte-0'},
	{'level':2 ,'labelDe':'FAZ.NET', 'labelEn':'FAZ.NET', 'view':'projekte-faznet'},
	{'level':2 ,'labelDe':'F.A.Z. IPHONE-APP', 'labelEn':'F.A.Z. IPHONE-APP', 'view':'projekte-faz-iphone'},
	{'level':2 ,'labelDe':'F.A.Z. IPAD-APP', 'labelEn':'F.A.Z. IPAD-APP', 'view':'projekte-faz-ipad'},
	{'level':2 ,'labelDe':'PORSCHE IPAD-APP', 'labelEn':'PORSCHE IPAD-APP', 'view':'projekte-christophorus'},
	{'level':2 ,'labelDe':'KONZEPTLICHT', 'labelEn':'KONZEPTLICHT', 'view':'projekte-konzeptlicht'},
	{'level':1 ,'labelDe':'PROFIL', 'labelEn':'PROFILE', 'view':'profil-0'},
	{'level':2 ,'labelDe':'01', 'labelEn':'01', 'view':'profil-1'},
	{'level':2 ,'labelDe':'02', 'labelEn':'02', 'view':'profil-2'},
	{'level':2 ,'labelDe':'03', 'labelEn':'03', 'view':'profil-3'},
	{'level':1 ,'labelDe':'KÖPFE', 'labelEn':'ABOUT US', 'view':'koepfe-0'},
	{'level':2 ,'labelDe':'PAUL WAGNER', 'labelEn':'PAUL WAGNER', 'view':'wagner'},
	{'level':2 ,'labelDe':'REINHARD DASSEL', 'labelEn':'REINHARD DASSEL', 'view':'dassel'},
	{'level':1 ,'labelDe':'KONTAKT', 'labelEn':'CONTACT', 'view':'kontakt'}
];