// Q7: Search Courses
$(function () {
  const $courses = $("#courseList li");

  function filterCourses() {
    const query = $("#courseSearch").val().trim().toLowerCase();
    let matched = 0;

    $courses.each(function () {
      const originalText = $(this).text();
      const isMatch = originalText.toLowerCase().includes(query);

      // Reset previous markup before applying a new search highlight.
      $(this).text(originalText);
      if (isMatch) {
        $(this).show();
        matched++;
        if (query) {
          const index = originalText.toLowerCase().indexOf(query);
          const before = originalText.slice(0, index);
          const match = originalText.slice(index, index + query.length);
          const after = originalText.slice(index + query.length);
          $(this).html(
            $("<span>").text(before).prop("outerHTML") +
            $("<strong>").text(match).css("background-color", "#fde68a").prop("outerHTML") +
            $("<span>").text(after).prop("outerHTML")
          );
        }
      } else {
        $(this).hide();
      }
    });

    $("#courseCount").text(matched + " course(s) found");
  }

  // keyup runs the filter as the user types.
  $("#courseSearch").on("keyup", filterCourses);

  $("#clearSearch").on("click", function () {
    $("#courseSearch").val("");
    filterCourses();
    $("#courseSearch").focus();
  });

  filterCourses();
});
