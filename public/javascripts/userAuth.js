document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.login');
    const logoutButton = document.querySelector('.logout');
    const signupButton = document.querySelector('.signup');
    const modalDiv = document.querySelector('.modalDiv');
    const returnButton = document.querySelector('.return')
    /* LOGIN BUTTON */
    logoutButton.addEventListener('click', event => {

        // modalDiv.createAttribute('style', 'display: block;')
    });
    loginButton.addEventListener('click', event => {
        modalDiv.setAttribute('style', 'display: block;')
        const on = true;
    })
    returnButton.addEventListener('click', event => {
        modalDiv.setAttribute('style', 'display: none;')
    })
    signupButton.addEventListener('click', event => {
        modalDiv.setAttribute('style', 'display: block;')
        const off = false;
    })
});
