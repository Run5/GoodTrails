document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.login');
    const logoutButton = document.querySelector('.logout');
    const signupButton = document.querySelector('.signup');
    const modalDiv = document.querySelector('.modalDiv');
    const returnButton = document.querySelector('.return')
    const secondModal = document.querySelector('.secondModal')
    const secondReturnButton = document.querySelector('.return2')
    /* LOGIN BUTTON */
    logoutButton.addEventListener('click', event => {

        // modalDiv.createAttribute('style', 'display: block;')
    });
    loginButton.addEventListener('click', event => {
        loginButton.classList.add('on')
        modalDiv.setAttribute('style', 'display: block;')
      
    })
    returnButton.addEventListener('click', event => {
        modalDiv.setAttribute('style', 'display: none;')
        loginButton.classList.add('off')

    })
    signupButton.addEventListener('click', event => {
        signupButton.classList.add('on')
        secondModal.setAttribute('style', 'display: block;')

    })
    secondReturnButton.addEventListener('click', event => {
        secondModal.setAttribute('style', 'display: none;')
        signupButton.classList.add('off')

    })
    if(loginButton.classList === 'on') {
        signupButton.disabled = true;
    } else if (signupButton.classList === 'on') {
        loginButton.disabled = true;
    }
});
