$(document).ready(function() {
//home
  var currentX = '';
  var currentY = '';
  var movementConstant = .015;
  $(document).mousemove(function(e) {
    if(currentX == '') currentX = e.pageX;
    var xdiff = e.pageX - currentX;
    currentX = e.pageX;
     if(currentY == '') currentY = e.pageY;
    var ydiff = e.pageY - currentY;
    currentY = e.pageY;
    $('.immagini').each(function(i, el) {
        var movement = (i + 2) * (xdiff * movementConstant);
  	  var movementy = (i + 2) * (ydiff * movementConstant);
        var newX = $(el).position().left + movement;
  	  var newY = $(el).position().top + movementy;
        $(el).css('left', newX + 'px');
  	  $(el).css('top', newY + 'px');
    });
  });

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


//--Transizione
window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
  });

});
