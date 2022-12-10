$(function () {
  // slider

  $(".slider").slick({
    infinite: true,
    speed: 1000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    // appendArrows: $('.sandra__image')
  });

  // scroll slow

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let blockId = $(this).data("scroll");
    let blockOffset = $(blockId).offset().top;

    $("#header__menu a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate(
      {
        scrollTop: blockOffset,
      },

      500
    );
  });

  // burger menu

  $(document).ready(function () {
    $(".header__burger").click(function (event) {
      //добавляю класс актив для х-меню и х-бургер
      $(".header__burger,.header__menu").toggleClass("active");
      //добавляем класс что бы при открытом меню блокировать скролл
      $("body").toggleClass("lock");
    });
  });

  // modal popup
  const popupCall = $("[data-popup]");
  const popupClose = $("[data-close]");

  popupCall.on("click", function (event) {
    event.preventDefault();
    // отмена стандартного поведения

    let $this = $(this);
    let popupId = $this.data("popup");

    $(popupId).addClass("open");
    $("body").addClass("no-scroll");
    $("header").addClass("no-scroll");

    setTimeout(
      () => {
        $(popupId).find(".popup__content").css({
          transform: "rotateX(0)",
        });
      },

      200
    );
  });

  popupClose.on("click", function (event) {
    event.preventDefault();
    // отмена стандартного поведения

    let $this = $(this);
    let popupParent = $this.parents(".popup");

    popupParent.find(".popup__content").css({
      transform: "rotateX(90deg)",
    });

    setTimeout(
      () => {
        popupParent.removeClass("open");
        $("body").removeClass("no-scroll");
        $("header").removeClass("no-scroll");
      },

      200
    );
  });

  $(".popup").on("click", function (event) {
    let $this = $(this);

    $this.find(".popup__content").css({
      transform: "rotateX(90deg)",
    });

    // задержка по времени
    setTimeout(
      () => {
        $this.removeClass("open");
        $("body").removeClass("no-scroll");
        $("header").removeClass("no-scroll");
      },

      200
    );
  });

  $(".popup__content").on("click", function (event) {
    event.stopPropagation();
    //отменяем событие клика по его родителю
  });
});
