document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.login');
    const logoutButton = document.querySelector('.logout');
    const signupButton = document.querySelector('.signup');
    const modalDiv = document.querySelector('.modalDiv');

    /* LOGIN BUTTON */
    logoutButton.addEventListener('click', event => {
        console.log('WOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOW')
        modalDiv.setAttribute('style', 'display: block;')
        // modalDiv.createAttribute('style', 'display: block;')
    });
});
