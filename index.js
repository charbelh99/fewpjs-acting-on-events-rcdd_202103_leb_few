document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }else if(e.key === "ArrowRight"){
    moveDodgerRight();
  }
});
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
function moveDodgerRight() {
  let RightNumbers = dodger.style.right.replace("px", "");
  let Right = parseInt(RightNumbers, 10);
 
  if (Right > 0) {
    dodger.style.right = `${Right - 1}px`;
  }
}
