// Initialize collapse button
$('.button-collapse').sideNav({
    menuWidth: 150, 
    edge: 'right', 
    closeOnClick: true 
  }
);

// Initialize accordion 
$(document).ready(function(){
  $('.collapsible').collapsible({
    accordion : false
  });
});

// Initialize carousel of technology icons
$(document).ready(function(){
  $('.carousel').carousel();
});

// Initialize tooltip
$(document).ready(function(){
  $('.tooltipped').tooltip({delay: 20});
});
