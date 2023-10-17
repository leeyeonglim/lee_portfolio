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

// 02.intro
$(function(){
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    '(min-width: 1200px)':function(){
  gsap.timeline({
    scrollTrigger:{
      trigger:'.intro .videoBox',
      start:'0% 0%',
      end:'100%',
      scrub:1,
      pin:true,
      markers:false
    }
  })
  
  .fromTo('.intro .videoBox video', {transform:'rotateY(-40deg) rotateX(50deg)', width:'50%', opacity:'0.2'},{transform:'rotateY(0deg) rotateX(0deg)', width:'100%', opacity:'1'},0)
    }//1200px end
  })//responsived.end
});//02 end


//03 bg 변경
$(function(){
  gsap.timeline({
    scrollTrigger:{
      trigger: '.skill',
      start:'100% 100%',
      end:'100% 100%',
      scrub:1,
      markers:false
    }
  })
  .to('header', {color:'#fff', ease:'none', duration:5},0)
});

  $(function(){
    gsap.timeline({
      scrollTrigger:{
        trigger: '.hobby',
        start:'100% 100%',
        end:'100% 100%',
        scrub:1,
        markers:false
      }
    })
  .to('.wrap', {background:'#000', ease:'none', duration:5},0)
}); //03 end

//04 section up
$(function(){
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.matchMedia({
    '(min-width: 1200px)':function(){
  gsap.utils.toArray('section').forEach((section, i) => {
    ScrollTrigger.create({
      trigger: '.me',
      start:'top top',
      pin: true,
      pinSpacing: false,
      markers: false
    })
  })

  ScrollTrigger.create({
    snap: 1 / (section.length - 1) // '/'은 나누기
  })

    }//1200px end
  })//responsived.end
});//04 end

//05.history
$(function(){
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({
    '(min-width: 1200px)':function(){
      let inner = gsap.utils.toArray('.history ul li')

      let scrollTween = gsap.to(inner, {
        xPercent: -150 * (inner.length-1),
        ease: 'none',
        scrollTrigger:{
          trigger: '.history',
          pin:true,
          scrub: 1,
          start:'center center',
          end: '200%',
          markers: false
        }
      })
    }//1200px end
  })//responsived.end
});//05 end

//06.skill
$(function(){
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.matchMedia({
    '(min-width: 1200px)':function(){
          let inner = gsap.utils.toArray('.skill ul li')

          let scrollTween = gsap.to(inner, {
            xPercent: -150 * (inner.length-1),
            ease: 'none',
            scrollTrigger:{
              trigger: '.skill',
              pin:true,
              scrub: 1,
              start:'center center',
              end: '200%',
              markers: false
            }
          });

          gsap.utils.toArray('.skill .inner ul li').forEach(function(li){

            gsap.timeline({
              scrollTrigger: {
                trigger: li,
                containerAnimation: scrollTween,
                start:'center right',
                end: 'center center',
                scrub: true,
                markers:false
              }
            })
            .fromTo(li, {y:'200px', 'ease':'none', 'duration':'1'},{y:'0px', 'ease':'none', 'duration':'1'},0)

          });
        }//1200px end
      })//responsived.end
    });//06 end






//07.hobby
$(function(){

  ScrollTrigger.matchMedia({
    '(min-width: 1200px)':function(){
  gsap.timeline({
    scrollTrigger:{
      trigger:'.hobby',
      start:'30% 100%',
      end:'0% 100%',
      scrub:true,
      markers:false
    }
  })
  .fromTo('.hobby .titleBox', {x:'-150%'},{x:'0%', ease:'none',duration:5},0)
  
  gsap.timeline({
    scrollTrigger:{
      trigger:'.hobby .inner ul',
      start:'0% 100%',
      end:'0% 100%',
      scrub:1,
      markers:false
      }
  })
  .to('.hobby .titleBox',{position:'fixed', left:'0%', top:'0%', ease:'none', duration:5},0)
  .fromTo('.hobby .inner ul', {margin:'0 auto'}, { margin:'100vh auto 0', position:'relative', zIndex:'10', duration:5},0)


  gsap.timeline({
    scrollTrigger:{
      trigger:'.hobby .inner ul',
      start:'50% 50%',
      end:'60% 0',
      scrub:true,
      markers:false
    }
  })
  .to('.hobby .title', {opacity:'0'},0)
    }//1200px end
  })//responsived.end
});//07 end

// gotop
$(function(){
  $(".goTop").on("click", function(){
    var top = $('body').offset().top;
    // body의 top의 위치값을 변수 top한테 저장(대입)
    // offset() 함수는 원하는 선택자의 위치값을 top, left 형식을 반환하여 줍니다.
    $('html, body').animate({ scrollTop : (top)}, 800);
  });
});


