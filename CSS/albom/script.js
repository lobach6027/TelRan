new Swiper(".image-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    //clickable:true,
    //dynamicBullets:true,
    type: 'fraction'
    //type: "progressbar",
  },
  scrollbar:{
    el:'swiper-scrollbar',
    draggable:true
  },
  keyboard:{
    anabled:true,
    anlyInViewport:true,
    pageUpDown:true
  },
  mousewheel:{

    sensitivily:1,
    //eventsTarget:".image-target"
  },
  autoHeight:true,
 // slidesPerView:3,
//watchOverflow:true,
//spaceBetween:50,
intialSlide:1,
//loop:true
});
