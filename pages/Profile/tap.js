document.getElementById("upload-button").addEventListener("click", function () {
  document.getElementById("profile-image-input").click();
});

document
  .getElementById("profile-image-input")
  .addEventListener("change", function (event) {
    var input = event.target;
    var file = input.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
      var img = document.getElementById("profile-image");
      var secondImg = document.getElementById("second-image");
      img.src = e.target.result;
      secondImg.src = e.target.result;
      img.style.display = "block";
      secondImg.style.display = "block";

      localStorage.setItem("profileImage", e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      alert("Iltimos, rasm faylini tanlang.");
    }
  });

window.addEventListener("load", function () {
  var storedImage = localStorage.getItem("profileImage");
  if (storedImage) {
    var img = document.getElementById("profile-image");
    var secondImg = document.getElementById("second-image");
    img.src = storedImage;
    secondImg.src = storedImage;
    img.style.display = "block";
    secondImg.style.display = "block";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".nav-button");
  const tabs = document.querySelectorAll(".tab");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute("data-tab");

      buttons.forEach((btn) => {
        btn.classList.remove("active");
        btn.querySelector(".underline").classList.remove("active");
      });
      tabs.forEach((tab) => tab.classList.remove("active"));

      button.classList.add("active");
      button.querySelector(".underline").classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });
});

function animateValue(obj, start, end, duration, formatFn) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    obj.innerHTML = formatFn ? formatFn(value) : value;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else if (formatFn) {
      obj.innerHTML = formatFn(end);
    } else {
      obj.innerHTML = end;
    }
  };
  window.requestAnimationFrame(step);
}
document.addEventListener("DOMContentLoaded", () => {
  const counter1 = document.getElementById("counter1");
  const counter2 = document.getElementById("counter2");
  const counter3 = document.getElementById("counter3");
  const counter4 = document.getElementById("counter4");

  animateValue(
    counter1,
    0,
    2500,
    2000,
    (value) => (value / 1000).toFixed(1) + "k"
  );
  animateValue(
    counter2,
    0,
    1300,
    2000,
    (value) => (value / 1000).toFixed(1) + "k"
  );
  animateValue(counter3, 0, 653, 2000);
  animateValue(counter4, 0, 12334, 2000, (value) => value.toLocaleString());
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("animate-button");

  function updateButtonWidth() {
    const widthPercentage = 80;
    let startWidth = 5;
    const duration = 2000;
    const startTime = performance.now();
    function step(timestamp) {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentWidth = Math.floor(
        progress * (widthPercentage - startWidth) + startWidth
      );
      button.style.width = `${currentWidth}%`;
      button.textContent = `${currentWidth}%`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        button.textContent = `${widthPercentage}%`;
      }
    }

    requestAnimationFrame(step);
  }

  setTimeout(updateButtonWidth, 100);
});

AOS.init();
