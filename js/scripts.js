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

  $("form#selectBackEnd").submit(function(event) {
    var userInput = $("input:radio[name=selectBackEnd]:checked").val();
    event.preventDefault();
    if (userInput === "large") {
      $("#selectLarge").show();
      $("form#selectBackEnd").hide();
    }
    else if (userInput === "noPreference") {
      $("#selectNoPreference").show();
      $("form#selectBackEnd").hide();
    }
    else if (userInput === "small") {
      $("#selectSmall").show();
      $("form#selectBackEnd").hide();
    }
});

  $("form#noPreferenceForm").submit(function() {
    var userInput = $("input:radio[name=selectNoPreference]:checked").val();
    event.preventDefault();
    if (userInput === "one") {
      $("#selectOne").show();
      $("form#noPreferenceForm").hide();
    }
    else if (userInput === "multiple") {
      $("#selectMultiple").show();
      $("form#noPreferenceForm").hide();
    }

});
});
