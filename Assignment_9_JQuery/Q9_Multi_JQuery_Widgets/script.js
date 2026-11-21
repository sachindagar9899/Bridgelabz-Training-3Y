// Q9: Two jQuery versions run together using noConflict(true).
// The first script tag loads jQuery 1.12.4 and stores its reference in jq1.
// The second loads jQuery 3.7.1 and stores its reference in jq2.
(function (jq1, jq2) {
  // Version 1 handles the carousel and active widget highlighting.
  jq1(function () {
    const slides = [
      "Slide 1: Welcome to the dashboard.",
      "Slide 2: Your latest activity is here.",
      "Slide 3: Check your notifications."
    ];
    let slideIndex = 0;

    function showSlide() {
      jq1("#carouselText").text(slides[slideIndex]);
    }
    jq1("#nextSlide").on("click", function () {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide();
    });
    jq1("#previousSlide").on("click", function () {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      showSlide();
    });

    jq1(".widget").on("click", function () {
      jq1(".widget").removeClass("active-widget");
      jq1(this).addClass("active-widget");
    });
  });

  // Version 2 handles notification modal interactions and tooltips.
  jq2(function () {
    jq2("#openModal").on("click", function () {
      jq2("#notificationModal").fadeIn(150).prop("hidden", false);
    });
    jq2("#closeModal, #notificationModal").on("click", function (event) {
      if (event.target === this || this.id === "closeModal") {
        jq2("#notificationModal").fadeOut(150, function () {
          jq2(this).prop("hidden", true);
        });
      }
    });

    // Lightweight tooltip using the title attribute.
    jq2(".tooltip-button").on("mouseenter", function () {
      jq2(this).attr("data-tooltip", jq2(this).attr("title")).removeAttr("title");
    }).on("mouseleave", function () {
      const tip = jq2(this).attr("data-tooltip");
      if (tip) jq2(this).attr("title", tip).removeAttr("data-tooltip");
    });

    jq2("#versionInfo").text("jQuery versions: " + jq1.fn.jquery + " and " + jq2.fn.jquery);
  });
})(window.jQueryV1, window.jQueryV2);
