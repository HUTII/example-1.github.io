// JavaScript Document
function openPlayer() {
  document.getElementById("getplayer").style.display = "flex";
}

function closePlayer() {
  var video = document.getElementById('myVideo');
  video.pause();
  document.getElementById("getplayer").style.display = "none";
  playPause();
}
var r_name = document.getElementById('closebtn');

r_name.addEventListener('mouseover', function () {
  r_name.classList.remove('rotate_2');
  r_name.classList.add('rotate_1');
});

r_name.addEventListener('mouseout', function () {
  r_name.classList.remove('rotate_1');
  r_name.classList.add('rotate_2');
});
