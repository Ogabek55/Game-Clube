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
