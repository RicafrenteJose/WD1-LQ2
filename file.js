const settingsBtn = document.getElementById('settingsBtn');
const dropdown = document.getElementById('dropdown');

settingsBtn.addEventListener('click', function() {
  dropdown.classList.toggle('hidden');
});
