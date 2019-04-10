const moment = require('moment');
const player = require('play-sound')(opts = {});
const clock = document.querySelector('#clock');
let nowTime = moment().format('HH:mm');
clock.innerText = nowTime;

setInterval(function(){
  let fullTime = moment().format('HH:mm:ss');
  nowTime = moment().format('HH:mm');
  console.log(fullTime);
  checkTime(fullTime);
  clock.innerText = nowTime;
}, 1000);

function checkTime(nowTime){
  switch(nowTime){
    case '00:00:00':
    player.play('sound/0.mp3', function(err){
      if (err) throw err
    });
    break;
    case '01:00:00':
    player.play('sound/1.mp3', function(err){
      if (err) throw err
    });
    break;
    case '02:00:00':
    player.play('sound/2.mp3', function(err){
      if (err) throw err
    });
    break;
    case '03:00:00':
    player.play('sound/3.mp3', function(err){
      if (err) throw err
    });
    break;
    case '04:00:00':
    player.play('sound/4.mp3', function(err){
      if (err) throw err
    });
    break;
    case '05:00:00':
    player.play('sound/5.mp3', function(err){
      if (err) throw err
    });
    break;
    case '06:00:00':
    player.play('sound/6.mp3', function(err){
      if (err) throw err
    });
    break;
    case '07:00:00':
    player.play('sound/7.mp3', function(err){
      if (err) throw err
    });
    break;
    case '08:00:00':
    player.play('sound/8.mp3', function(err){
      if (err) throw err
    });
    break;
    case '09:00:00':
    player.play('sound/9.mp3', function(err){
      if (err) throw err
    });
    break;
    case '10:00:00':
    player.play('sound/10.mp3', function(err){
      if (err) throw err
    });
    break;
    case '11:00:00':
    player.play('sound/11.mp3', function(err){
      if (err) throw err
    });
    break;
    case '12:00:00':
    player.play('sound/12.mp3', function(err){
      if (err) throw err
    });
    break;
    case '13:00:00':
    player.play('sound/13.mp3', function(err){
      if (err) throw err
    });
    break;
    case '14:00:00':
    player.play('sound/14.mp3', function(err){
      if (err) throw err
    });
    break;
    case '15:00:00':
    player.play('sound/15.mp3', function(err){
      if (err) throw err
    });
    break;
    case '16:00:00':
    player.play('sound/16.mp3', function(err){
      if (err) throw err
    });
    break;
    case '17:00:00':
    player.play('sound/17.mp3', function(err){
      if (err) throw err
    });
    break;
    case '18:00:00':
    player.play('sound/18.mp3', function(err){
      if (err) throw err
    });
    break;
    case '19:00:00':
    player.play('sound/19.mp3', function(err){
      if (err) throw err
    });
    break;
    case '20:00:00':
    player.play('sound/20.mp3', function(err){
      if (err) throw err
    });
    break;
    case '21:00:00':
    player.play('sound/21.mp3', function(err){
      if (err) throw err
    });
    break;
    case '22:00:00':
    player.play('sound/22.mp3', function(err){
      if (err) throw err
    });
    break;
    case '23:00:00':
    player.play('sound/23.mp3', function(err){
      if (err) throw err
    });
    break;
  }
}
