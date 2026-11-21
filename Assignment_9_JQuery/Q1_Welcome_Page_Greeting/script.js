// Q1: Welcome Page Greeting
$(document).ready(function () {
  const hour = new Date().getHours();
  let greeting;

  // Select a greeting based on the visitor's local time.
  if (hour < 12) greeting = "Good Morning!";
  else if (hour < 17) greeting = "Good Afternoon!";
  else greeting = "Good Evening!";

  $("#greeting").text(greeting);

  const quotes = [
    "Believe you can and you're halfway there.",
    "Small steps every day lead to big results.",
    "Your only limit is your mind.",
    "Make today count!"
  ];
  let quoteIndex = 0;

  $("#changeGreeting").on("click", function () {
    $("#greeting").text(quotes[quoteIndex]);
    quoteIndex = (quoteIndex + 1) % quotes.length;
  });

  $("#toggleWelcome").on("click", function () {
    $("#welcomeMessage").toggle();
    $(this).text($("#welcomeMessage").is(":visible") ? "Hide Welcome Message" : "Show Welcome Message");
  });

  $("#greeting").on("click", function () {
    alert("Thanks for visiting our website!");
  });
});
