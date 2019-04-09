$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});


$(document).ready(function () {
  $('[data-toggle="popover"]').popover();
});

$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

$(function() {
  $('html').smoothScroll(500);
 });

 $("#scroll-to-top").illBeBack();
 
 new WOW().init();
 