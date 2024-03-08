$('div.dropdown').each(function(eq, el) {
  el = $(el);
  if (typeof(el.attr('id')) === "undefined") {
    el.prop('id', 'div-' + eq);
    console.log(el.prop('id'));
  }
});
$('button.dropdown-button').each(function(eq, el) {
  el = $(el);
  if (typeof(el.attr('id')) === "undefined") {
    el.prop('id', 'button-' + eq);
    console.log(el.prop('id'));
  }
});
$(document).ready(function(){
  $('#button-0').click(function() {
    $('#div-0').toggle("slide");
  });
});
$(document).ready(function(){
  $('#button-1').click(function() {
    $('#div-1').toggle("slide");
  });
});
$(document).ready(function(){
  $('#button-2').click(function() {
    $('#div-2').toggle("slide");
  });
});
$(document).ready(function(){
  $('#button-3').click(function() {
    $('#div-3').toggle("slide");
  });
});
$(document).ready(function(){
  $('#button-4').click(function() {
    $('#div-4').toggle("slide");
  });
});
$(document).ready(function(){
  $('#button-5').click(function() {
    $('#div-5').toggle("slide");
  });
});
$(document).ready(function(){
  $('#button-6').click(function() {
    $('#div-6').toggle("slide");
  });
});
$(document).ready(function(){
  $('#button-7').click(function() {
    $('#div-7').toggle("slide");
  });
});
$(document).ready(function(){
  $('#button-8').click(function() {
    $('#div-8').toggle("slide");
  });
});
$(document).ready(function(){
  $('#button-9').click(function() {
    $('#div-9').toggle("slide");
  });
});
$(document).ready(function(){
  $('#button-10').click(function() {
    $('#div-10').toggle("slide");
  });
});
$(document).ready(function(){
  $('#button-11').click(function() {
    $('#div-11').toggle("slide");
  });
});
$(document).ready(function(){
  $('#button-12').click(function() {
    $('#div-12').toggle("slide");
  });
});
$(document).ready(function(){
  $('#button-13').click(function() {
    $('#div-13').toggle("slide");
  });
});
$(document).ready(function(){
  $('#button-14').click(function() {
    $('#div-14').toggle("slide");
  });
});
$(document).ready(function(){
  $('#button-15').click(function() {
    $('#div-15').toggle("slide");
  });
});

//when dropdown button is hit it will change back ground from orange to white when opened
function expandProject(projectElement) {
  projectElement.classList.toggle('expanded'); 
  if (projectElement.classList.contains('expanded')) {
    projectElement.style.backgroundColor = 'white';
  } else {
    projectElement.style.backgroundColor = 'orange';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const dropdownButtons = document.querySelectorAll('.dropdown-button');

  dropdownButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const projectElement = button.closest('.project');
 
      expandProject(projectElement);
    });
  });
});