$(document).ready(function() {

    const ua = navigator.userAgent;

    // Only Safari (macOS or iOS Safari)
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);

    if (isSafari) {
      document.documentElement.classList.add("safari-browser");
    }

    // ACCORDION
    $('.accordion-header').on('click', function(){
        $(this).toggleClass('active');
        $(this).next('.accordion-content').slideToggle();

        $('.accordion-header').not($(this)).removeClass('active');
        $('.accordion-content').not($(this).next('.accordion-content')).slideUp();
    });

    if($('.commentSlider').length){
      var swiper = new Swiper(".commentSlider", {
        slidesPerView: 2.8,
        spaceBetween: 30,
        autoplay: {
          delay: 1,
          disableOnInteraction: false
        },
        speed: 10000,
        loop: true,
        breakpoints: {
          0: {
            slidesPerView: 1.5
          },
          768: {
            slidesPerView: 2.8
          }
        }
      });
    }

    if( $('.lightbox').length ){
      $('.lightbox img').magnificPopup({
            type:'image',
            closeOnContentClick: true,
            gallery:{enabled:true},
            zoom:{enabled: true, duration: 300}
        });
    }

    // Sidebar animation
    if (typeof gsap !== 'undefined') {
      const sidebar = gsap.timeline({yoyo: false, reversed: true});
      sidebar.pause();

      sidebar.to(".sidebar", {
        autoAlpha: 1,
        'pointer-events': 'all',
        duration: .3
      })
      .to(".sidebar .right-bar", {
        x: 0,
        duration: .3
      });

      $('.hamburger').on('click', function(){
          sidebar.reversed() ? sidebar.play(): sidebar.reverse();
      });

      $('.sidebar').on('click', function(){
        sidebar.reversed() ? sidebar.play(): sidebar.reverse();
      });
    }

    // SCROLL TRIGGER & GSAP ANIMATIONS
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // Initialize text animation
      $('.text-anime').each(function(){
        let delay = $(this).data('delay') ? parseFloat($(this).data('delay')) : 0;
        gsap.fromTo($(this), 
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: $(this),
              start: "top 92%",
              once: true
            }
          }
        );
      });

      // Initialize fade up animation
      $('.fade-up-anime').each(function(){
        gsap.fromTo($(this), 
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: $(this),
              start: "top 92%",
              once: true
            }
          }
        );
      });

      // Window resize refresh
      let resizeTimeout;
      $(window).on('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
          ScrollTrigger.refresh();
        }, 150);
      });

      // Refresh on window load (after all images/fonts are loaded)
      $(window).on('load', function() {
        ScrollTrigger.refresh();
      });
    }

    // Active navigation state on scroll
    $(window).on("scroll", function () {
      let scrollPos = $(window).scrollTop();
      let offset = 150;

      $("section").each(function () {
        let top = $(this).offset().top - offset;
        let bottom = top + $(this).outerHeight();
        let id = $(this).attr("id");

        if (scrollPos >= top && scrollPos < bottom) {
          $(".icon-bar a.active, .sidebar a.active").removeClass("active");
          $('.icon-bar a[href="#' + id + '"], .sidebar a[href="#' + id + '"]').addClass("active");
          return false; // loop break
        }
      });
    });

});
