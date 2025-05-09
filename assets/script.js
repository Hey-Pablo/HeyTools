const themes = ['theme-dark', 'theme-light', 'theme-gray'];
let currentTheme = 0;

function applyTheme(index) {
    document.body.classList.remove(...themes);
    document.body.classList.add(themes[index]);
    localStorage.setItem('themeIndex', index);
}

function toggleTheme() {
    currentTheme = (currentTheme + 1) % themes.length;
    applyTheme(currentTheme);
}

window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('themeIndex');
    if (savedTheme !== null) {
        currentTheme = parseInt(savedTheme, 10);
        applyTheme(currentTheme);
    }
});

// Sidebar toggle
document.getElementById('toggleSidebar').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');

    const icon = sidebar.querySelector('.toggle-btn i');
    icon.classList.toggle('fa-chevron-right');
    icon.classList.toggle('fa-chevron-left');
});
