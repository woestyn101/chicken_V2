$(document).ready(function(){
    $('.dropdown-button').click(function() {
      $('.dropdown').toggle("slide");
    });
});
$('div.dropdown').each(function(eq, el) {
  el = $(el);
  if (typeof(el.attr('id')) === "undefined") {
    el.prop('id', 'div-' + eq);
    console.log(el.prop('id'));
  }
});