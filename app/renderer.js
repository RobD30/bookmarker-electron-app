const newLinkUrl = document.querySelector('#new-link-url');
const newLinkSubmit = document.querySelector('.new-link-form--submit');

newLinkUrl.addEventListener('keyup', () => {
    newLinkSubmit.disable = !newLinkUrl.validity.valid;
});