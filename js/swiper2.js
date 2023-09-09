var swiper = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
   // effect:"slide",
   // slidesPerGroup: 1,
    effect: 'coverflow',
    centeredSlides: true,
  coverflowEffect: {
     rotate: 0,
     stretch: 80,
     depth: 200,
     modifier: 1, // 2,3
     slideShadows : false,
   },
   // effect: 'cards',

  autoplay:{
        delay:3000,
        disableOnIntraction:false,

    }, 

   // spaceBetween: 10,
  
    // If we need pagination
  /*  pagination: {
      el: '.swiper2-pagination',
      clickable:true,
    },
  */
    // Navigation arrows
    navigation: {
      nextEl: '.swiper2-button-next',
      prevEl: '.swiper2-button-prev',
    },

  breakpoints: {
        1640: {
            slidesPerView: 1,
            spaceBetween:25
        } 
      },
      
        
      on:{
        init(){
            this.el.addEventListener("mouseenter", () =>{
                this.autoplay.stop();
            });
            this.el.addEventListener("mouseleave", () =>{
              this.autoplay.start();
          })
        }
    }



    
  });

  const myswiper = document.getElementById("swiper2")
  myswiper.addEventListener("mouseenter", function(){
      
      swiper.autoplay.stop()
  })
