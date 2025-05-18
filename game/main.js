let Clicks=0;

function displayUpdate(clicks) {
  $('#display').text(clicks);
}
function onClick() {
  Clicks++;
  displayUpdate(Clicks);
}
$(document).ready(function() {
  $('#btn-main').on('click', function() {
    onClick();
  });
  displayUpdate(Clicks);
})
