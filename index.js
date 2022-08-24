// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    console.log(leftNumbers)
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  

  function moveDodgerRight() {
    const LeftNumbers = dodger.style.left.replace("px", "");
    const Left = parseInt(LeftNumbers, 10);
  
    if (Left < 360) {
      dodger.style.left = `${Left + 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });