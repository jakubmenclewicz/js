document.getElementById('accept-cookies').addEventListener('click', function() {
    document.getElementById('cookie-consent').style.display = 'none';
    localStorage.setItem('cookieConsent', 'true');
  });
  
  if (!localStorage.getItem('cookieConsent')) {
    document.getElementById('cookie-consent').style.display = 'block';
  }