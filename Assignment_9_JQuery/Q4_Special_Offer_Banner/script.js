// Q4: Special Offer Banner
$(function () {
  const $banners = $(".banner");
  let currentBanner = 0;
  let rotationTimer;

  $("#hideBanners").on("click", () => $banners.hide());
  $("#showBanners").on("click", () => $banners.show());
  $("#slideUp").on("click", () => $banners.slideUp());
  $("#slideDown").on("click", () => $banners.slideDown());
  $("#fadeOut").on("click", () => $banners.fadeOut(400));
  $("#fadeIn").on("click", () => $banners.fadeIn(400));

  // Keep one banner visible and rotate to the next one every five seconds.
  function rotateBanner() {
    $banners.stop(true, true).hide();
    $banners.eq(currentBanner).fadeIn(500);
    currentBanner = (currentBanner + 1) % $banners.length;
  }

  rotateBanner();
  rotationTimer = setInterval(rotateBanner, 5000);

  // Stop the timer if this page is being left.
  $(window).on("beforeunload", function () {
    clearInterval(rotationTimer);
  });
});
