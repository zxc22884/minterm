var main = function() {
  $('.menu2').hide();
  $('.menu3').hide();
  $('#new1').click(function(){
    $('.menu3').animate({
      left: '22.5%',
      width: '22%'
    },2000);
    $('.menu2').animate({
      left: '22.5%',
      width: '22%'
    },2000);
    $('.menu').animate({
      left: '22.5%'
    },2000,'linear',function(){
      $('.menu2').show();
    $('#iframe1').load("./html/demo_html.html");//要改
    /*document.getElementById("iframe").innerHTML='<object type="type/html" data="demo_html.html" ></object>';*/
      $('.menu3').animate({
        left: '55.5%'
      },2000);
      $('.menu2').animate({
        left: '44.5%',
        width: '33%'
      },2000);
    });
  });

  $('#new2').click(function(){
    $('.menu3').animate({
      left: '22.5%',
      width: '22%'
    },2000);
    $('.menu2').animate({
      left: '22.5%',
      width: '22%'
    },2000);
    $('.menu').animate({
      left: '22.5%'
    },2000,'linear',function(){
      $('.menu2').hide();
      $('.menu3').hide();
      $('.menu3').animate({
        left: '11%'
      },2000);
      $('.menu2').animate({
        left: '11%',
      },2000);
      $('.menu').animate({
        left: '11%'
      },2000,'linear',function(){
        $('.menu2').show();
        $('#iframe1').load("./html/introuduce.html");//要改
      /*document.getElementById("iframe").innerHTML='<object type="type/html" data="demo_html.html" ></object>';*/
        $('.menu3').animate({
          left: '44%'
        },2000);
        $('.menu2').animate({
          left: '33%',
          width: '33%'
        },2000,function(){
          $('.menu3').show();
          $('#iframe2').load("./html/demo_html.html");
          $('.menu3').animate({
            left: '66%'
          },1500);
        });
      });
    });
  });

  $('#new3').click(function(){
    $('.menu3').animate({
      left: '22.5%',
      width: '22%'
    },2000);
    $('.menu2').animate({
      left: '22.5%',
      width: '22%'
    },2000);
    $('.menu').animate({
      left: '22.5%'
    },2000,'linear',function(){
      $('.menu2').hide();
      $('.menu3').hide();
      $('.menu3').animate({
        left: '11%'
      },2000);
      $('.menu2').animate({
        left: '11%',
      },2000);
      $('.menu').animate({
        left: '11%'
      },2000,'linear',function(){
        $('.menu2').show();
        $('#iframe1').load("./html/order.html");//要改
      /*document.getElementById("iframe").innerHTML='<object type="type/html" data="demo_html.html" ></object>';*/
        $('.menu3').animate({
          left: '44%'
        },2000);
        $('.menu2').animate({
          left: '33%',
          width: '33%'
        },2000,function(){
          $('.menu3').show();
          $('#iframe2').load("./html/demo_html.html");
          $('.menu3').animate({
            left: '66%'
          },1500);
        });
      });
    });
  });

  $('#new4').click(function(){
    $('.menu3').animate({
      left: '22.5%',
      width: '22%'
    },2000);
    $('.menu2').animate({
      left: '22.5%',
      width: '22%'
    },2000);
    $('.menu').animate({
      left: '22.5%'
    },2000,'linear',function(){
      $('.menu2').show();
    $('#iframe1').load("./html/demo_html.html");//要改
    /*document.getElementById("iframe").innerHTML='<object type="type/html" data="demo_html.html" ></object>';*/
      $('.menu3').animate({
        left: '55.5%'
      },2000);
      $('.menu2').animate({
        left: '44.5%',
        width: '33%'
      },2000);
    });
  });

  $('#new5').click(function(){
    $('.menu3').animate({
      left: '22.5%'
    },2000);
    $('.menu2').animate({
      left: '22.5%',
      width: '22%'
    },2000);
    $('.menu').animate({
      left: '22.5%'
    },2000,'linear',function(){
      $('.menu2').show();
    $('#iframe1').load("./html/test.html");//要改
    /*document.getElementById("iframe").innerHTML='<object type="type/html" data="demo_html.html" ></object>';*/
      $('.menu3').animate({
        left: '55.5%'
      },2000);
      $('.menu2').animate({
        left: '44.5%',
        width: '33%'
      },2000);
    });
  });

  $('#new6').click(function(){
    $('.menu3').animate({
      left: '22.5%',
      width: '22%'
    },2000);
    $('.menu2').animate({
      left: '22.5%',
      width: '22%'
    },2000);
    $('.menu').animate({
      left: '22.5%'
    },2000,'linear',function(){
      $('.menu2').show();
      $('#iframe1').load("./html/about_us.html");//要改
    /*document.getElementById("iframe").innerHTML='<object type="type/html" data="demo_html.html" ></object>';*/
      $('.menu3').animate({
        left: '55.5%'
      },2000);
      $('.menu2').animate({
        left: '44.5%',
        width: '33%'
      },2000);
    });
  });

  $('.logo').click(function(){
    $('.menu3').animate({
      left: '39%'
    },2000);
    $('.menu2').animate({
      left: '39%',
      width: '22%'
    },2000)
    $('.menu').animate({
      left: '39%'
    },2000,function(){
      $('.menu2').hide();
      $('.menu3').hide();
    })

  });
}

$(document).ready(main);
