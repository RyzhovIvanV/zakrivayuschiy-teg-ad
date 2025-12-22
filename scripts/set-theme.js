function changeTheme(theme) {
  document.documentElement.className = ''; // Сбрасываем все классы
  if (theme !== 'auto') {
    document.documentElement.classList.add(`theme-${theme}`);
  }
  localStorage.setItem('theme', theme);
  setDisabledButton(theme);
}

function setDisabledButton(activeTheme) {
  const themeButtons = document.querySelectorAll('.theme-menu__button');
  themeButtons.forEach((btn) => {
    if (btn.getAttribute('data-theme') === activeTheme) {
      btn.setAttribute('disabled', true);
    } else {
      btn.removeAttribute('disabled');
    }
  });
}

(function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'auto';
  changeTheme(savedTheme);
})();

document.addEventListener('DOMContentLoaded', () => {
  const themeButtons = document.querySelectorAll('.theme-menu__button');
  themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedTheme = button.getAttribute('data-theme');
      changeTheme(selectedTheme);
    });
  });
});
