document.addEventListener("DOMContentLoaded", async () => {

  const demoButton = document.querySelector('.demo');
  const emailInput = document.querySelector('.email');
  const pwInput = document.querySelector('.password');

  demoButton.addEventListener("click", async () => {
    emailInput.setAttribute('value','email@email.com');
    pwInput.setAttribute('value','password');
  });//endSubmitEventListener
  
});//endDOMContentLoadedEventListener
