(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');




// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Open external links in new tabs/windows.
$("a[rel=external]").attr("target", "_blank");


// Global variables
var og_ga_account = "UA-239502-1";

var addthis_pub = "ra-4eade63c4ff64988";

var addthis_config = {
  "username": "",
  "ui_cobrand": "Osman Gormus",
  "data_track_clickback": true,
  "data_ga_tracker": og_ga_account
};

var og_addthis_layers = {
  "theme" : "transparent",
  "share" : {
    "position" : "right",
    "numPreferredServices" : 5,
    "services" : "linkedin,twitter,facebook,more",
    "offset": {
      "top" : "30%"
    }
  },
  "follow" : {
    "services" : [
      {
        "service" : "linkedin",
        "id" : "gormus"
      },
      {
        "service" : "twitter",
        "id" : "osmangormus"
      },
      {
        "service" : "facebook",
        "id" : "osman.gormus"
      }
    ],
    "mobile" : true,
    "desktop" : false
  }
};

ga('create', og_ga_account, 'gorm.us');
ga('require', 'linkid', 'linkid.js');
ga('send', 'pageview');

var p = /^http:/.test(location) ? 'http' : 'https';
document.write('<scr' + 'ipt src="' + p + '://s7.addthis.com/js/300/addthis_widget.js#pubid=' + addthis_pub + '"></scr' + 'ipt>');

document.write('<scr' + 'ipt>addthis.layers(og_addthis_layers);</scr' + 'ipt>');
