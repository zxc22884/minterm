var main = function() {
  $('.menu2').hide();
  $('.menu3').hide();
  $('.test').click(function(){
    $('.menu3').animate({
      left: '11%'
    },2000);
    $('.menu2').animate({
      left: '11%',
      width: '22%'
    },2000);
    $('.menu').animate({
      left: '11%'
    },2000,'linear',function(){
      $('.menu2').show();
    $('#iframe').load("./demo_html.html",function(data){ //初始將a.html include div#iframe

    });
    /*document.getElementById("iframe").innerHTML='<object type="type/html" data="demo_html.html" ></object>';*/
      $('.menu3').animate({
        left: '44%'
      },2000);
      $('.menu2').animate({
        left: '33%',
        width: '33%'
      },2000,function(){
        $('.menu3').show();
        $('.menu3').animate({
          left: '66%'
        },1500);
      });
    });
  });
}

$(document).ready(main);
