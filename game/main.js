let Clicks=0;

function displayUpdate(clicks) {
  console.log("The problem is in line 5!")
  $('display').text(clicks)
}
function onClick() {
  Clicks++;
  displayUpdate(Clicks);
}
$(document).ready(function() {
  $('#btn-main').on('click', function() {
    onClick()
  });
  displayUpdate(Clicks);
})
