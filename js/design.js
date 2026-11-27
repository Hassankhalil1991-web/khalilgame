function setTheme() {
    var styleSheet = document.getElementById('color-stylesheet');
    if (styleSheet) {
        styleSheet.setAttribute('href', './includes/css/colors/default.css');
        storage.set('color', 'default');
    }
}

function loadLayout() {
    storage.set('theme', 'index');
    var radioElement = document.querySelector('input[name="theme"][value="index"]');
    ui.initialScreen.classList.remove('compact');
    ui.clickToStartText.textContent = (window.lang && window.lang.clickToStart) || 'Click to Start';
    if (radioElement) {
        radioElement.checked = true;
    }
}

function loadTheme() {
    storage.set('color', 'default');
    setTheme();
}
