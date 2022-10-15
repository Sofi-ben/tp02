function mousemove(event){
  console.log(
  "pageX: ",event.pageX, 
  "pageY: ", event.pageY, 
  "clientX: ", event.clientX, 
  "clientY:", event.clientY);

}


window.addEventListener('mousemove', mousemove);



var loser = false; 

document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(event) {



  if (event.pageX>90 && event.pageX<240 &&event.pageY>125 &&event.pageY<330) {
    loser = true;
  }
  if (event.pageX>290 && event.pageX<390 &&event.pageY>225 &&event.pageY<375) {
    loser = true;
  }
  if (event.pageX>440 && event.pageX<590 &&event.pageY>125 &&event.pageY<330) {
    loser = true;
  }
  if (event.pageX>90 && event.pageX<590 &&event.pageY>375 &&event.pageY<430) {
    loser = true;
  }
  if (event.pageX>240 && event.pageX<440 &&event.pageY>125 &&event.pageY<180) {
    loser = true;
  }
}
function overBoundary() {
  loser = true;
  var boundaries = ("div#maze div.boundary");
  for (var i = 0; i < boundaries.length; i++) {
      boundaries[i].addClassName("youlose");
  }
}

function startClick() {
  loser = false;
  var boundaries = ("div#maze div.boundary");
  for (var i = 0; i < boundaries.length; i++) {
      boundaries[i].removeClassName("youlose");
  }
}


function overEnd() {
  if(loser) {
      alert("Sorry, you lost.");
  } else {
      alert("You win! ");
  }
}