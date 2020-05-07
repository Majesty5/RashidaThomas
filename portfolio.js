// Rashida's Portfolio JavaScript Document
document.ready;
var song = document.getElementById("mySong");

function playSong() {
  song.play();
}

function pauseSong() {
 song.pause();

}
var video = document.getElementById("flowers");
function flowers() {
  video.pause();

}
/*window.onload=function(){
document.getElementById("mySong").play();
}*/
/*$(document).ready(function() {
    $("#mySong").get(0).play();
});*/

function landing(){
  window.open("Index.html", '_blank');
}
function newPage2(){
  window.open("page2.html", '_blank');
}

function newPageBio(){
  window.open("page3.html", '_blank');
}

function newPageResume(){
  window.open("page5.html", '_blank');
}

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
if (video.paused) {
  video.play();
  btn.innerHTML = "Pause";
} else {
  video.pause();
  btn.innerHTML = "Play";
}
}
