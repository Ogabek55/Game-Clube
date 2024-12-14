document.addEventListener("DOMContentLoaded", function () {
  const followBtnList = document.querySelectorAll("#followBtn");

  followBtnList.forEach((item) => {
    item.addEventListener("click", function () {
      if (item.textContent.trim() === "Follow") {
        item.textContent = "Unfollow";
      } else {
        item.textContent = "Follow";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("project_accaunt_cart1_div2_P");
  const targetNumber = 12256;
  const duration = 1000;
  const startTime = performance.now();
  function animateCount(currentTime) {
    const elapsedTime = currentTime - startTime;
    const currentNumber = Math.min(
      targetNumber,
      Math.floor((elapsedTime / duration) * targetNumber)
    );
    element.textContent = currentNumber.toLocaleString();
    if (elapsedTime < duration) {
      requestAnimationFrame(animateCount);
    } else {
      element.textContent = targetNumber.toLocaleString();
    }
  }
  requestAnimationFrame(animateCount);
});
