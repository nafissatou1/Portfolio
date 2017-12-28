$(document).ready(function(){

$('i.fa.fa-angle-down').hover(function(){
	$('div.me').show();
	$('div.text-an').hide();
	$('button.disc').show();
	$('i.fa.fa-angle-down').hide();
});
$('div.wrap').mouseout(function(){
	$('div.me').hide();
	$('div.text-an').show();
	$('button.disc').hide();
	$('i.fa.fa-angle-down').show();

});

$('i.fa.fa-search').mouseover(function(){
	$('form.search').toggle(1000);
});

$('div#cigal').mouseover(function(){
$('div#cigal').removeClass("animate", 1000, "easeInBack");
$('div#cigal p.no').hide();
$('div.cigal-title').show();
$('div#cigal p.title').css({"padding-top": '20%'});
$('div#cigal p').css({"color": '#fff'});
});
$('div#cigal').mouseout(function(){
$('div#cigal').addClass("animate", 1000, "easeInBack");
$('div#cigal p.no').show();
$('div#cigal p.title').css({"padding-top": '5%'});
$('div#cigal p').css({"color": '#e0e0e2'});
});

$('div#nc').mouseover(function(){
$('div#nc').removeClass("animate", 1000, "easeInBack");
$('div#nc p.no').hide();
$('div.nc-title').show();
$('div#nc p.title').css({"padding-top": '15%'});
$('div#nc p').css({"color": '#c6c4c2'});
});
$('div#nc').mouseout(function(){
$('div#nc').addClass("animate", 1000, "easeInBack");
$('div#nc p.no').show();
$('div#nc p.title').css({"padding-top": '5%'});
$('div#nc p').css({"color": '#e0e0e2'});
});
$('i.fa').mouseover(function(){
$('i.fa').css({"filter": "blur(0.5px) drop-shadow(7px 7px 7px #878784)"});
});
$('i.fa').mouseleave(function(){
$('i.fa').css({"filter": "none"});
});
});

