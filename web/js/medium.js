var main = function() {
  $('#o_res1').click(function(){
    $('.menu3').animate({
      left : '44.5%'
    },2000,function(){
      $('#iframe2').load("./html/child_order_html/res1.html");
      $('.menu3').animate({
        left : '66.5%'
      },2000);
    });
  });
  $('#o_res2').click(function(){
    $('.menu3').animate({
      left : '44.5%'
    },2000,function(){
      $('#iframe2').load("./html/child_order_html/res2.html");
      $('.menu3').animate({
        left : '66.5%'
      },2000);
    });
  });
  $('#o_res3').click(function(){
    $('.menu3').animate({
      left : '44.5%'
    },2000,function(){
      $('#iframe2').load("./html/child_order_html/res3.html");
      $('.menu3').animate({
        left : '66.5%'
      },2000);
    });
  });
}

$(document).ready(main);
