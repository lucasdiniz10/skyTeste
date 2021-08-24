let isDarkMode = false;

function toogleDarkMode() {
  isDarkMode = !isDarkMode
  if (isDarkMode) {
    $('html').addClass('dark');
    $('#dark-mode-checkbox').prop("checked", true);
  } else {
    $('html').removeClass('dark');
    $('#dark-mode-checkbox').prop("checked", false);
  }
}