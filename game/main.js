let Clicks=0;

function displayUpdate(clicks) {
  $('display').text(clicks)
}
function onClick() {
  Clicks++;
  console.log("Code Execution Line 8")
  displayUpdate(Clicks);
}
$(document).ready(function() {
  $('#btn-main').click(onClick); 
  displayUpdate(Clicks);
})
