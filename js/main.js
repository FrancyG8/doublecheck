$(document).ready(function() {

//giustosbagliato
  $('#OP1').click(function() {
    $('#q6').css({
      fill: "#FFFFFF"
    });
     $("#right").animate({right: '250px'});
  });
  $('#OP2').click(function() {
    $('#q6').css({
      fill: "#000000"
    });
  });

});
