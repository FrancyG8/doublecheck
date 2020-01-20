$(document).ready(function() {

// //giustosbagliato
//   $('#OP1').click(function() {
//     $('#q6').css({
//       fill: "#FFFFFF"
//     });
//   });
//   $('#OP2').click(function() {
//     $('#q6').css({
//       fill: "#000000"
//     });
//   });


//--Barra del tempo movimento
  var tempo = gsap.timeline();
  tempo.to(".rettangolo-rosso", {duration: 30, scaleY: 0, transformOrigin: "bottom", backgroundColor: "#FF0000"});
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 15, opacity: 0}, "<"); //1
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //2
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //3
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //4
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //5
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //6
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //7
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //8
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //9
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //10
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //11
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //12
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //13
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //14
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //15
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //16
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //17
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //18
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //19
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //20
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //21
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //22
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //23
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //24
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //25
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //26
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //27
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //28
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 0}, "<"); //29
  tempo.to(".rettangolo-rosso", {duration: 0.5, delay: 0.5, opacity: 1}, "<"); //30
});


//--Prova Azione Slider
const $img2 = document.querySelector('.image2');
const $logo = document.querySelector('.transition__logo');
const $frameBlack = document.querySelector('.page-transition__black');
const $frameRed = document.querySelector('.page-transition__red');
const $button = document.querySelector('#button');

let tltransition = new TimelineMax({paused:true})
  .fromTo($frameRed , 2.2, {scaleX: 0},{scaleX: 1, transformOrigin:'left', ease: Power4.easeInOut},)
  .fromTo($frameBlack , 2.2, {scaleX: 0},{scaleX: 1, transformOrigin:'left', ease: Power4.easeInOut},.2)
  .fromTo($logo , 1.6, {xPercent: -100, autoAlpha:0 },{xPercent: 0, autoAlpha:1, ease: Power4.easeInOut},.7)
  .set($frameRed, {scaleX:0})
  .set($img2, {autoAlpha:0})
  .to($frameBlack , 2.2, {scaleX: 0, transformOrigin:'right', ease: Power4.easeInOut})
  .to($logo , .2, {autoAlpha:0 },'-=1.2')

$button.addEventListener('click', () => {
  tltransition.play(0);
});
