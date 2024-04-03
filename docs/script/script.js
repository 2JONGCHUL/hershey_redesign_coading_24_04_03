console.clear();

function header_scroll() {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $(".top-bar__nav > ul > li > a").addClass("active");
      $(".top-bar").addClass("active");
    } else {
      $(".top-bar__nav > ul > li > a").removeClass("active");
      $(".top-bar").removeClass("active");
    }
  });
}
header_scroll();

// sidemenu
function SideMenu__show() {
  $(".sidemenu_icon").click(function () {
    $(".sidemenu_wrap").removeClass("active");
    $(".top-bar__nav").removeClass("active");
  });
}
function SideMenu__hide() {
  $(".top-bar__nav_icon").click(function () {
    $(".sidemenu_wrap").addClass("active");

    $(".top-bar__nav").addClass("active");
  });
}
SideMenu__show();
SideMenu__hide();

function SideMenu__ul() {
  $(".sidemenu_wrap > nav > ul ul").stop().slideUp();

  $(".sidemenu_wrap > nav > ul > li").click(function () {
    let $this = $(this); // 클릭 당한 녀석
    let has = $this.hasClass("active");

    $this.siblings(".active").find(" > ul").slideUp(300);
    $this.siblings(".active").find(".active").removeClass("active");
    $this.siblings(".active").removeClass("active");

    if (has) {
      $this.find(" > ul").stop().slideUp(300);
      $this.find(".active").removeClass("active");
      $this.removeClass("active");
    } else {
      $this.find(" > ul").stop().slideDown(300);
      $this.addClass("active");
    }

    $(".sidemenu_wrap ul").click(function (e) {
      // e.stopPropagation();
      return false;
    });
  });
}
SideMenu__ul();

// nav bar hover
function nav__hover() {
  $(".top-bar__nav > ul > li").hover(function () {
    $(".top-bar").css("backgroundColor", "white");
    $(".top-bar").css("height", "270px");
    $(".top-bar__con").css("border-bottom", "1px solid rgba(57, 2, 11, 0.2)");
    $(".top-bar__nav > ul ul").css("display", "block");
    $(".top-bar__nav > ul > li > a").addClass("hover");
  });
}

function nav__remv() {
  $(".top-bar__nav > ul > li").mouseleave(function () {
    $(".top-bar").css("backgroundColor", "");
    $(".top-bar").css("height", "100px");
    $(".top-bar__con").css("border-bottom", "");
    $(".top-bar__nav > ul ul").css("backgroundColor", "");
    $(".top-bar__nav > ul ul").css("display", "none");
    $(".top-bar__nav > ul > li > a").removeClass("hover");
  });
}
nav__hover();
nav__remv();

function BrandsSlide__init() {
  const swiper = new Swiper(".hersheys-brands__menuslide .brands_slider", {
    loop: true, // 슬라이드 반복여부
    slidesPerView: 1, // 한 페이지에 보여질 슬라이드 개수
    spaceBetween: 15, // 슬라이드 간의 간격(여백)
    slidesPerGroup: 1, // 한번 넘길 때 몇 개의 슬라이드를 넘길건지
    speed: 2000, // 슬라이드 전환 속도
    // effect: "fade", // 슬라이드 전환 효과
    // loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    fadeEffect: { crossFade: true },
    autoplay: {
      // 슬라이드 자동재생
      delay: 2000, // 2초에 한번씩 슬라이드 전환
    },
    navigation: {
      nextEl: ".brands__wiper .swiper-button-next",
      prevEl: ".brands__wiper .swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 3, //768보다 클 때
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4, //1024보다 클 때
        spaceBetween: 10,
      },
      1300: {
        slidesPerView: 5, //1024보다 클 때
        spaceBetween: 10,
      },
    },
  });
}
BrandsSlide__init();

// EVENTS seciton - swiper
function EvnetsSlide__init() {
  const swiper = new Swiper(".hershey__events .events-box_slider", {
    loop: true, // 슬라이드 반복여부
    slidesPerView: 1, // 한 페이지에 보여질 슬라이드 개수
    spaceBetween: 15, // 슬라이드 간의 간격(여백)
    slidesPerGroup: 1, // 한번 넘길 때 몇 개의 슬라이드를 넘길건지
    speed: 2000, // 슬라이드 전환 속도
    // effect: "fade", // 슬라이드 전환 효과
    // loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    fadeEffect: { crossFade: true },
    autoplay: {
      // 슬라이드 자동재생
      delay: 2000, // 2초에 한번씩 슬라이드 전환
    },
    pagination: {
      el: ".events-box_slider .swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".events-box_slider .swiper-button-next",
      prevEl: ".events-box_slider .swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2, //768보다 클 때
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3, //1024보다 클 때
        spaceBetween: 10,
      },
      1300: {
        slidesPerView: 4, //1024보다 클 때
        spaceBetween: 10,
      },
    },
  });
}
EvnetsSlide__init();
