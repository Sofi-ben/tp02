window.onload=function(){
/*

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
    /**
     exo 3,4
     */
    function gameEnd() {
      end.addEventListener('mouseover',function(){
    
     
      if(loser) {
          alert("Sorry, you lost.");
          status.innerHTML = "you lost !!!";
      } else {
          alert("You win! ");
          status.innerHTML = "You win!";
      
    }
    
    })
    }
gameEnd();

})





}














