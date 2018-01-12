$(document).ready(function() {
  $("form#frontOrBack").submit(function(event) {
    var userInput = $("input:radio[name=frontOrBack]:checked").val();
    event.preventDefault();
    if (userInput === "frontEnd") {
      $("form#selectFrontEnd").show();
      $("form#frontOrBack").hide();
    }
    else if (userInput === "backEnd") {
      $("form#selectBackEnd").show();
      $("form#frontOrBack").hide();
    }
  });

  $("form#selectFrontEnd").submit(function(event) {
    var userInput = $("input:radio[name=selectFrontEnd]:checked").val();
    event.preventDefault();
    if (userInput === "specific") {
      $("#selectSpecific").show();
      $("form#selectFrontEnd").hide();
    }
    else if (userInput === "broad") {
      $("#selectBroad").show();
      $("form#selectFrontEnd").hide()
    }
});
});
