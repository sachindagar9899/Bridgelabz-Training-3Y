// Q3: Interactive FAQ
$(function () {
  $(".answer").hide();

  // Click a question to show or hide its answer.
  $(".question").on("click", function () {
    $(this).next(".answer").stop(true, true).slideToggle();
  });

  // Hover changes the question text color.
  $(".question").hover(
    function () { $(this).css("color", "#2563eb"); },
    function () { $(this).css("color", ""); }
  );

  // Double-click any question to collapse every answer.
  $(".question").on("dblclick", function () {
    $(".answer").stop(true, true).slideUp();
  });

  // Focus and blur on a note input highlight/reset its parent question.
  $(".answer input").on("focus", function () {
    $(this).closest(".faq-item").children(".question").css("background-color", "#dbeafe");
  }).on("blur", function () {
    $(this).closest(".faq-item").children(".question").css("background-color", "");
  });
});
