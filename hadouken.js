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
    this.src = 'http://i.imgur.com/Rfj0a80.png';
    $('#ryu').append("<img class='hadouken' src='http://i.imgur.com/oTyQRvX.gif' style='position:relative; bottom: 103px;'>");
    $('.hadouken').animate({
      "margin-left": "50%"
    },
      1000, 'swing', function(){
      this.remove();
    });
  });
  $('#ryu img').mouseup(function(){
    this.src = 'http://i.imgur.com/90Mmdcm.png';
  });
};
