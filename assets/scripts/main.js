$(function() {
  var $fixedNavBar = $('#fixed-nav-bar');

  // $('html, body').scrollTop($(document).height() - $(window).height());
  $('#title-name').css('visibility', 'hidden');
  $('#title-desc').css('visibility', 'hidden');
  $fixedNavBar.css('visibility', 'hidden');
  $fixedNavBar.find('ul').css('visibility', 'hidden');
  $fixedNavBar.find('li').css('visibility', 'hidden');
  $fixedNavBar.find('a').css('visibility', 'hidden');

  setTimeout(function () {
      $('#title-name').css('visibility', 'visible').hide().fadeIn();
  }, 200);

  setTimeout(function () {
      $('#title-desc').css('visibility', 'visible').hide().fadeIn();
  }, 350);

  setTimeout(function () {
      $fixedNavBar.css('visibility', 'visible').hide().fadeIn();
      $fixedNavBar.find('ul').css('visibility', 'visible').hide().fadeIn();
      $fixedNavBar.find('li').css('visibility', 'visible').hide().fadeIn();
      $fixedNavBar.find('a').css('visibility', 'visible').hide().fadeIn();
  }, 200);

  $(document).on('click', '.link', function (event) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 300);
  });

  $fixedNavBar.find('.link').click(function () {
      $fixedNavBar.find('.link').removeClass();
      $(this).addClass('active link');
  });

  $(document).ready(function(){
      $(window).scroll(function(e){
          var scr = $(window).scrollTop();
          $('.navbar').css('background-position', '0px -'+ scr+'px');
      });    
  });
});