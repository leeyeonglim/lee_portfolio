
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

//02 header color 변경
$(function(){
  gsap.timeline({
    scrollTrigger:{
      trigger: '.ncs',
      start:'0% 0%',
      end:'0% 0%',
      scrub:1,
      markers:false
    }
  })
  .to('header', {color:'#000', ease:'none', duration:5},0)
}); //02 end

//03 header color 변경
$(function(){
  gsap.timeline({
    scrollTrigger:{
      trigger: '.gallery',
      start:'0% 0%',
      end:'0% 0%',
      scrub:1,
      markers:false
    }
  })
  .to('header', {color:'#fff', ease:'none', duration:5},0)
}); //03 end



// 04 ncs
$(window).on('scroll resize', function(){
  var scrollPos = 0;
  scrollPos = $(document).scrollTop();
  fix();

  function fix(){
    if (scrollPos > 1400 && $(window).width() >= 1200) {
      $('.ncs ul .right').addClass('on');
    } 
    else {
      $('.ncs ul .right').removeClass('on');
    }
    if(scrollPos > 2600 && $(window).width() >= 1200) {$('.ncs ul .right').removeClass('on');}
  }
}); //04 end




//05.gallery
$(function(){
  gsap.registerPlugin(ScrollTrigger);

  let list = gsap.utils.toArray('.gallery .right li')

  let scrollTween = gsap.to(list, {
    xPercent: -100 * (list.length-1),
    ease:'none',
    scrollTrigger:{
      trigger:'.gallery',
      pin:true,
      scrub:1,
      start:'center center',
      end:'200%',
      markers:false
    }
  })
}); //05. end

//06 bg
$(function(){
  gsap.timeline({
    scrollTrigger:{
      trigger:'.gallery',
      start:'0 10%',
      end:'20% 20%',
      scrub:1,
      markers:false
    }
  })
  .to('.wrap', {background:'#000', ease:'none', duration:5},0)
}); //06 end

//07 study
$(function(){
  gsap.timeline({
    scrollTrigger:{
      trigger:'.study .inner',
      start:'20% 100%',
      end:'0% 40%',
      scrub:true,
      markers:false
    }
  })
  .to('.study .titleBox',{position:'fixed', left:'50%', top:'50%', ease:'none', duration:5},0)

  gsap.timeline({
    scrollTrigger:{
      trigger:'.study .inner',
      start:'50% 50%',
      end:'40% 0',
      scrub:true,
      markers:false
    }
  })
  .to('.study .titleBox', {opacity:'0'},0)
}); //07 end






// $(function(){
//   ScrollTrigger.create({
//     trigger:'.gallery',
//     start:'top 90%',
//     end:'bottom bottom',
//     toggleClass:{targets:'.gallery .title', className:'active'},
//     markers:false
//   })
// });

// $(function(){

//   gsap.utils.toArray('.dataText').forEach(function(text){ 
//     let num = text.getAttribute('data-text')
//     let counter = document.querySelector('.gallery .title')

//     ScrollTrigger.create({
//       trigger:text,
//       start:'0 0',
//       end:'100% 50%',
//       scrub: true,
//       onEnter: self => counter.innerHTML = num,
//       onEnterBack: self => counter.innerHTML = num,
//       markers:true
//       })
//     })
// });
