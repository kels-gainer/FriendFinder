    $("#button").on("click", function(event){
      event.preventDefault();
      $("#myModal").modal("show");      
   
    // Validate survey questions

    function validateSurvey() {
      var isValid = true;
      $(".form-control").each(function() {
        if ($(this).val() === "") {
          isValid = false;
        }
      });

      $("").each(function() {

        if ($(this).val() === "") {
          isValid = false;
        }
      });
      return isValid;
    }
    if (validateSurvey() === true) {
      
      var surveyInput = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
          $("#q1 ").val(),
          $("#q2 ").val(),
          $("#q3 ").val(),
          $("#q4 ").val(),
          $("#q5 ").val(),
          $("#q6 ").val(),
          $("#q7 ").val(),
          $("#q8 ").val(),
          $("#q9 ").val(),
          $("#q10 ").val()
        ]
      };

      var currentURL = window.location.origin;
      $.post(currentURL + "/api/friends", surveyInput, function(data) {
        $("#friendName").text(data.name);
        $("#friendPhoto").attr("src", data.photo);
        $("#myModal").modal("toggle")
      })
    } else {
        alert("Please fill out all the survey questions");
    } return false;
  });