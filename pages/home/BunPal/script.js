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

  //   followBtn.addEventListener("click", function () {
  //     if (followBtn.textContent === "Follow") {
  //       followBtn.textContent = "Unfollow";
  //     } else {
  //       followBtn.textContent = "Follow";
  //     }
  //   });
});
