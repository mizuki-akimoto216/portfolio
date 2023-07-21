$(document).ready(
    //Ripple
    $(function(){
      $('.top-cont').ripples({
        // resolution: 512,
        // dropRadius: 40,
        // perturbance: 4
      });

      //Hamburger
      $(".openbtn").click(function(){
        $(this).toggleClass('active');
        $("#g-nav").toggleClass('panelactive');
        $(".circle-bg").toggleClass('circleactive');
      })

      $("#g-nav a").click(function(){
        $(".openbtn").removeClass('active');
        $("#g-nav").removeClass('panelactive');
        $(".circle-bg").removeClass('circleactive');
      })

    function fadeAnime(){
        $('.fadeUpTrigger').each(function(){
            var elemPos = $(this).offset().top-10;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
                $(this).addClass('fadeUp');
            }
        });
    }

      $(window).scroll(function (){
        fadeAnime();
      });
    })
);