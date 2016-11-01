$(document).ready(function(){
  makeRyuFight();
});

var makeRyuFight = function(){
  $('#ryu').html("<img src='http://i.imgur.com/90Mmdcm.png'>");
  $('#ryu img').hover(function(){
    this.src = 'http://i.imgur.com/nTj3Fxx.gif';
  },
  function(){
    this.src = 'http://i.imgur.com/90Mmdcm.png';
  });
  $('#ryu img').mousedown(function(){
    this.src = 'http://i.imgur.com/Rfj0a80.png'
  });
  $('#ryu img').mouseup(function(){
    this.src = 'http://i.imgur.com/90Mmdcm.png'
  });
};
