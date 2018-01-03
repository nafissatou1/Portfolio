$(document).ready(function(){
$('.navbar-toggler-icon').click(function(){
$('li.nav-item.brand').hide();
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
$('div#cigal p.title').css({"padding-top": '2%'});
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

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    // Do something
    if (scroll >= 800){
    $('nav.navbar').css({"background-color": "rgba(59, 61, 57, 0.4)"});
    }
});


   var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height}, 500);
  
  return false;
});

$('input').keyup(function(){
('body').find()
});

$( "button[type='submit']" ).click(function(){
    //alert('click');
    //alert( $('#search').val() );
    //findString('300');
    findString( $('#search').val() );
    //window.find('300');
    //window.find( $('#search').val() );
    //alert(document.getElementById('search').value);
    //window.find( document.getElementById('search').value );
    return false;
});


var TRange=null;

function findString (str) {

 if (parseInt(navigator.appVersion)<4) return;
 var strFound;
 if (window.find) {

  // console.log('Browser supports "window.find()" method');
  // CODE FOR BROWSERS THAT SUPPORT window.find

  strFound=self.find(str);
  if (!strFound) {
   strFound=self.find(str,0,1);
   while (self.find(str,0,1)) continue;
  }
 }
 else if (navigator.appName.indexOf("Microsoft")!=-1) {

  // EXPLORER-SPECIFIC CODE

  if (TRange!=null) {
   TRange.collapse(false);
   strFound=TRange.findText(str);
   if (strFound) TRange.select();
  }
  if (TRange==null || strFound==0) {
   TRange=self.document.body.createTextRange();
   strFound=TRange.findText(str);
   if (strFound) TRange.select();
  }
 }
 else if (navigator.appName=="Opera") {
  alert ("Opera browsers not supported, sorry...")
  return;
 }
 if (!strFound) alert ("String '"+str+"' not found!")
 return;
}

});

