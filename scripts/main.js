// Initialize collapse button
// $(".button-collapse").sideNav();
$('.button-collapse').sideNav({
    menuWidth: 150, // Default is 240
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  }
);
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();

$('#textarea1').val('New Text');
$('#textarea1').trigger('autoresize');


$(document).ready(function(){
  $('.carousel').carousel();
});
