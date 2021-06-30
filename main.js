$(document).ready(function()
 {
    $("#navigate-profile").click(function() {
      $('html, body').animate({
        scrollTop: $("#showcase").offset().top
    }, 1000);
    });
    $("#navigate-about").click(function() {
      $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
    });
    $("#navigate-skill").click(function() {
      $('html, body').animate({
          scrollTop: $("#skill").offset().top
      }, 1000);
    });
    $("#navigate-work").click(function() {
    $('html, body').animate({
        scrollTop: $("#work").offset().top
    }, 1000);
    });
    $("#navigate-contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
    });
  
    $(".fa-bars").click(function(){
      $(".slide-menu").removeClass("hide-menu");
      $(".fa-bars").removeClass("opacity-one");
    });
    $(".fa-times").click(function(){
      $(".slide-menu").addClass("hide-menu");
      $(".fa-bars").addClass("opacity-one");
    });
   
 });