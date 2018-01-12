$(document).ready(function() {
  $("form#frontOrBack").submit(function(event) {
    var input = $("input:radio[name=frontOrBack]:checked").val();
    event.preventDefault();

  });

});
