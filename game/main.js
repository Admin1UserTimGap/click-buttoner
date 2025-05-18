let Clicks=0;

function displayUpdate(clicks) {
  $('display').text(clicks)
}

function onClick() {
  Clicks++;
  displayUpdate(Clicks);
}

$('#btn-main').click(onClick); 
displayUpdate(Clicks);
