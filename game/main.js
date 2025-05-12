Clicks=0;

const ClickButton=document.getElementById("btn-main")

function displayUpdate(clicks) {
  display=document.getElementById("display")
  display.innerHTML=clicks;
}

function onClick() {
  Clicks++;
  displayUpdate(Clicks);
}

ClickButton.addEventListener('click', onClick);
displayUpdate(Clicks);
