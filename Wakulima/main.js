import './style.scss';
import { createPopper } from '@popperjs/core';

const authBtn = document.getElementById('auth-btn');
const authPopup = document.getElementById('auth-popup');

const authPopupInstance = createPopper(authBtn, authPopup);

function showAuthPopup() {
  authPopup.setAttribute('data-show', '');

  authPopupInstance.update();
}

function hideAuthPopup() {
  authPopup.removeAttribute('data-show');
}

function toggleAuthPopup() {
  if (authPopup.hasAttribute('data-show')) {
    hideAuthPopup()
  } else {
    showAuthPopup()
  }
}

authBtn.addEventListener('click', toggleAuthPopup);