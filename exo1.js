
const boxs = Array.from(document.getElementsByClassName('boundary'));

// 👇️ Change text color on mouseover
boxs.forEach(box => {
  box.addEventListener('mouseover', function handleMouseOver() {

      box.style.backgroundColor = 'red';
      loser = true;
});
});
// 👇️ Change text color back on mouseout

boxs.forEach(box => {
    box.addEventListener('mouseover', function handleMouseOver() {
  
    box.style.backgroundColor = '#eeeeee';
  });
  });



