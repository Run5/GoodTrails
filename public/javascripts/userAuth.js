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

    });
    loginButton.addEventListener('click', event => {
        loginButton.classList.add('on')
        modalDiv.setAttribute('style', 'display: block;')
        signupButton.setAttribute('disabled', 'disabled')

    })
    returnButton.addEventListener('click', event => {
        modalDiv.setAttribute('style', 'display: none;')
        loginButton.classList.remove('on')
        signupButton.removeAttribute('disabled', 'disabled')

    })
    signupButton.addEventListener('click', event => {
        signupButton.classList.add('on')
        secondModal.setAttribute('style', 'display: block;')
        loginButton.setAttribute('disabled', 'disabled')

    })
    secondReturnButton.addEventListener('click', event => {
        secondModal.setAttribute('style', 'display: none;')
        signupButton.classList.remove('on')
        loginButton.removeAttribute('disabled', 'disabled')

    })
    if(loginButton.classList.contains === 'on') {
        signupButton.setAttribute('disabled', 'disabled')
        loginButton.removeAttribute('disabled', 'disabled')
        // signupButton.disabled = true;
    } else if (signupButton.classList.contains === 'on') {
        // loginButton.disabled = true;
        loginButton.setAttribute('disabled', 'disabled')
        signupButton.removeAttribute('disabled', 'disabled')

    }
});
