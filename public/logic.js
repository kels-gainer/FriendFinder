    $("#button").on("click", function(event){
      event.preventDefault();
      $("#myModal").modal("show");      
   
    // Validate survey questions
    // function validateSurvey() {
    //   var valid = true;

    //   var name = $("#name").val();
    //   if(name === "") {
    //     valid = false;
    //   };

    //   var regx = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    //   var photoUrl = $("#photo").val();
    //   if((!regx.test(photoUrl))) {
    //     valid = false;
    //   };

    //   $(".validate").each(function() {
    //     console.log($(this).val());
    //     if($(this).val() === "") {
    //       valid = false;
    //     };
    //   });
    //   return valid;
    // };

    // if (validateSurvey() === true) {
      
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
    // } else {
    //     alert("Please fill out all the survey questions");
    // } return false;
  });