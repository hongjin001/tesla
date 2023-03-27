$(function(){
    



    $('.sc-visual .join-link').click(function(e){
        e.preventDefault();

        target = $('.sc-journey').offset().top;

        window.scrollTo({top:target,behavior:'smooth'})
    })





    $(window).mousemove(function(e){
        x = e.clientX;
        y = e.clientY;

        gsap.to('.cursor',{
            x:x,
            y:y,
            // duration:0,
        })
    })



    $('.btn-menu').click(function(){
        $('.side-nav, .dimmed, .btn-menu').toggleClass('active')
        
    })

    $('.dimmed').click(function(){
        $('.side-nav, .dimmed, .btn-menu').removeClass('active')
    })


    lastScroll = 0;


    $(window).scroll(function(){
        curr = $(this).scrollTop();
        journey = $('.sc-journey').offset().top;

        if (curr >= journey) {
            stopVideo();
        }
        
        
        if(curr > lastScroll){
            $('.car-move img').removeClass('active')
        }else{
            $('.car-move img').addClass('active')
        }

        lastScroll = curr
    })



   //비디오 정지//

    function stopVideo(){
        setTimeout(() => {
            $('.sc-journey video').get(0).pause();
        }, 2500);
    }




 
    // gsap.to('.car-move',{
    //     scrollTrigger:{
    //         trigger:".car-content",
    //         start:"top bottom",
    //         end:"bottom top",
    //         scrub:1,
    //         // markers:true,


    //     },
    //     xPercent:-200
    // })


   
      ScrollTrigger.matchMedia({
        // large
        "(min-width: 1025px)": function() {
            gsap.to('.car-move',{
                scrollTrigger:{
                    trigger:".car-content",
                    start:"top bottom",
                    end:"bottom top",
                    scrub:1,
                    // markers:true,
        
        
                },
                xPercent:-200
            })
        },
        // medium
        "(min-width: 768px) and (max-width: 1024px)": function() {
            gsap.to('.car-move',{
                scrollTrigger:{
                    trigger:".car-content",
                    start:"top bottom",
                    end:"bottom top",
                    scrub:1,
                    // markers:true,
        
        
                },
                xPercent:-100
            })
        },
      });


    gsap.set('[data-fadeUp]',{opacity:0,y:100})
    $('[data-fadeUp]').each(function(i,el){
   
     gsap.to(el,{
      scrollTrigger:{
         trigger:el,
         start:"top 80%", //트리거시작지점, 윈도우시작지점 둘이 만나면 시작
         // end:"bottom 10%",//트리거끝지점, 윈도우시작지점 둘이 만나면 시작
         end:"bottom 70%",
         // markers:true,
         // scrub:5,
         
      },
   
      opacity:1,
      y:0
     })
})



    
    



    
    $('.header .language').click(function(){
        $('.header .sub-list').toggle()
        
    })

    $('.header .sub-item').hover(function(){
        $(this).addClass('active')
    },function(){
        $(this).removeClass('active')
    })

    $('.header .side-item a').hover(function(){
        $(this).addClass('active')
    },function(){
        $(this).removeClass('active')
    })


    $('.header .btn-menu i.bar1').click(function(){
        $(this).addClass('active')
    })

    




})

// benefits//




var swiper = new Swiper(".benefits-Swiper", {
    slidesPerView: 'auto',
    loop: true,
    centeredSlides:true,
    spaceBetween: 0,
    speed:1500,
});




// values //

var swiper = new Swiper(".values-Swiper", {
    slidesPerView: 'auto',
    spaceBetween: 40,
    
    
    
});

// employees//
var swiper = new Swiper(".employees-Swiper", {
    slidesPerView: 'auto',
    spaceBetween: 300,
    loop: true,
    speed:2000,

  });

  $('.sc-employees .img-box').hover(function(){
    $(this).siblings('.text-box').addClass('blur')
  },function(){
    $(this).siblings('.text-box').removeClass('blur')
  })




 $('.group-join').hover(function(){
    a = setTimeout(() => {
        $('.bg-left').css('width','80%');
        $('.bg-right').css('width','20%');     
    }, 500);
    
  
 },function(){
    clearTimeout(a);
    $('.bg-right,.bg-left').css('width','50%');
 })

 $('.group-send').hover(function(){
    a =setTimeout(() => {
        $('.bg-left').css('width','20%');
        $('.bg-right').css('width','80%');
    }, 500);

 },function(){
    clearTimeout(a);
    $('.bg-right,.bg-left').css('width','50%');
 })
 
 




