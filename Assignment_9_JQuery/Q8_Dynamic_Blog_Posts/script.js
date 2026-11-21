// Q8: Dynamic Blog Posts
$(function () {
  let postNumber = 5;

  $("#addPost").on("click", function () {
    postNumber++;
    // .append() adds a new post at the end of the list.
    $("<article>", { class: "post" })
      .append($("<h2>").text("New Blog Post " + postNumber))
      .append($("<p>").text("This post was dynamically added using jQuery append()."))
      .appendTo("#posts");
  });

  $("#prependPost").on("click", function () {
    // .prepend() inserts a featured post before all existing posts.
    const $featured = $("<article>", { class: "post featured" })
      .append($("<h2>").text("Featured: Latest Announcement"))
      .append($("<p>").text("This featured post was placed at the beginning."));
    $("#posts").prepend($featured);
  });

  $("#removeLast").on("click", function () {
    // Remove the final post only when at least one post exists.
    $("#posts").children(".post").last().remove();
  });

  $("#addTag").on("click", function () {
    const $firstPost = $("#posts").children(".post").first();
    if (!$firstPost.length) return;
    // Demonstrate .before() and .after() placement around a post.
    $firstPost.before($("<span>", { class: "tag", text: "TOP STORY" }));
    $firstPost.after($("<p>", { class: "tagline", text: "Editor's pick" }));
  });

  $("#highlightKeywords").on("click", function () {
    // Highlight post cards whose text contains a chosen keyword.
    $(".post").each(function () {
      const text = $(this).text().toLowerCase();
      $(this).toggleClass("keyword-highlight", /javascript|jquery|cybersecurity/.test(text));
    });
  });
});
