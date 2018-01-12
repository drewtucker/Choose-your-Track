$(document).ready(function() {
  //Logic for form asking whether user would prefer to learn Front End or Back End//
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

  //Logic for form asking whether user prefers learning broad or specific Front-End concepts.//
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

  //Logic for form asking what size of company the user would ideally like to work for.//
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

  //Logic for form asking whether user would rather focus on one project or multiple.//
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

  $("form.helpQuery").submit(function() {
    var userInput = $("input:radio[name=helpQuery]:checked").val();
    event.preventDefault();
    if (userInput === "yes") {
      alert("Thanks for your input!")
    }
    else if (userInput === "no") {
      alert("How rude!")
    }
});
});
