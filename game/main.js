let Clicks=0;
console.log("TEST: BOOTUP...")

function displayUpdate(clicks) {
  $('display').text(clicks)
}
function onClick() {
  Clicks++;
  console.log("Code Execution Line 8")
  displayUpdate(Clicks);
}
$(document).ready(function() {
  console.log("Code Execution Line 12")
  $('#btn-main').on('click', function() {
    console.log("Code Execution Line 14")
    onClick()
  });
  displayUpdate(Clicks);
})
