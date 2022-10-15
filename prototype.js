window.onload=function(){
/*
const boxs = Array.from(document.getElementsByClassName('boundary'));

// 👇️ Change text color on mouseover
boxs.forEach(box => {
  box.addEventListener('mouseover', function handleMouseOver() {

      box.style.backgroundColor = 'red';
});
});
// 👇️ Change text color back on mouseout
for (const box of boxs) {
  box.addEventListener('mouseout', function handleMouseOut() {
    box.style.backgroundColor = '#eeeeee';
});
}
*/

const boxs = Array.from(document.getElementsByClassName('boundary'));
var loser = false;
var status = document.getElementById('status');
var start = document.getElementById('start');
var end = document.getElementById('end');

start.addEventListener('mouseover',function() {
  status.innerHTML = "Move Mouse";

    boxs.forEach(box => {
      box.addEventListener('mouseover', function handleMouseOver() {
          box.style.backgroundColor = 'red';  
           loser = true;
          

    });
    });



end.addEventListener('mouseover',function(){

 
  if(loser) {
      alert("Sorry, you lost.");
      status.innerHTML = "you lost !!!";
  } else {
      alert("You win! ");
      status.innerHTML = "You win!";
  
}

})

})





}














