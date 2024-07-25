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

//New information added from profile
var entries = [];
function appendText() {
  var input = document.getElementById("textInput").value;
  var now = new Date();
  entries.push({ text: input, time: now });
  updateOutput();
  document.getElementById("textInput").value = "";
}
function updateOutput() {
  var output = document.getElementById("output");
  output.innerHTML = "";
  entries.forEach((entry) => {
    var newEntry = document.createElement("div");
    var now = new Date();
    var elapsedSeconds = Math.floor((now - entry.time) / 1000);
    var elapsed = formatElapsed(elapsedSeconds);
    newEntry.textContent = entry.text;
    output.appendChild(newEntry);
    var whichTime = document.getElementById("whichTime");
    whichTime.textContent = elapsed + " ago";
  });
}
function formatElapsed(seconds) {
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var secs = seconds % 60;
  var result = "";
  if (hours > 0) {
    result += hours + " h";
  }
  if (minutes > 0) {
    result += minutes + " m ";
  }
  if (secs > 0) {
    result += secs + " s";
  }
  return result;
}
setInterval(updateOutput, 1000);

// value from 0 when the page refreshes
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
  animateValue(counter1, 0, 12334, 2000, (value) => value.toLocaleString());
});
