window.onload = function() {
  // Логика исчезновения приветственного экрана при нажатии
  cassett = document.getElementById('cassett');
  function deleteCassett() {
    cassett.style.setProperty('display', 'none');
  } 
  function enter() {
    cassett.style.setProperty('animation', 'animatePp 5s linear');
    setInterval(deleteCassett, 5000);
  }
  cassett.onclick = enter;

  // Логика переключения цветов приветственного экрана
  pink = document.getElementById('pink');
  green = document.getElementById('green');
  blue = document.getElementById('blue');
  body = document.getElementsByTagName('body');

  picker = document.getElementById('picker');
  counter = 0;

  function colorPick() {

    if(counter >= 3) {
      counter = 0;
    }
    counter+=1;
    if(counter % 1 == 0) {
      body[0].style.setProperty('filter', 'hue-rotate(180deg)');
    }
    if(counter % 2 == 0) {
      body[0].style.setProperty('filter', 'hue-rotate(70deg)');
    }
    if(counter % 3 == 0) {
      body[0].style.setProperty('filter', 'hue-rotate(-30deg)');
    }
  }

  let x = 0,
      y = 0;

document.addEventListener('keydown', function(e){
  if(e.which == 13 || e.which == 32) {
    colorPick();
  }
  // if(e.which == 39) y += 5;
  // if(e.which == 38) x += 5;
  // if(e.which == 40) x -= 5;
 
//  document.querySelector('.cube').style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
});
  picker.onclick = colorPick;






  // Выбор цвета с помощью кнопок
  // function pinkColor() {
  //   body[0].style.setProperty('filter', 'hue-rotate(330deg)');
  // }
  // function greenColor() {
  //   body[0].style.setProperty('filter', 'hue-rotate(180deg)');
  // }
  // function blueColor() {
  //   body[0].style.setProperty('filter', 'hue-rotate(220deg)');
  // }

  // pink.onclick = pinkColor;
  // green.onclick = greenColor;
  // blue.onclick = blueColor;






  // console.log(pink,green,blue,body);
  
}

