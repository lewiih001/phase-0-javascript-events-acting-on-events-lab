// Your code here
//const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  //const dodger = document.getElementById("dodger");
  const dodger = document.getElementById("dodger");

  function moveDodgerRight() {
    const LeftNumbers = dodger.style.left.replace("px", "");
    const Left = parseInt(LeftNumbers, 10);
  
    if (Left > 0) {
      dodger.style.left = `${left + 1}pxpxpx`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerRight()();
    }
  });