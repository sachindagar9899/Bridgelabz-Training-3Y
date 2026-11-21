// Q5: Team Members Directory
$(function () {
  $(".contact").hide();

  // Highlight direct reports using .find() under the selected manager.
  $(".manager-name").on("click", function () {
    $(".employee").removeClass("report-highlight");
    $(this).closest(".manager").find(".reports").children(".employee").addClass("report-highlight");
  });

  // .next() selects the contact element that follows an employee name.
  $(".employee-name").hover(
    function () { $(this).next(".contact").stop(true, true).fadeIn(120); },
    function () { $(this).next(".contact").stop(true, true).fadeOut(120); }
  );

  // .children() applies a background to the members inside the clicked department.
  $(".department-title").on("click", function () {
    $(".employee").removeClass("department-highlight");
    $(this).closest(".department").children(".team").children(".employee").addClass("department-highlight");
    $(this).closest(".department").find(".reports").children(".employee").addClass("department-highlight");
  });

  // Pick one employee and highlight its siblings in the same reports group.
  $("#randomEmployee").on("click", function () {
    $(".employee").removeClass("sibling-highlight");
    const $people = $(".reports > .employee");
    const randomIndex = Math.floor(Math.random() * $people.length);
    const $chosen = $people.eq(randomIndex);
    $chosen.siblings(".employee").addBack().addClass("sibling-highlight");
  });

  // Use .parent() and .find() to collapse/expand the chosen manager's team.
  $(".manager-name").on("dblclick", function () {
    const $team = $(this).parent().find(".reports");
    $team.slideToggle();
  });
});
