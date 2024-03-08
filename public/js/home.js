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

//changes color from orange to white when opened
function expandProject(projectElement) {
  projectElement.classList.add('expanded');
}

document.addEventListener('DOMContentLoaded', function() {
  const projects = document.querySelectorAll('.project');

  projects.forEach(function(project) {
    project.addEventListener('click', function() {
      expandProject(project);
    });
  });
});