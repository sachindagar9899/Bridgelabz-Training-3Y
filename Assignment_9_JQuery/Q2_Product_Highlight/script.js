// Q2: Product Highlight
$(function () {
  // Clicking the product card highlights it; clicking its favorite button toggles selected.
  $(".product").on("click", function (event) {
    if ($(event.target).closest(".favorite").length) return;
    $(this).toggleClass("highlight");
    if ($(this).attr("data-stock") === "out") {
      alert($(this).find("h2").text() + " is currently out of stock.");
    }
  });

  // Hover reveals the extra details for the hovered product.
  $(".product").hover(
    function () { $(this).find(".details").stop(true, true).slideDown(150); },
    function () { $(this).find(".details").stop(true, true).slideUp(150); }
  );

  $(".favorite").on("click", function (event) {
    event.stopPropagation();
    $(this).toggleClass("selected");
    $(this).text($(this).hasClass("selected") ? "♥ Favorited" : "♡ Favorite");
  });
});
