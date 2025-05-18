let Clicks=0;

const ClickButton=document.getElementById("btn-main")

function displayUpdate(clicks) {
  $('display').text(clicks)
}

function onClick() {
  Clicks++;
  displayUpdate(Clicks);
}

$('#btn-main').click(onClick); 
displayUpdate(Clicks);
