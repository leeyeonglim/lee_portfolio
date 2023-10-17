//a 
$(document).on('click', 'a[href="#"]', function(e){
  e.preventDefault();
});

//splitting
$(function(){
  Splitting();
});

// animate
$(function(){
  $('.animate').scrolla({
      mobile: true,
      once:false
  });
});

//01 header
$(function(){
  var prevScrollTop = 0;
  document.addEventListener('scroll', function(){
    var nowScrollTop = $(window).scrollTop()

    if(nowScrollTop > prevScrollTop){
      $('header').addClass('active');
    } else{
      $('header').removeClass('active');
    }
    prevScrollTop = nowScrollTop;
  })
}); //01 end


//02 aboutme
$(window).on('scroll resize', function(){
  var scrollPos = 0;
  scrollPos = $(document).scrollTop();
  fix();
  
  function fix(){
  if(scrollPos > 1160 && $(window).width() >= 1200) {
  $('.left .mainImg').addClass('on');
  }
  else {
  $('.left .mainImg').removeClass('on');
  }
  if(scrollPos > 3180 && $(window).width() >= 1200) {$('.left .mainImg').removeClass('on');}
  }
  });//02 end


//03 slogun title
$(function(){
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    '(min-width: 1024px)':function(){
      let inner = gsap.utils.toArray('.slogun .inner li')

      let scrollTween = gsap.to(inner, {
        xPercent: -100 * (inner.length-1),
        ease: 'none',
        scrollTrigger:{
          trigger: '.slogun',
          pin :true,
          scrub: 1,
          start: 'center center',
          end: '390%',
          markers: false,
        }
     })
    }//1024px end
  })//responsived.end
});//03 end


//04 bg 변경
$(function(){
  gsap.timeline({
    scrollTrigger:{
      trigger:'.aboutTxt',
      start:'0% 0%',
      end:'100% 80%',
      scrub:1,
      markers:false
    }
  })
  .to('.wrap', {background:'#000', ease:'none', duration:5},0)
});//04 end


// 05.workList 


// title1
$(function(){
  
  ScrollTrigger.matchMedia({
    '(min-width: 1024px)':function(){

        gsap.timeline({
          scrollTrigger:{
            trigger:'.work',
            start:'0% 100%',
            end:'0% 20%',
            scrub:1,
            markers:false
          }
        })
        .fromTo('.work .subTitle', {x:'-150%'},{x:'0%', ease:'none',duration:5},0)

        gsap.timeline({
          scrollTrigger:{
            trigger:'.workList',
            start:'0% 100%',
            end:'0% 100%',
            scrub:1,
            markers:true
            }
        })
        .to('.work .subTitle',{position:'fixed', left:'0', top:'0', ease:'none', duration:5},0)
        .fromTo('.workList', {margin:'0 auto'}, {margin:'100vh auto 0', position:'relative', duration:5},0)

        gsap.timeline({
          scrollTrigger:{
            trigger:'.workList',
            start:'20% 20%',
            end:'20% 0',
            scrub:1,
            markers:false
          }
        })
        .to('.work .workTitle1', {opacity:'0'},0)

        // title2
        gsap.timeline({
          scrollTrigger:{
            trigger:'.workList',
            start:'20% 20%',
            end:'0% 100%',
            scrub:1,
            markers:false
          }
        })
        .to('.work .workTitle2', {opacity:'1', ease:'none', duration:5 },0)

        gsap.timeline({
          scrollTrigger:{
            trigger:'.workList',
            start:'80% 50%',
            end:'80% 0',
            scrub:1,
            markers:false
          }
        })
        .to('.work .subTitle', {x:'200%', ease:'none', duraition:5},0)
      }//1024px end
    })//responsived.end
});//05 end


// 06 ncs
$(function(){
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    '(min-width: 1024px)':function(){

      let list = gsap.utils.toArray('.ncs ul li')

      let scrollTween = gsap.to(list, {
        xPercent: -120 * (list.length-1),
        ease:'none',
        scrollTrigger:{
          trigger:'.ncs',
          pin:true,
          scrub: 1,
          start:'center center',
          end: '300%',
          markers: false
        }
      })
    }//1024px end
  })//responsived.end
});//06 end

//07 mockup
$(function(){
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    '(min-width: 1024px)':function(){
        let list = gsap.utils.toArray('.mockUp .upBox .swiper-slide ul li')

        let scrollTween = gsap.to(list, {
          xPercent: -10 * (list.length-1),
          ease:'none',
          scrollTrigger:{
            trigger:'.mockUp',
            pin:true,
            scrub: 1,
            start:'center center',
            end: '100%',
            markers: false
          }
        })
      }//1024px end
    })//responsived.end
});//07 end



//scrolldown
$(function(){
  $(".scroll").on("click", function(){
    var scrollBtn = $('#scroll').offset().top;
    $("html, body").animate({scrollTop: (scrollBtn)}, 500);
  });
});

// gotop
$(function(){
  $(".goTop").on("click", function(){
    var top = $('body').offset().top;
    // body의 top의 위치값을 변수 top한테 저장(대입)
    // offset() 함수는 원하는 선택자의 위치값을 top, left 형식을 반환하여 줍니다.
    $('html, body').animate({ scrollTop : (top)}, 800);
  });
});
