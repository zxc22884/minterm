var main=function(){
  $('.active_next').click(function() {
  var currentSlide = $('.active_slide');
  var nextSlide = currentSlide.next();
  if(nextSlide.length === 0){
    nextSlide = $('.slide').first();
  }
  currentSlide.fadeOut('active_slide').removeClass('active_slide');
  nextSlide.fadeIn('active_slide').addClass('active_slide');
});
$('.active_prev').click(function() {
var currentSlide = $('.active_slide');
var nextSlide = currentSlide.prev();
if(nextSlide.length === 0){
  nextSlide = $('.slide').last();
}
currentSlide.fadeOut('active_slide').removeClass('active_slide');
nextSlide.fadeIn('active_slide').addClass('active_slide');
});
};
$(document).ready(main);
