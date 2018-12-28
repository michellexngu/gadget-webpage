(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready

  $(document).ready(function(){
    $('.slider').slider();
  });
  $('.slider').slider('start');
  $('.slider').slider('methodName', paramName);
})(jQuery); // end of jQuery name space

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, options); //Die variabel wird nie aufgerufen, wie muss ich sie bei jQuery aufrufen?
});

var instance = M.Slider.getInstance(elem);
instance.start();
instance.next();