$(".sample").slick({
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  speed: 1200,
});

// ページトップの自動スクロールをフェードイン表示にする
$(window).scroll(function () {
  var sc = $(window).scrollTop();
  console.log(sc);
  if (sc > 100) {
    $("footer p.pagetop").fadeIn(500);
  } else {
    $("footer p.pagetop").fadeOut(500);
  }
});

// モバイルの左右スライドのメニューアイコン
$(".hmenu").click(function () {
  $(this).toggleClass("close");
  return false;
});
$(".container").click(function () {
  $(".hmenu").removeClass("close");
});
