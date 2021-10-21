$(document).ready(() => {
  $('[data-toggle="tooltip"]').tooltip();

  $('#mycarousel').carousel({ interval: 2000 });
  $('#carousel-pause').click(() => {
    $('#mycarousel').carousel('pause');
  });

  $('#carousel-play').click(() => {
    $('#mycarousel').carousel('cycle');
  });
});
