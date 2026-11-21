// Q6: Event Subscription Panel
$(function () {
  let subscribed = false;

  function showMessage(message) {
    $("#subscriptionMessage").text(message).hide().fadeIn(200);
  }

  // Delegated .on() also handles topic buttons added later.
  $("#topics").on("click", ".topic", function () {
    $(this).toggleClass("chosen");
    showMessage("Selected topic: " + $(this).text());
  });

  $("#subscribe").on("click", function () {
    subscribed = true;
    showMessage("Successfully subscribed. Notifications are enabled.");
  });

  $("#unsubscribe").on("click", function () {
    subscribed = false;
    showMessage("You are unsubscribed. Notifications are disabled.");
  });

  $("#addTopic").on("click", function () {
    const topicName = $("#newTopic").val().trim();
    if (!topicName) {
      showMessage("Please enter a topic name.");
      return;
    }
    // Append a new topic. The delegated click handler above works for this new button.
    $("<button>", { class: "topic", text: topicName }).appendTo("#topics");
    $("#newTopic").val("");
    showMessage("New topic added: " + topicName);
  });

  // Demonstrate .off(): remove the click handler for the selected topic.
  $("#topics").on("dblclick", ".topic", function () {
    const topicName = $(this).text();
    $(this).off("click");
    showMessage("Click event detached from: " + topicName);
  });
});
