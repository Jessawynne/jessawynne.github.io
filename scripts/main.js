// Initialize collapse button
$('.button-collapse').sideNav({
    menuWidth: 150, 
    edge: 'right', 
    closeOnClick: true 
  }
);

// Initialize textarea
$('#textarea1').val('New Text');
$('#textarea1').trigger('autoresize');

// Initialize carousel of technology icons
$(document).ready(function(){
  $('.carousel').carousel();
});
