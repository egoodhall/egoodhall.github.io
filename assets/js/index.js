$(document).ready(function(){
  // Showing/Hiding experience/education items
  var showExpEdu = 3;
  if ($(".exp-edu").length <= showExpEdu) {
    $("#show-exp-edu").hide();
    $("#hide-exp-edu").hide();
  } else {
    $("#hide-exp-edu").hide();
    $(".exp-edu").slice(showExpEdu, $(".exp-edu").length).hide();
    $("#show-exp-edu").on('click', function (e) {
      e.preventDefault();
      $(".exp-edu:hidden").slideDown();
      $("#show-exp-edu").hide();
      $("#hide-exp-edu").show();
    });
    $("#hide-exp-edu").on('click', function (e) {
      e.preventDefault();
      $(".exp-edu").slice(showExpEdu, $(".exp-edu").length).slideUp();
      $("#hide-exp-edu").hide();
      $("#show-exp-edu").show();
    });
  }
  // Showing/Hiding project items
  var showProjects = 3;
  if ($(".proj").length <= showProjects) {
    $("#show-proj").hide();
    $("#hide-proj").hide();
  } else {
    $("#hide-proj").hide();
    $(".proj").slice(showProjects, $(".proj").length).hide();
    $("#show-proj").on('click', function (e) {
      e.preventDefault();
      $(".proj:hidden").slideDown();
      $("#show-proj").hide();
      $("#hide-proj").show();
    });
    $("#hide-proj").on('click', function (e) {
      e.preventDefault();
      $(".proj").slice(showProjects, $(".proj").length).slideUp();
      $("#hide-proj").hide();
      $("#show-proj").show();
    });
  }
});