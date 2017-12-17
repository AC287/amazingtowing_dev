$(document).ready(function() {
  console.log('script is loaded...');
  // console.log($('#at-map').width());
  // console.log($(window).width());

  //Initial map resize based on window.
  var curWindowWidth = $(window).width();
  var curAtMapWidth = $('#at-map').width();

  if(curWindowWidth < curAtMapWidth) {
    console.log(curWindowWidth);
    console.log(curAtMapWidth);
    console.log('current window width is less than current map width...')
    $('#at-map').width($(window).width());
  }


  $(window).resize(function() {
    var windowWidth = $(window).width();
    var mapWidth = $('#at-map').width();
    if(windowWidth < mapWidth){
      $('#at-map').width(windowWidth);
    } else {
      $('#at-map').width('400');
    }
  });

})
