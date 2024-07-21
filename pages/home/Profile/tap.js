function progress() {
    let progr = document.getElementById("progress");
    let percent = document.getElementById("countText");
    let counter = 5;
    let progress = 25;
    let id = setInterval(frame, 50);
  
    function frame() {
      if (progress == 500 && counter == 100) {
        clearInterval(id);
        document.getElementById("loader").style.display = "none";
        // document.getElementById("my_page").style.display = "flex";
      } else {
        progress += 5;
        counter += 1;
        progr.style.width = progress + "px";
        percent.innerHTML = counter + "%";
      }
    }
  }
  
  progress();

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-button');
    const tabs = document.querySelectorAll('.tab');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            buttons.forEach(btn => {
                btn.classList.remove('active');
                btn.querySelector('.underline').classList.remove('active');
            });
            tabs.forEach(tab => tab.classList.remove('active'));

            button.classList.add('active');
            button.querySelector('.underline').classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});

AOS.init();