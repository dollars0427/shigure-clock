const moment = require('moment');
const clock = document.querySelector('#clock');
let nowTime = moment().format('HH:mm');
clock.innerText = nowTime;

setInterval(function(){
  let fullTime = moment().format('HH:mm:ss');
  nowTime = moment().format('HH:mm');
  checkTime(fullTime);
  clock.innerText = nowTime;
}, 1000);

function checkTime(nowTime){
  switch(nowTime){
    case '00:00:00':
    var audio = new Audio('sound/0.mp3');
    audio.play();
    break;
    case '01:00:00':
    var audio = new Audio('sound/1.mp3');
    audio.play();
    break;
    case '02:00:00':
    var audio = new Audio('sound/2.mp3');
    audio.play();
    break;
    case '03:00:00':
    var audio = new Audio('sound/3.mp3');
    audio.play();
    break;
    case '04:00:00':
    var audio = new Audio('sound/4.mp3');
    audio.play();
    break;
    case '05:00:00':
    var audio = new Audio('sound/5.mp3');
    audio.play();
    break;
    case '06:00:00':
    var audio = new Audio('sound/6.mp3');
    audio.play();
    break;
    case '07:00:00':
    var audio = new Audio('sound/7.mp3');
    audio.play();
    break;
    case '08:00:00':
    var audio = new Audio('sound/8.mp3');
    audio.play();
    break;
    case '09:00:00':
    var audio = new Audio('sound/9.mp3');
    audio.play();
    break;
    case '10:00:00':
    var audio = new Audio('sound/10.mp3');
    audio.play();
    break;
    case '11:00:00':
    var audio = new Audio('sound/11.mp3');
    audio.play();
    break;
    case '12:00:00':
    var audio = new Audio('sound/12.mp3');
    audio.play();
    break;
    case '13:00:00':
    var audio = new Audio('sound/13.mp3');
    audio.play();
    break;
    case '14:00:00':
    var audio = new Audio('sound/14.mp3');
    audio.play();
    break;
    case '15:00:00':
    var audio = new Audio('sound/15.mp3');
    audio.play();
    break;
    case '16:00:00':
    var audio = new Audio('sound/16.mp3');
    audio.play();
    break;
    case '17:00:00':
    var audio = new Audio('sound/17.mp3');
    audio.play();
    break;
    case '18:00:00':
    var audio = new Audio('sound/18.mp3');
    audio.play();
    break;
    case '19:00:00':
    var audio = new Audio('sound/19.mp3');
    audio.play();
    break;
    case '20:00:00':
    var audio = new Audio('sound/20.mp3');
    audio.play();
    break;
    case '21:00:00':
    var audio = new Audio('sound/21.mp3');
    audio.play();
    break;
    case '22:00:00':
    var audio = new Audio('sound/22.mp3');
    audio.play();
    break;
    case '23:00:00':
    var audio = new Audio('sound/23.mp3');
    audio.play();
    break;
  }
}
