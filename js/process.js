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

  //2 bg변경
  $(function(){
    gsap.timeline({
        scrollTrigger:{
            trigger:'.concept',
            start:'0 0',
            end:'100% 80%',
            scrub:1,
            markers:false
        }
    })
    .to('.wrap', {background:'#ffa903', ease:'none', duration:5},0)
  });
  

  $(function(){
    gsap.timeline({
        scrollTrigger:{
            trigger:'.systerm',
            start:'0 0',
            end:'bottom 90%',
            scrub:1,
            markers:false
        }
    })
    .to('.wrap', {background:'#ffffff', ease:'none', duration:5},0)
    .to('header', {color:'#000', ease:'none', duration:5},0)
  });//02 end


  //03 brain
  $(function(){
    gsap.timeline({
      scrollTrigger:{
        trigger:'.brain',
        start:'20% 100%',
        end:'0% 40%',
        scrub:true,
        markers:false
      }
    })
    .to('.brain .title',{ opacity:'1', position:'fixed', left:'30%', bottom:'30%', ease:'none', duration:5},0)

    gsap.timeline({
        scrollTrigger:{
          trigger:'.brain',
          start:'80% 80%',
          end:'100% 100%',
          scrub:true,
          markers:false
        }
      })
      .to('.brain .title',{opacity:'0'},0)
}); //03 end

