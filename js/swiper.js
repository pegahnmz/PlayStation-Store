var swiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
   // loop: true,
    slidesPerView: 6,
    effect:"slide",
     
    slidesPerGroup: 6,
    speed:500,

   /* autoplay:{
        delay:3000,
        disableOnIntraction:false,

    }, */

    spaceBetween:0,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper1-button-next',
      prevEl: '.swiper1-button-prev',
    },

   breakpoints: {
        1640: {
            slidesPerView: 6,
            spaceBetween: 0
        } 
      },
        



    
  });
