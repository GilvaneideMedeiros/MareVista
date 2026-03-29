window.addEventListener('DOMContentLoaded', function() {
    var themeSelect = document.getElementById('theme-select');

    function applyTheme(themePreference) {
        document.body.setAttribute('data-theme', themePreference);
    }

    // Migra preferência antiga "system" para "light".
    var savedThemePreference = localStorage.getItem('themePreference');
    if (savedThemePreference !== 'dark' && savedThemePreference !== 'light') {
        savedThemePreference = 'light';
    }

    themeSelect.value = savedThemePreference;
    applyTheme(savedThemePreference);

    themeSelect.addEventListener('change', function(event) {
        var selectedTheme = event.target.value;
        localStorage.setItem('themePreference', selectedTheme);
        applyTheme(selectedTheme);
    });

    setTimeout(function() {
        document.getElementById('splash').classList.add('hide');
    }, 2200); // 2,2 segundos
});
