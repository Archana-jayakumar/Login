document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.getElementById('signin-form');
    const signUpForm = document.getElementById('signup-form');
    const signUpContainer = document.getElementById('signup-container');
    const switchSignUp = document.getElementById('switch-signup');
    const switchSignIn = document.getElementById('switch-signin');
    const modeToggleBtn = document.getElementById('mode-toggle-btn');
  
    signInForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = signInForm.elements['email'].value;
      const password = signInForm.elements['password'].value;
      if (!email || !password) {
        alert('Please fill in all fields');
        return;
      }
      console.log('Signing in...');
      signInForm.reset();
    });
  
    signUpForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = signUpForm.elements['username'].value;
      const email = signUpForm.elements['email'].value;
      const password = signUpForm.elements['password'].value;
      if (!username || !email || !password) {
        alert('Please fill in all fields');
        return;
      }
      console.log('Signing up...');
      signUpForm.reset();
    });
  
    switchSignUp.addEventListener('click', function(event) {
      event.preventDefault();
      signInForm.classList.add('hidden');
      signUpContainer.classList.remove('hidden');
    });
  
    switchSignIn.addEventListener('click', function(event) {
      event.preventDefault();
      signUpContainer.classList.add('hidden');
      signInForm.classList.remove('hidden');
    });
  
    modeToggleBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      const currentMode = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
      modeToggleBtn.textContent = 'Toggle ' + currentMode;
    });
  });
  